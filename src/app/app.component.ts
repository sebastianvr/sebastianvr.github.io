import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutMyselfComponent } from './pages/about-myself/about-myself.component';
import { DarkButtonComponent } from './components/dark-button/dark-button.component';

const components = [
  RouterOutlet,
  SidenavComponent,
  SkillsComponent,
  FooterComponent,
  ContactComponent,
  AboutMyselfComponent,
  DarkButtonComponent
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...components],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  toggleDarkMode(isDarkMode: boolean) {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

}
