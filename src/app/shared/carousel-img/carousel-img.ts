import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { DOCUMENT, NgOptimizedImage } from '@angular/common';

export interface CarouselImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-carousel-img',
  imports: [NgOptimizedImage],
  templateUrl: './carousel-img.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class CarouselImg {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  readonly images = input.required<CarouselImage[]>();
  readonly interval = input(5000);
  readonly autoplay = input(true);
  readonly label = input('Galería de imágenes');

  protected readonly current = signal(0);
  protected readonly total = computed(() => this.images().length);
  private readonly paused = signal(false);
  private touchStartX = 0;

  constructor() {
    // Solo en el navegador: en SSR no hay autoplay → hidratación estable
    afterNextRender(() => {
      const win = this.document.defaultView;
      const reducedMotion = win?.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!this.autoplay() || reducedMotion) return;

      const id = setInterval(() => {
        if (!this.paused()) this.next();
      }, this.interval());
      this.destroyRef.onDestroy(() => clearInterval(id));
    });
  }

  protected next(): void {
    if (this.total() < 2) return;
    this.current.update((i) => (i + 1) % this.total());
  }

  protected prev(): void {
    if (this.total() < 2) return;
    this.current.update((i) => (i - 1 + this.total()) % this.total());
  }

  protected goTo(index: number): void {
    this.current.set(index);
  }

  protected pause(): void {
    this.paused.set(true);
  }

  protected resume(): void {
    this.paused.set(false);
  }

  protected onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
    this.pause();
  }

  protected onTouchEnd(event: TouchEvent): void {
    const dx = event.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(dx) > 50) {
      dx < 0 ? this.next() : this.prev();
    }
    this.resume();
  }
}