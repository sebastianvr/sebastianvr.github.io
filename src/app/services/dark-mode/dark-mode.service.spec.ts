import { TestBed } from '@angular/core/testing';
import { ThemeService } from './dark-mode.service';

describe('DarkModeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
