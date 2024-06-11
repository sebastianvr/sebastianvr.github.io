import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

@Component({
  selector: 'component-sidenav',
  standalone: true,
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements AfterViewInit {
  sectionAbout!: HTMLElement | null;
  sectionSkills!: HTMLElement | null;
  sectionContact!: HTMLElement | null;
  sectionWorkExperience!: HTMLElement | null;

  constructor() { }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.sectionAbout = document.querySelector('#about-myself');
      this.sectionSkills = document.querySelector('#my-skills');
      this.sectionWorkExperience = document.querySelector('#work-experience');
      this.sectionContact = document.querySelector('#contact');
    }
  }

  public scrollToSection(sectionId: string): void {
    let section: HTMLElement | null;

    switch (sectionId) {
      case 'about-myself':
        section = this.sectionAbout;
        break;
      case 'my-skills':
        section = this.sectionSkills;
        break;
      case 'work-experience':
        section = this.sectionWorkExperience;
        break;
      case 'contact':
        section = this.sectionContact;
        break;
      default:
        return;
    }

    if (section) {
      // Crear una línea de tiempo de GSAP
      const tl = gsap.timeline();

      // Añadir un efecto de rebote al inicial
      tl.to(window, {
        duration: 0.5,
        scrollTo: { y: `+=20` }, // Rebotar hacia abajo
        ease: 'power2.out'
      });

      // Añadir la animación de scroll
      tl.to(window, {
        duration: 1,
        scrollTo: { y: section, offsetY: 100 },
        ease: 'power2.inOut'
      });
    } else {
      console.error('No se pudo obtener la referencia al elemento de la sección:', sectionId);
    }
  }

}
