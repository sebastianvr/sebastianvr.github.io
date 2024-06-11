import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly darkModeKey = 'darkMode';
  darkModeChanges = new BehaviorSubject<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem(this.darkModeKey);
      if (savedTheme !== null) {
        const isDarkMode = JSON.parse(savedTheme);
        this.darkModeChanges.next(isDarkMode);
      } else {
        this.setDarkModeBasedOnTime();
      }
    }
  }

  private setDarkModeBasedOnTime() {
    const hour = new Date().getHours();
    const isDarkMode = hour >= 18 || hour < 6;
    this.setDarkMode(isDarkMode);
  }

  setDarkMode(isDarkMode: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.toggle('dark', isDarkMode);
      localStorage.setItem(this.darkModeKey, JSON.stringify(isDarkMode));
      this.darkModeChanges.next(isDarkMode);
    }
  }

  getDarkMode(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return document.body.classList.contains('dark');
    }
    return false;
  }
}
