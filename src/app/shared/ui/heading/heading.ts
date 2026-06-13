import { Component, input } from '@angular/core';

@Component({
  selector: 'heading',
  imports: [],
  templateUrl: './heading.html',
  styleUrl: './heading.css',
})
export class Heading {
  title = input.required<string>();
  level = input<'lg' | 'xl'>('xl');
}
