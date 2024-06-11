import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailData, EmailService } from '../../services/email/email.service';
import { CommonModule } from '@angular/common';
import { catchError, of, tap } from 'rxjs';
import { ToastComponent } from '../../components/toast/toast.component';

const components = [
  ReactiveFormsModule,
  CommonModule,
  ToastComponent,
];

@Component({
  selector: 'page-contact',
  standalone: true,
  imports: [...components],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm!: FormGroup;
  emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  isSending: boolean = false;
  showToast: boolean = false;
  toastType: 'success' | 'error' = 'success';
  toastMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService,
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]],
      message: ['', Validators.required]
    });

    // Debug mode
    // this.setFormTest();
  }

  private setFormTest() {
    this.contactForm.patchValue({
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      message: 'Este es un mensaje de prueba.'
    });
  }

  public invalidField(campo: string): boolean {
    const control = this.contactForm.get(campo)!!;
    return control.invalid && (control.dirty || control.touched);
  }

  public sendForm() {
    if (!this.isSending && this.contactForm.valid) {
      this.isSending = true;
      const emailData = this.transformFormDataToEmailData(this.contactForm.value);

      this.emailService.sendEmail(emailData).pipe(
        tap(response => {
          this.showToast = true;
          this.toastType = 'success';
          this.toastMessage = '¡Mensaje enviado correctamente!';
          setTimeout(() => {
            this.showToast = false;
          }, 5000);
        }),
        catchError(error => {
          this.showToast = true;
          this.toastType = 'error';
          this.toastMessage = '¡Error al enviar el mensaje!';
          setTimeout(() => {
            this.showToast = false;
          }, 5000);
          return of(null);
        })
      ).subscribe(() => {
        this.isSending = false;
        this.contactForm.reset(); // Resetear el formulario después de enviar o error
      });
    }

    return;
  }


  private transformFormDataToEmailData(formData: any): EmailData {
    return {
      to: formData.name,
      subject: formData.email,
      body: formData.message
    };
  }
}
