import { Component, input } from '@angular/core';
import { Card } from 'primeng/card';

/**
 * SimpleCard demonstrates basic content projection with ng-content.
 *
 * The <ng-content> element is a placeholder where parent content will be projected.
 * This allows flexible, reusable component designs where the parent controls
 * what goes inside the card.
 *
 * Usage:
 * <simple-card title="My Title">
 *   <p>Any content here will be projected into the card body</p>
 * </simple-card>
 */
@Component({
  selector: 'simple-card',
  imports: [Card],
  templateUrl: './simple-card.html',
})
export class SimpleCard {
  title = input<string>("Simple Card");
}
