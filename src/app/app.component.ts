import { AfterViewInit, Component, OnInit, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutMyselfComponent } from './pages/about-myself/about-myself.component';
import { DarkButtonComponent } from './components/dark-button/dark-button.component';
import { ThemeService } from './services/dark-mode/dark-mode.service';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';

const components = [
  CommonModule,
  RouterOutlet,
  SidenavComponent,
  SkillsComponent,
  FooterComponent,
  ContactComponent,
  AboutMyselfComponent,
  DarkButtonComponent,
  WorkExperienceComponent
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

  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.getDarkMode();
    this.themeService.darkModeChanges.subscribe((darkMode: boolean) => {
      this.isDarkMode = darkMode;
    });
  }

  toggleDarkMode(isDarkMode: boolean) {
    this.themeService.setDarkMode(isDarkMode);
  }
}
