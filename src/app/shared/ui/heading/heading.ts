import { Component, input } from '@angular/core';

@Component({
  selector: 'heading',
  imports: [],
  templateUrl: './heading.html',
  styleUrl: './heading.css',
})
export class Heading {
  title = input.required<string>();
  eyebrow = input<string>('');
  level = input<'hero' | 'lg' | 'xl'>('xl');
}
