import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface Brand {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-brands-carousel',
  templateUrl: './brands-carousel.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class BrandsCarousel {
  readonly brands = input.required<Brand[]>();

  // Dos copias de la lista: la animación corre -50% y el loop queda sin salto
  protected readonly copies = [0, 1];
}