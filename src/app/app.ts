import { Component, signal, TemplateRef, viewChild } from '@angular/core';
import { SimpleCard } from './shared/ui/simple-card/simple-card';
import { ButtonModule } from 'primeng/button';
import { Heading } from './shared/ui/heading/heading';
import { Card } from './shared/ui/card/card';
import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { List } from './shared/ui/list/list';
import { Modal } from './shared/ui/modal/modal';

@Component({
  selector: 'app-root',
  imports: [SimpleCard, ButtonModule, Heading, Card, NgOptimizedImage, List, Modal, NgTemplateOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  showAlert() {
    alert('clicked');
  }

  modalVisible = signal(false);
  currentView = signal<'home' | 'about' | 'contact'>('home');
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
}

