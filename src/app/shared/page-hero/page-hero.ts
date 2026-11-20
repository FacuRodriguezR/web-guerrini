import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  templateUrl: './page-hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class PageHero {
  readonly title = input.required<string>();
  readonly eyebrow = input<string>();
  /** Palabra del título a resaltar en rojo (opcional) */
  readonly highlight = input<string>();

  protected readonly titleParts = computed<[string, string, string]>(() => {
    const title = this.title();
    const word = this.highlight();
    const idx = word ? title.indexOf(word) : -1;
    if (!word || idx === -1) return [title, '', ''];
    return [title.slice(0, idx), word, title.slice(idx + word.length)];
  });
}