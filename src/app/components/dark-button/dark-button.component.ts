import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'component-dark-button',
  standalone: true,
  imports: [],
  templateUrl: './dark-button.component.html',
  styleUrl: './dark-button.component.css'
})
export class DarkButtonComponent {
  @Output() toggleDarkModeEvent = new EventEmitter<boolean>();
  isDarkMode: boolean = true;

  public toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.toggleDarkModeEvent.emit(this.isDarkMode);
  }
}
