import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';

import { CSSPlugin } from 'gsap/CSSPlugin';

gsap.registerPlugin(CSSPlugin);
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
export class SkillsComponent implements AfterViewInit {
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
    { name: 'NestJs', path: 'nest-js', url: 'https://nestjs.com/' },
    { name: 'Mongo-DB', path: 'mongo-db', url: 'https://www.mongodb.com/es' },
  ];
  @ViewChildren('skill') skillElements!: ElementRef[];

  ngAfterViewInit(): void {
    this.skillElements.forEach((element, index) => {
      gsap.from(element.nativeElement, {
        scale: 0.9,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        duration: 0.3,
        ease: 'power2.inOut',
      });
      element.nativeElement.addEventListener('mouseenter', () => {
        gsap.to(element.nativeElement, {
          scale: 1,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          duration: 0.3,
          ease: 'power2.inOut',
        });
      });
      element.nativeElement.addEventListener('mouseleave', () => {
        gsap.to(element.nativeElement, {
          scale: 0.9,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          duration: 0.3,
          ease: 'power2.inOut',
        });
      });
    });
  }
}
