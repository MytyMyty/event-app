import { NgStyle } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonFooter, IonToolbar, IonTitle, IonButton, IonText, IonicSlides } from "@ionic/angular/standalone";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonText, IonButton, IonTitle, IonToolbar, IonFooter, IonContent, RouterLink, NgStyle ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InicioPage implements OnInit {

  onboardingScreens = [
    { image: '11.jpg' },
    { image: '2.jpg' },
    { image: '3.jpg' },
  ];

  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {
  }

}
