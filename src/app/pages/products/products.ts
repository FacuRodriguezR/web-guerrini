import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/page-hero/page-hero';


interface ExclusiveBrand {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-products',
  imports: [NgOptimizedImage, RouterLink, PageHero],
  templateUrl: './products.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
  private readonly imagesPath = '/assets/images';

  protected readonly exclusiveBrands: ExclusiveBrand[] = [
    { name: 'Kumho Tire', logo: `${this.imagesPath}/brand-guerrini/G_kumho_2024.png` },
    { name: 'Triangle Tire', logo: `${this.imagesPath}/brand-guerrini/Marcas_Triangle.png` },
    { name: 'Firemax Tire', logo: `${this.imagesPath}/brand-guerrini/Marcas_Firemax.png` },
  ];

  // Imagen única con los logos de las automotrices (ajustá el nombre del archivo)
  protected readonly oemImage = `${this.imagesPath}/others/logos_marcas_equipamiento_original.png`;
}