import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    },
    {
        path: 'contacto',
        loadComponent: () => import('./pages/contacto/contacto').then((m) => m.Contacto),
    },
    {
        path: 'productos',
        loadComponent: () => import('./pages/products/products').then((m) => m.Products),
    },
    {
        path: 'mayorista',
        loadComponent: () => import('./pages/mayorista/mayorista').then((m) => m.Mayorista),
    },
    {
        path: 'minorista',
        loadComponent: () => import('./pages/minorista/minorista').then((m) => m.Minorista),
    },
    {
        path: 'nosotros',
        loadComponent: () => import('./pages/nosotros/nosotros').then((m) => m.Nosotros),
    },
    {
        path: 'reconstruccion',
        loadComponent: () => import('./pages/reconstruccion/reconstruccion').then((m) => m.Reconstruccion),
    },
    {
        path: '**',
        redirectTo: 'home',
    }

];
