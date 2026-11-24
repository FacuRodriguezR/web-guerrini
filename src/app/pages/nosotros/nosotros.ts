import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';

type StatTone = 'red' | 'black' | 'dark' | 'white';

interface Stat {
  value: string;
  label: string;
  tone: StatTone;
}

interface Milestone {
  year: number;
  title: string;
  texts: string[];
}

@Component({
  selector: 'app-nosotros',
  imports: [PageHero],
  templateUrl: './nosotros.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nosotros {
  // Fondo decorativo de la sección de números (opcional, ajustá el nombre)
  protected readonly tireBg = '/assets/images/nosotros/neumaticos-bg.jpg';

  protected readonly stats: Stat[] = [
    { value: '+60', label: 'Años de trayectoria', tone: 'red' },
    { value: '3', label: 'Sucursales', tone: 'black' },
    { value: '+180', label: 'Colaboradores', tone: 'dark' },
    { value: '9', label: 'Marcas exclusivas', tone: 'white' },
  ];

  // Clases por tono (Tailwind las detecta porque están escritas completas acá)
  protected readonly toneClasses: Record<StatTone, { tile: string; label: string }> = {
    red: { tile: 'bg-guerrini-red text-white shadow-guerrini-red/30', label: 'text-white/85' },
    black: { tile: 'bg-guerrini-black text-white shadow-guerrini-black/30', label: 'text-guerrini-red' },
    dark: { tile: 'bg-guerrini-dark text-white shadow-guerrini-black/20', label: 'text-guerrini-red' },
    white: { tile: 'bg-white text-guerrini-black ring-1 ring-guerrini-black/5', label: 'text-guerrini-red' },
  };

  protected readonly milestones: Milestone[] = [
    {
      year: 1964,
      title: 'Fundación',
      texts: [
        'Orlando Guerrini comienza el negocio de la venta de neumáticos.',
        'Empieza a funcionar la planta de reconstrucción.',
      ],
    },
    { year: 1989, title: 'Nuevo Edificio', texts: ['Se inaugura el edificio de la Casa Central en Godoy Cruz.'] },
    {
      year: 1991,
      title: 'Primeras Importaciones',
      texts: ['Se realizan las primeras importaciones de neumáticos KUMHO TIRES.'],
    },
    { year: 1995, title: 'Sociedad Anónima', texts: ['Guerrini Neumáticos se constituye como sociedad.'] },
    {
      year: 1996,
      title: 'Incorporación Neumax',
      texts: ['Se incorpora la marca NEUMAX de Cámaras y Protectores.'],
    },
    {
      year: 2000,
      title: 'Centro de Distribución',
      texts: ['Se establece el Centro de Distribución en Capital Federal.'],
    },
    {
      year: 2005,
      title: 'Sucursal Buenos Aires',
      texts: ['Se inaugura el Centro de Distribución y la sucursal Buenos Aires.'],
    },
    {
      year: 2009,
      title: 'Nuevas Marcas',
      texts: [
        'Se comienza a comercializar la marca TANGO con exclusividad en todo el país.',
        'Se concreta la incorporación a la Red Oficial de Distribución FATE.',
      ],
    },
    {
      year: 2010,
      title: 'Nace Red AutoShop',
      texts: ['En diciembre se inaugura en Mendoza el primer local de Red AUTOSHOP.'],
    },
    {
      year: 2011,
      title: 'AutoShop Buenos Aires',
      texts: ['Se incorpora Buenos Aires a nuestra Red AUTOSHOP con una nueva sucursal en Constitución.'],
    },
    {
      year: 2014,
      title: 'Triangle Tires',
      texts: ['Se incorpora la marca TRIANGLE TIRES con neumáticos radiales para camiones.'],
    },
    {
      year: 2017,
      title: 'AutoShop Neuquén',
      texts: ['Se incorpora una nueva sucursal de Red AUTOSHOP en Neuquén.'],
    },
    {
      year: 2017,
      title: 'Firemax Tires',
      texts: ['Se incorpora la marca FIREMAX TIRES a nuestra cartera de productos.'],
    },
    {
      year: 2021,
      title: 'Sucursal Neuquén',
      texts: [
        'Reubicamos nuestro centro de distribución en Neuquén.',
        'Se inaugura una sucursal de AUTOSHOP más moderna.',
      ],
    },
    {
      year: 2022,
      title: 'AutoShop Buenos Aires',
      texts: ['Se suma en mayo una nueva sucursal de Red AUTOSHOP en Balvanera.'],
    },
    {
      year: 2023,
      title: 'Zona Franca',
      texts: ['Se suma un moderno centro logístico en Zona Franca de Mendoza.'],
    },
  ];
}