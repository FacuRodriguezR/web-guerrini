import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // sticky en el host (no en el <header>): si no, el sticky queda
    // limitado al alto del propio componente y no acompaña el scroll
    class: 'sticky top-0 z-50 block',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Header {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly navItems: NavItem[] = [
    { label: 'Productos', path: '/productos' },
    { label: 'Reconstrucción', path: '/reconstruccion' },
    { label: 'Minorista', path: '/minorista' },
    { label: 'Mayorista', path: '/mayorista' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'Contacto', path: '/contacto' },
  ];

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  constructor() {
    // afterNextRender solo corre en el navegador → seguro para SSR
    afterNextRender(() => {
      const win = this.document.defaultView;
      if (!win) return;

      const onScroll = () => this.scrolled.set(win.scrollY > 16);
      onScroll();
      win.addEventListener('scroll', onScroll, { passive: true });

      this.destroyRef.onDestroy(() =>
        win.removeEventListener('scroll', onScroll),
      );
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}