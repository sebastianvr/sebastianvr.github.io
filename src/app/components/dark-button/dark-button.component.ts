import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../../services/dark-mode/dark-mode.service';

@Component({
  selector: 'component-dark-button',
  standalone: true,
  imports: [],
  templateUrl: './dark-button.component.html',
  styleUrl: './dark-button.component.css'
})
export class DarkButtonComponent {
  @Output() toggleDarkModeEvent = new EventEmitter<boolean>();
  isDarkMode: boolean;

  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.getDarkMode();
  }

  public toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
    this.toggleDarkModeEvent.emit(this.isDarkMode);
  }
}
