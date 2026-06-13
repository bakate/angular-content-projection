import { Component, signal } from '@angular/core';
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
  showNotification() {
    this.notificationVisible.set(true);
    setTimeout(() => this.notificationVisible.set(false), 3000);
  }

  modalVisible = signal(false);
  notificationVisible = signal(false);
  currentView = signal<'home' | 'about' | 'contact'>('home');
  items = [
    { id: 1, name: 'Plan gratuit', description: 'Idéal pour tester' },
    { id: 2, name: 'Plan Pro', description: 'Pour équipes de 1-10' },
    { id: 3, name: 'Plan Entreprise', description: 'Support dédié et SLA' },
  ];
}
