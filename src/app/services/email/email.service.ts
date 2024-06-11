import { Injectable } from '@angular/core';
import { EmailJSResponseStatus } from 'emailjs-com';
import emailjs from 'emailjs-com';
import { Observable, from } from 'rxjs';
import { environment } from '../../../environments/environment';


export interface EmailData {
  to: string,
  subject: string,
  body: string,
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {

  private readonly EMAILJS_SERVICE_ID = environment.emailjs_service_id;
  private readonly EMAILJS_TEMPLATE_ID = environment.emailjs_template_id;
  private readonly EMAILJS_PUBLIC_KEY = environment.emailjs_public_key;

  constructor() { }

  sendEmail(emailData: EmailData): Observable<EmailJSResponseStatus> {
    const emailParams = {
      to_name: emailData.to,
      subject: emailData.subject,
      message: emailData.body,
    };

    return from(emailjs.send(
      this.EMAILJS_SERVICE_ID,
      this.EMAILJS_TEMPLATE_ID,
      emailParams,
      this.EMAILJS_PUBLIC_KEY
    ));
  }
}
