import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text = '';
  @Input() bgColor: 'blue' | 'danger' = 'blue';

  @Output() buttonClicked = new EventEmitter<void>();

  onButtonClicked(): void {
    this.buttonClicked.emit();
  }
}
