import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Branch {
  tags: string[];
  zone: string;
  phoneLabel: string;
  phoneHref: string;
  address: string;
  city: string;
  mapsUrl: string;
}

interface FooterLink {
  label: string;
  path: string;
}

const mapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  // Casa Central y Zona Cuyo comparten dirección → una sola tarjeta
  protected readonly branches: Branch[] = [
    {
      tags: ['Casa Central', 'Planta de Reconstrucción', 'Distribución Cuyo'],
      zone: 'Mendoza',
      phoneLabel: '(0261) 405-3000 opción 2',
      phoneHref: 'tel:+542614053000,2',
      address: 'Calle Diamante 370',
      city: 'Godoy Cruz, Mendoza',
      mapsUrl: mapsSearch('Guerrini Neumáticos, Calle Diamante 370, Godoy Cruz, Mendoza'),
    },
    {
      tags: ['Distribución y Ventas'],
      zone: 'Zona Buenos Aires',
      phoneLabel: '(011) 4016-3000',
      phoneHref: 'tel:+541140163000',
      address: 'Av. Amancio Alcorta 2138',
      city: 'Parque Patricios, CABA',
      mapsUrl: mapsSearch('Guerrini Neumáticos, Av. Amancio Alcorta 2138, CABA'),
    },
    {
      tags: ['Distribución y Ventas'],
      zone: 'Zona Sur',
      phoneLabel: '(0299) 440-2682',
      phoneHref: 'tel:+542994402682',
      address: 'Perticone 1137',
      city: 'Neuquén',
      mapsUrl: mapsSearch('AutoShop Neuquén, Perticone 1137, Neuquén'),
    },
  ];

  protected readonly navLinks: FooterLink[] = [
    { label: 'Productos', path: '/productos' },
    { label: 'Reconstrucción', path: '/reconstruccion' },
    { label: 'Minorista', path: '/minorista' },
    { label: 'Mayorista', path: '/mayorista' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Contacto', path: '/contacto' },
  ];

  protected readonly bottomLinks: FooterLink[] = [
    { label: 'Trabajá con Nosotros', path: '/trabaja-con-nosotros' },
    { label: 'Nuevos Clientes', path: '/nuevos-clientes' },
  ];
}