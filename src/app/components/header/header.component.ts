import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
} from '@angular/core';

type SectionId =
  | 'home'
  | 'about'
  | 'features'
  | 'experience'
  | 'portfolio'
  | 'testimonials'
  | 'skills'
  | 'contact'
  | 'footer';

interface NavLink {
  id: SectionId;
  label: string;
}

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly isScrolled = signal(false);
  readonly isMenuOpen = signal(false);
  readonly activeSection = signal<SectionId>('home');

  readonly navLinks: NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
    this.updateActiveSection();
  }

  toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  setActiveSection(sectionId: SectionId): void {
    this.activeSection.set(sectionId);
    this.closeMenu();
  }

  private updateActiveSection(): void {
    const scrollPosition = window.scrollY + 120;

    for (const link of this.navLinks) {
      const section = document.getElementById(link.id);

      if (!section) continue;

      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        this.activeSection.set(link.id);
        break;
      }
    }
  }
}
