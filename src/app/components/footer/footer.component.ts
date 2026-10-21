import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
} from '@angular/core';

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: string;
  external?: boolean;
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
  readonly showBackToTop = signal(false);

  readonly navigationLinks: readonly FooterLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Skills', href: '#skills' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  readonly socialLinks: readonly SocialLink[] = [
    {
      label: 'GitHub',
      href: 'https://github.com/MahmoudMo99',
      icon: 'bi-github',
      external: true,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mahmoud-mo-mahmoud',
      icon: 'bi-linkedin',
      external: true,
    },
    {
      label: 'Email',
      href: 'mailto:mahmoud.mmi.dev@gmail.com',
      icon: 'bi-envelope-fill',
    },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.showBackToTop.set(window.scrollY > 500);
  }

  scrollToTop(): void {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }
}
