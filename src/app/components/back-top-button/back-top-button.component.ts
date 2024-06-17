import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'component-back-top-button',
  standalone: true,
  imports: [],
  templateUrl: './back-top-button.component.html',
  styleUrl: './back-top-button.component.css'
})
export class BackTopButtonComponent {
  isVisible = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const yOffset = window.scrollY;
    this.isVisible = yOffset > 200;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
