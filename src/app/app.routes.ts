import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'events/:id',
        loadComponent: () => import('./home/event/event.page').then( m => m.EventPage)
      },
      {
        path: 'event-booking/:id',
        loadComponent: () => import('./home/event-booking/event-booking.page').then( m => m.EventBookingPage)
      }
      
    ],
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  
];

