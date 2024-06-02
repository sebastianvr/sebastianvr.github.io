import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'page-my-skills',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { name: 'Node.js', path: 'nodejs' },
    { name: 'Express', path: 'expressjs' },
    { name: 'Angular', path: 'angular' },
    { name: 'Sequelize', path: 'sequelize' },
    { name: 'MySql', path: 'mysql' },
    { name: 'Git', path: 'git' },
    { name: 'GitHub', path: 'github' },
    { name: 'Ng-bootstrap', path: 'ng-bootstrap' },
    { name: 'Bootstrap', path: 'bootstrap' },
    { name: 'Tailwind', path: 'tailwind' },
  ];
}
