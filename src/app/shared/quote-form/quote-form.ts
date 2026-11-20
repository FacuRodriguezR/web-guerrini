import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export interface QuoteRequest {
  nombre: string;
  email: string;
  telefono: string;
  provincia: string;
  detalle: string;
}

type QuoteField = keyof QuoteRequest;

@Component({
  selector: 'app-quote-form',
  imports: [ReactiveFormsModule],
  templateUrl: './quote-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class QuoteForm {
  private readonly fb = inject(NonNullableFormBuilder);

  readonly title = input('Pedir Cotización');
  readonly subtitle = input('Completá tus datos y te respondemos a la brevedad.');

  /** Emite los datos válidos. El padre decide a dónde enviarlos (servicio / API). */
  readonly submitted = output<QuoteRequest>();

  protected readonly sent = signal(false);

  protected readonly provincias = [
    'Buenos Aires',
    'Ciudad Autónoma de Buenos Aires',
    'Catamarca',
    'Chaco',
    'Chubut',
    'Córdoba',
    'Corrientes',
    'Entre Ríos',
    'Formosa',
    'Jujuy',
    'La Pampa',
    'La Rioja',
    'Mendoza',
    'Misiones',
    'Neuquén',
    'Río Negro',
    'Salta',
    'San Juan',
    'San Luis',
    'Santa Cruz',
    'Santa Fe',
    'Santiago del Estero',
    'Tierra del Fuego',
    'Tucumán',
  ];

  protected readonly form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern(/^[\d\s()+-]{8,20}$/)]],
    provincia: ['', Validators.required],
    detalle: ['', [Validators.required, Validators.maxLength(1000)]],
  });

  protected showError(field: QuoteField): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || control.dirty);
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted.emit(this.form.getRawValue());
    this.form.reset();
    this.sent.set(true);
  }

  protected newQuery(): void {
    this.sent.set(false);
  }
}