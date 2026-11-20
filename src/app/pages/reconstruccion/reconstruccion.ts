import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PageHero } from '../../shared/page-hero/page-hero';
import { QuoteForm, QuoteRequest } from '../../shared/quote-form/quote-form';


interface Highlight {
  value: string;
  label: string;
}

interface Reason {
  icon: 'check' | 'tools' | 'award';
  title: string;
  text: string;
}

interface Certification {
  brand: string;
  year: number;
  image: string;
}

@Component({
  selector: 'app-reconstruction',
  imports: [NgOptimizedImage, PageHero, QuoteForm],
  templateUrl: './reconstruccion.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Reconstruccion {
  private readonly imagesPath = '/assets/images';

  protected readonly logo = `${this.imagesPath}/brand-guerrini/reconstruccion.png`;

  protected readonly highlights: Highlight[] = [
    { value: '+1500', label: 'neumáticos por mes' },
    { value: '24–48 h', label: 'entregas programadas' },
    { value: 'Puerta a puerta', label: 'con flota propia' },
  ];

  protected readonly reasons: Reason[] = [
    {
      icon: 'check',
      title: 'Materiales de primera',
      text: 'Trabajamos con materiales provenientes de Fate, Fulltrack, Devoto y Novatec de primera calidad que proporcionan garantía y seguridad en cada uno de nuestros trabajos.',
    },
    {
      icon: 'tools',
      title: 'Tecnología nacional',
      text: 'Nuestra planta posee maquinarias Viamat de fabricación nacional que incorporan la última tecnología en reconstrucción de neumáticos del país. Entre nuestras maquinarias contamos con revisadora y raspadora de neumáticos, tornos automáticos, embandadoras de platos expandibles y autoclaves.',
    },
    {
      icon: 'award',
      title: 'Casco garantizado',
      text: 'Confiamos en nuestro trabajo y es por eso que cada uno de los neumáticos reconstruidos en nuestra planta poseen una reforma garantida del casco por Fate y Kumho Tire.',
    },
  ];

  // Ajustá los nombres de archivo a los tuyos
  protected readonly certifications: Certification[] = [
    { brand: 'Kumho Tire', year: 2014, image: `${this.imagesPath}/certificaciones-taller/certificacion_kumho.png` },
    { brand: 'Fate', year: 2015, image: `${this.imagesPath}/certificaciones-taller/certificacion_fate.jpg` },
    { brand: 'Goodyear', year: 2015, image: `${this.imagesPath}/certificaciones-taller/certificacion_goodyear.jpg` },
  ];

  protected onQuote(request: QuoteRequest): void {
    // TODO: enviar al backend cuando esté el endpoint (ej. this.quoteService.send(request))
    void request;
  }
}