import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselImg, CarouselImage } from '../../shared/carousel-img/carousel-img';
import { Brand, BrandsCarousel } from '../../shared/brands-carousel/brands-carousel';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CarouselImg, BrandsCarousel],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  // Imágenes en /public/images/home/
  protected readonly slides: CarouselImage[] = [
    { src: '/images/home/deposito-1.jpg', alt: 'Depósito de neumáticos de Guerrini' },
    { src: '/images/home/deposito-2.jpg', alt: 'Racks de neumáticos en el centro de distribución' },
    { src: '/images/home/deposito-3.jpg', alt: 'Planta de reconstrucción de neumáticos' },
  ];

  private readonly brandsPath = '/assets/images/brand-guerrini';

  protected readonly brands: Brand[] = [
    { name: 'Kumho Tire', logo: `${this.brandsPath}/G_kumho_2024.png` },
    { name: 'Triangle Tire', logo: `${this.brandsPath}/Marcas_Triangle.png` },
    { name: 'Firemax Tire', logo: `${this.brandsPath}/Marcas_Firemax.png` },
    { name: 'AutoShop Neumáticos y servicios', logo: `${this.brandsPath}/horizontal_positivo.png` },
    { name: 'Guerrini Reconstrucción', logo: `${this.brandsPath}/reconstruccion.png` },
    { name: 'Diamondback', logo: `${this.brandsPath}/diamondback.png` },
    { name: 'Speedways Tyres', logo: `${this.brandsPath}/speedways.png` },
    { name: 'Marshal', logo: `${this.brandsPath}/Logo_Marshal.png` },
    { name: 'Doublestar', logo: `${this.brandsPath}/doublestar-2.png` },
    { name: 'Kpatos', logo: `${this.brandsPath}/kpatos.png` },
    { name: 'Zetum Tire', logo: `${this.brandsPath}/Zetum.png` },
  ];
}