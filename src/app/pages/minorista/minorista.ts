import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';
import { CarouselImage, CarouselImg } from '../../shared/carousel-img/carousel-img';
import { FeaturesBand, Feature } from '../../shared/feature-band/feature-band';


interface Branch {
  name: string;
  phoneLabel: string;
  phoneHref: string;
  address: string;
  city: string;
  mapsUrl: string;
}

const mapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

@Component({
  selector: 'app-minorista',
  imports: [PageHero, CarouselImg, FeaturesBand],
  templateUrl: './minorista.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Esta página usa el naranja de AutoShop como acento
  host: {
    class: 'block [--accent:var(--color-autoshop-orange)] [--accent-dark:var(--color-autoshop-orange-dark)]',
  },
})
export class Minorista {
  private readonly imagesPath = '/assets/images';

  protected readonly logo = `${this.imagesPath}/brand-guerrini/horizontal_positivo.png`;

  // TODO: URL real de la tienda online
  protected readonly storeUrl = 'https://www.autoshop.com.ar';

  protected readonly services = [
    'Alineación y Balanceo',
    'Cambio de Aceite y Filtros',
    'Tren Delantero',
    'Mecánica Ligera',
    'Frenos y Amortiguación',
    'Mantenimiento Preventivo',
  ];

  protected readonly features: Feature[] = [
    {
      icon: 'handshake',
      title: 'Programa Corporativo',
      text: 'Las principales empresas de la Argentina han depositado su confianza en nuestro equipo de trabajo formando parte de nuestro Programa Corporativos. Este acuerdo brinda un servicio mecánico de mantenimiento a sus flotas de vehículos ofreciendo además beneficios exclusivos a sus equipos de trabajo.',
    },
    {
      icon: 'star',
      title: 'Sala de espera VIP',
      text: 'Cada salón ofrece un espacio de relax para disfrutar mientras nuestro equipo realiza las mejoras en cada vehículo. La Sala de espera VIP cuenta con refrigerios y una máquina de café de última generación, zona de juegos para los más pequeños, servicio de wifi y tv para que la espera de nuestros clientes sea lo más placentera posible.',
    },
    {
      icon: 'check',
      title: 'Marcas de primera línea',
      text: 'Trabajamos con marcas de primera línea como Kumho, Triangle, Firemax, FricRot, Elaion, Castrol, Shell, Total, ELF, Mann y Fram entre otras, las cuales nos respaldan en la calidad final de nuestros servicios a la hora de asistir las unidades de las empresas asociadas a nuestro programa.',
    },
  ];

  // Ajustá los nombres de archivo a los tuyos
  protected readonly slides: CarouselImage[] = [
    { src: `${this.imagesPath}/autoshop/local-1.jpg`, alt: 'Salón de ventas de AutoShop' },
    { src: `${this.imagesPath}/autoshop/local-2.jpg`, alt: 'Área de servicios de AutoShop' },
    { src: `${this.imagesPath}/autoshop/local-3.jpg`, alt: 'Sala de espera VIP de AutoShop' },
  ];

  protected readonly branches: Branch[] = [
    {
      name: 'Casa Central',
      phoneLabel: '261-4053000',
      phoneHref: 'tel:+542614053000',
      address: 'Acceso Sur y Rodríguez Peña, Diamante 371',
      city: 'Godoy Cruz, Mendoza · CP5501',
      mapsUrl: mapsSearch('AutoShop, Diamante 371, Godoy Cruz, Mendoza'),
    },
    {
      name: 'Sucursal San Martín Sur',
      phoneLabel: '261-2480424',
      phoneHref: 'tel:+542612480424',
      address: 'San Martín Sur 901',
      city: 'Godoy Cruz, Mendoza · CP5501',
      mapsUrl: mapsSearch('AutoShop, San Martín Sur 901, Godoy Cruz, Mendoza'),
    },
    {
      name: 'Sucursal Neuquén',
      phoneLabel: '0299-4402682',
      phoneHref: 'tel:+542994402682',
      address: 'Perticone 1137',
      city: 'Neuquén · CP8300',
      mapsUrl: mapsSearch('AutoShop, Perticone 1137, Neuquén'),
    },
    {
      name: 'Sucursal Constitución',
      phoneLabel: '011-20500991',
      phoneHref: 'tel:+541120500991',
      address: 'Av. Juan de Garay 1769 esq. Entre Ríos',
      city: 'Constitución, CABA · C1153ACC',
      mapsUrl: mapsSearch('AutoShop, Av. Juan de Garay 1769, Constitución, CABA'),
    },
    {
      name: 'Sucursal Balvanera',
      phoneLabel: '011-57712488',
      phoneHref: 'tel:+541157712488',
      address: 'Av. Belgrano 2959 esq. Dean Funes',
      city: 'Balvanera, CABA · C1209AAB',
      mapsUrl: mapsSearch('AutoShop, Av. Belgrano 2959, Balvanera, CABA'),
    },
  ];
}