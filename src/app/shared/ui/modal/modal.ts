
import { Component, model, input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'modal',
  imports: [DialogModule, ButtonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  visible = model.required<boolean>();
  header = input<string>('Modal');
}
