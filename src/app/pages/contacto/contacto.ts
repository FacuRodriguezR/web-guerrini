import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHero } from '../../shared/page-hero/page-hero';
import { QuoteForm, QuoteRequest } from '../../shared/quote-form/quote-form';

type ContactType = 'phone' | 'email' | 'whatsapp';

interface ContactMethod {
  type: ContactType;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

interface Channel {
  icon: 'truck' | 'store';
  title: string;
  description: string;
  methods: ContactMethod[];
}

@Component({
  selector: 'app-contacto',
  imports: [PageHero, QuoteForm],
  templateUrl: './contacto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contacto {
  protected readonly whatsappUrl = 'https://wa.me/5492612052000';

  protected readonly channels: Channel[] = [
    {
      icon: 'truck',
      title: 'Unidad Mayorista',
      description: 'Canales de atención preferencial para clientes con cuenta mayorista y revendedores.',
      methods: [
        {
          type: 'phone',
          label: 'Teléfono',
          value: '(0261) 405-3000 opción 2',
          href: 'tel:+542614053000,2',
        },
        {
          type: 'email',
          label: 'Correo',
          value: 'ventas@guerrinisa.com.ar',
          href: 'mailto:ventas@guerrinisa.com.ar',
        },
      ],
    },
    {
      icon: 'store',
      title: 'Venta al Público',
      description:
        'Atención especializada para clientes particulares, venta de accesorios y servicios de mantenimiento.',
      methods: [
        { type: 'phone', label: 'Teléfono', value: '0800 122 2001', href: 'tel:08001222001' },
        {
          type: 'whatsapp',
          label: 'WhatsApp',
          value: '+54 9 261 205 2000',
          href: 'https://wa.me/5492612052000',
          external: true,
        },
      ],
    },
  ];

  protected onQuote(request: QuoteRequest): void {
    // TODO: enviar al backend cuando esté el endpoint
    void request;
  }
}