import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/page-hero/page-hero';

interface DistributionCenter {
  id: string;
  type: string;
  zone: string;
  phoneLabel: string;
  phoneHref: string;
  address: string;
  city: string;
  mapsUrl: string;
  /** Posición del punto sobre la imagen del mapa, en % (ajustar si cambia la imagen) */
  pin: { x: number; y: number };
}

const mapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

@Component({
  selector: 'app-mayorista',
  imports: [RouterLink, PageHero],
  templateUrl: './mayorista.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Mayorista {
  protected readonly mapImage = '/assets/images/others/argentina.png';

  /** Centro resaltado (hover en tarjeta o en el punto del mapa) */
  protected readonly active = signal<string | null>(null);

  protected readonly centers: DistributionCenter[] = [
    {
      id: 'bsas',
      type: 'Centro Nacional de Distribución',
      zone: 'Zona Buenos Aires',
      phoneLabel: '(011) 4016-3000',
      phoneHref: 'tel:+541140163000',
      address: 'Av. Amancio Alcorta 2138',
      city: 'Parque Patricios, CABA',
      mapsUrl: mapsSearch('Guerrini Neumáticos, Av. Amancio Alcorta 2138, CABA'),
      pin: { x: 68, y: 36 },
    },
    {
      id: 'sur',
      type: 'Centro de Distribución y Ventas',
      zone: 'Zona Sur',
      phoneLabel: '(0299) 440-2682',
      phoneHref: 'tel:+542994402682',
      address: 'Perticone 1137',
      city: 'Neuquén',
      mapsUrl: mapsSearch('Guerrini Neumáticos, Perticone 1137, Neuquén'),
      pin: { x: 22, y: 44 },
    },
    {
      id: 'cuyo',
      type: 'Centro de Distribución y Planta de Reconstrucción',
      zone: 'Zona Cuyo',
      phoneLabel: '(0261) 405-3000 opción 2',
      phoneHref: 'tel:+542614053000,2',
      address: 'Calle Diamante 370',
      city: 'Godoy Cruz, Mendoza',
      mapsUrl: mapsSearch('Guerrini Neumáticos, Calle Diamante 370, Godoy Cruz, Mendoza'),
      pin: { x: 24, y: 31 },
    },
  ];

  protected setActive(id: string | null): void {
    this.active.set(id);
  }
}