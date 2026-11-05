import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface ContactLink {
  labelKey: string;
  valueKey: string;
  href: string;
  icon: string;
  external?: boolean;
}

@Component({
  selector: 'app-contact-cta',
  imports: [TranslatePipe],
  templateUrl: './contact-cta.component.html',
  styleUrl: './contact-cta.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactCtaComponent {
  readonly secondaryLinks: readonly ContactLink[] = [
    {
      labelKey: 'contact.links.linkedin.label',
      valueKey: 'contact.links.linkedin.value',
      href: 'https://www.linkedin.com/in/mahmoud-mo-mahmoud',
      icon: 'bi-linkedin',
      external: true,
    },
    {
      labelKey: 'contact.links.github.label',
      valueKey: 'contact.links.github.value',
      href: 'https://github.com/MahmoudMo99',
      icon: 'bi-github',
      external: true,
    },
  ];
}
