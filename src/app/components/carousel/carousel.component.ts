import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Project } from '../../pages/projects/projects.component';


@Component({
  selector: 'component-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements AfterViewInit {
  @Input() projectPortfolio: Project[] = [];


  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Solo ejecuta este código en el navegador
      initFlowbite();
    }
  }
}
