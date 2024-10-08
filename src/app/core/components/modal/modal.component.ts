import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NzIconModule, NzButtonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Output() ok = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  // Function to handle OK click
  onOk(): void {
    this.ok.emit();
  }

  // Function to handle Cancel click
  onCancel(): void {
    this.cancel.emit();
  }
}
