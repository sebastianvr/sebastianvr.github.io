import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() type: 'success' | 'error' = 'success';
  @Input() message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public hideToast() {
    this.isVisible = false;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    this.hideToast();
  }
}
