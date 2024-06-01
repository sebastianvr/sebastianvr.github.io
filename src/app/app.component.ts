import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutMyselfComponent } from './pages/about-myself/about-myself.component';

const components = [
  RouterOutlet,
  SidenavComponent,
  SkillsComponent,
  FooterComponent,
  ContactComponent,
  AboutMyselfComponent
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...components],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  isDarkMode: boolean = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }

}
