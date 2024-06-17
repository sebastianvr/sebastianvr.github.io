import { Component } from '@angular/core';

@Component({
  selector: 'page-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  loading = true;
  images = "";

  constructor() { }

}
