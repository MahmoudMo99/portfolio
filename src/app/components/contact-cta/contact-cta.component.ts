import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
  primary?: boolean;
  external?: boolean;
}

@Component({
  selector: 'app-contact-cta',
  imports: [],
  templateUrl: './contact-cta.component.html',
  styleUrl: './contact-cta.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactCtaComponent {
  readonly contactLinks: ContactLink[] = [
    {
      label: 'Email',
      value: 'mahmoud.mmi.dev@gmail.com',
      href: 'mailto:mahmoud.mmi.dev@gmail.com',
      icon: 'bi-envelope-fill',
      primary: true,
    },
    {
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/mahmoud-mo-mahmoud',
      icon: 'bi-linkedin',
      external: true,
    },
    {
      label: 'WhatsApp',
      value: 'Send a message',
      href: 'https://wa.me/201155347463',
      icon: 'bi-whatsapp',
      external: true,
    },
  ];
}
