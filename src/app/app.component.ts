import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ThemeService } from './services/dark-mode/dark-mode.service';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutMyselfComponent } from './pages/about-myself/about-myself.component';
import { DarkButtonComponent } from './components/dark-button/dark-button.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BackTopButtonComponent } from './components/back-top-button/back-top-button.component';

const components = [
  CommonModule,
  RouterOutlet,
  SidenavComponent,
  SkillsComponent,
  FooterComponent,
  ContactComponent,
  AboutMyselfComponent,
  DarkButtonComponent,
  WorkExperienceComponent,
  ProjectsComponent,
  BackTopButtonComponent,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...components],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isDarkMode: boolean;

  constructor(private themeService: ThemeService,) {
    this.isDarkMode = this.themeService.getDarkMode();
    this.themeService.darkModeChanges.subscribe((darkMode: boolean) => {
      this.isDarkMode = darkMode;
    });
  }

  toggleDarkMode(isDarkMode: boolean) {
    this.themeService.setDarkMode(isDarkMode);
  }
}
