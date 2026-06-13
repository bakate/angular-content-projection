import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { Card as PrimeCard } from 'primeng/card';

@Component({
  selector: 'card',
  imports: [Button, PrimeCard],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {}
