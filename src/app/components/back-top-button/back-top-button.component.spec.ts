import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTopButtonComponent } from './back-top-button.component';

describe('BackTopButtonComponent', () => {
  let component: BackTopButtonComponent;
  let fixture: ComponentFixture<BackTopButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackTopButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackTopButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
