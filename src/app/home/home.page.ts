import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {  
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonText,
  IonFab,
  IonFabButton,
  IonBadge,
  IonRow,
  IonCol,
  IonSearchbar,
  IonicSlides,
  IonList,
  IonListHeader,
  IonCard } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowForwardOutline,
  locateOutline,
  locationOutline,
  notificationsOutline,
  optionsOutline,
} from 'ionicons/icons';
import { Event } from '../interfaces/event.interface';
import { Category } from '../interfaces/category.interface';
import { events } from '../data/events';
import { categories } from '../data/categories';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonListHeader,
    IonList,
    IonSearchbar,
    IonCol,
    IonRow,
    IonBadge,
    IonFabButton,
    IonFab,
    IonText,
    IonIcon,
    IonLabel,
    IonItem,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    RouterLink,
    DatePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {

  swiperModules = [IonicSlides];
  upcomingEvents: Event[] = [];
  currentEvents: Event[] = [];
  categories: Category[] = [];
  constructor() {
    addIcons({
      locateOutline,
      notificationsOutline,
      optionsOutline,
      locationOutline,
      arrowForwardOutline 
    });
  }

  ngOnInit(): void {
    this.currentEvents = [...events];
    this.upcomingEvents = events.sort((a, b) => {
      const idA= parseInt(a.id,10);
      const idB= parseInt(b.id,10);
      return idA - idB;
    });
    this.categories = [...categories];
  
  
    }
}
