import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';

export interface Project {
  index: number,
  src: string,
}


@Component({
  selector: 'page-projects',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectPortfolio: Project[] = [
    { index: 0, src: 'project-portfolio/about-me' },
    { index: 1, src: 'project-portfolio/experience' },
    { index: 2, src: 'project-portfolio/projects' },
    { index: 3, src: 'project-portfolio/contact' }
  ];

  pymesMktProyect: Project[] = [
    { index: 0, src: 'project-pymes/home-user' },
    { index: 1, src: 'project-pymes/user-menu' },
    { index: 2, src: 'project-pymes/admin-menu' },
    { index: 3, src: 'project-pymes/graph-1' },
    { index: 4, src: 'project-pymes/graph-2' }
  ];
}
