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
      href: 'https://wa.me/201155347463?text=Hi%20Mahmoud%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project',
      icon: 'bi-whatsapp',
      external: true,
    },
  ];
}
