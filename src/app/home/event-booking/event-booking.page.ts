import { DatePipe, NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonItem,
  IonLabel,
  IonRow,
  IonCol,
  IonIcon, IonCard, IonListHeader, IonList, IonAvatar, IonText, IonFooter, IonButton, IonFabButton, IonTitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarOutline, heartOutline, locationOutline } from 'ionicons/icons';
import { events } from 'src/app/data/events';
import { planoEstadio } from 'src/app/data/planoestadio';
import { Event } from 'src/app/interfaces/event.interface';
import { PlanoEstadio } from 'src/app/interfaces/planoestadio.interface';
@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.page.html',
  styleUrls: ['./event-booking.page.scss'],
  standalone: true,
  imports: [IonTitle, IonFabButton, IonButton, IonFooter, IonText, IonAvatar, IonList, IonListHeader, IonCard, 
    IonIcon,
    IonCol,
    IonRow,
    IonLabel,
    IonItem,
    IonBackButton,
    IonButtons,
    IonToolbar,
    IonHeader,
    IonContent,
    DatePipe,
    NgFor
  ],
})
export class EventBookingPage implements OnInit {
  event!: Event;
  plano!: PlanoEstadio;

  private route = inject(ActivatedRoute);

  constructor() {
    addIcons({ calendarOutline, locationOutline, heartOutline });
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.getEvent(id);
    }
  }

  getEvent(id: string) {
    this.event = events.find((event) => event.id == id)!;
    
  }

  getPlano(es_id: string) {
    this.plano = planoEstadio.find((planoestadio) => planoestadio.id == this.event.estadio_id)!;
  }

}



