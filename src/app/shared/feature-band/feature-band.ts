import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type FeatureIcon = 'check' | 'tools' | 'award' | 'handshake' | 'star';

export interface Feature {
  icon: FeatureIcon;
  title: string;
  text: string;
}

/**
 * Banda gris → negro con corte en "V" arriba (estilo de la web original).
 * Lo que pongas adentro del tag se muestra debajo de las tarjetas (ej. un carrusel).
 */
@Component({
  selector: 'app-features-band',
  templateUrl: './feature-band.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class FeaturesBand {
  readonly title = input.required<string>();
  readonly features = input.required<Feature[]>();
}