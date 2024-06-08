import { Component } from '@angular/core';

interface Skill {
  name: string,
  path: string,
  url: string,
}

@Component({
  selector: 'page-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Git', path: 'git', url: 'https://www.git-scm.com/' },
    { name: 'GitHub', path: 'github', url: 'https://github.com/' },
    { name: 'Node.js', path: 'nodejs', url: 'https://nodejs.org/en' },
    { name: 'Express', path: 'expressjs', url: 'https://expressjs.com/es/' },
    { name: 'Sequelize', path: 'sequelize', url: 'https://sequelize.org/' },
    { name: 'MySql', path: 'mysql', url: 'https://www.mysql.com/' },
    { name: 'Angular', path: 'angular', url: 'https://angular.dev/' },
    { name: 'Bootstrap', path: 'bootstrap', url: 'https://getbootstrap.com/' },
    { name: 'Tailwind', path: 'tailwind', url: 'https://tailwindcss.com/' },
    { name: 'Ng-bootstrap', path: 'ng-bootstrap', url: 'https://ng-bootstrap.github.io/#/home' },
  ];
}
