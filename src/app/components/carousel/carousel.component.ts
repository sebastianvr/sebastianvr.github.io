import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { After } from 'v8';

interface Project {
  index: number,
  src : string,
}

@Component({
  selector: 'component-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements AfterViewInit {
  projectPortfolio: Project[] = [
    {
      index: 0,
      src: 'about-me'
    },
    {
      index: 1,
      src: 'experience'
    },
    {
      index: 2,
      src: 'projects'
    },
    {
      index: 3,
      src: 'contact'
    },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Solo ejecuta este código en el navegador
      initFlowbite();
    }
  }
}
