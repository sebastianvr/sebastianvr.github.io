import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkButtonComponent } from './dark-button.component';

describe('DarkButtonComponent', () => {
  let component: DarkButtonComponent;
  let fixture: ComponentFixture<DarkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
