import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'page-about-myself',
  standalone: true,
  imports: [],
  templateUrl: './about-myself.component.html',
  styleUrl: './about-myself.component.css'
})
export class AboutMyselfComponent implements AfterViewInit {
  imagePath : string = '';
  name: string = 'Sebastián Vidal';
  job: string = 'Software';

  @ViewChild('nameEffect', { static: true }) titleTag!: ElementRef;
  @ViewChild('jobEffect', { static: true }) titleTag2!: ElementRef;

  ngAfterViewInit(): void {
    this.animateName();
    this.animateJob();
  }

  private animateName(): void {
    if (this.titleTag) {
      const nativeElement = this.titleTag.nativeElement
      const timeline = gsap.timeline({ repeat: 1 }); // Repetir 1

      // Animar name
      timeline.to(nativeElement, { duration: 1, opacity: 3 })
        // Cambiar el texto con un efecto de scrabble
        .to(nativeElement, { duration: 2, text: "010101010 10101" })
        // Cambiar el texto con un efecto de scrabble
        .to(nativeElement, { duration: 2, text: this.name });
    } else {
      console.error('Elemento h1 no encontrado');
    }
  }

  private animateJob(): void {
    if (this.titleTag2) {
      const nativeElement = this.titleTag2.nativeElement;
      const timeline = gsap.timeline({ repeat: 0, delay: 3 }); // Repetir 1

      // Animar job
      timeline.to(nativeElement, { duration: 1, opacity: 1 })
        .to(nativeElement, { duration: 2, text: "01010101" })
        .to(nativeElement, { duration: 2, text: this.job });
    } else {
      console.error('Elemento span no encontrado');
    }
  }

}
