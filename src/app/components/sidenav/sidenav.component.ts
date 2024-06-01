import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'component-sidenav',
  standalone: true,
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @Output() toggleDarkModeEvent = new EventEmitter<void>();

  constructor(private viewportScroller: ViewportScroller) { }

  toggleDarkMode() {
    this.toggleDarkModeEvent.emit();
  }

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

}
