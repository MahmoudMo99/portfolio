import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface FooterLink {
  labelKey: string;
  href: string;
}

interface SocialLink {
  labelKey: string;
  href: string;
  icon: string;
  external?: boolean;
}

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly navigationLinks: readonly FooterLink[] = [
    {
      labelKey: 'footer.navigation.home',
      href: '#home',
    },
    {
      labelKey: 'footer.navigation.about',
      href: '#about',
    },
    {
      labelKey: 'footer.navigation.experience',
      href: '#experience',
    },
    {
      labelKey: 'footer.navigation.projects',
      href: '#portfolio',
    },
    {
      labelKey: 'footer.navigation.skills',
      href: '#skills',
    },
    {
      labelKey: 'footer.navigation.reviews',
      href: '#testimonials',
    },
    {
      labelKey: 'footer.navigation.contact',
      href: '#contact',
    },
  ];

  readonly socialLinks: readonly SocialLink[] = [
    {
      labelKey: 'footer.social.github',
      href: 'https://github.com/MahmoudMo99',
      icon: 'bi-github',
      external: true,
    },
    {
      labelKey: 'footer.social.linkedin',
      href: 'https://www.linkedin.com/in/mahmoud-mo-mahmoud',
      icon: 'bi-linkedin',
      external: true,
    },
    {
      labelKey: 'footer.social.email',
      href: 'mailto:mahmoud.mmi.dev@gmail.com',
      icon: 'bi-envelope',
    },
  ];
}
