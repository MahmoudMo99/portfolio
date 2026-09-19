import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
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
  | 'contact';

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
export class HeaderComponent implements OnInit {
  readonly isScrolled = signal(false);
  readonly isMenuOpen = signal(false);
  readonly activeSection = signal<SectionId>('home');

  readonly navLinks: readonly NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'Projects' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  private scrollTicking = false;

  ngOnInit(): void {
    this.updateScrollState();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.scrollTicking) return;

    this.scrollTicking = true;

    requestAnimationFrame(() => {
      this.updateScrollState();
      this.scrollTicking = false;
    });
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (window.innerWidth >= 1200) {
      this.closeMenu();
    }

    this.updateActiveSection();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isMenuOpen()) return;

    const target = event.target as HTMLElement;

    if (!target.closest('.main-header')) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  navigateTo(sectionId: SectionId): void {
    this.activeSection.set(sectionId);
    this.closeMenu();
  }

  private updateScrollState(): void {
    this.isScrolled.set(window.scrollY > 16);
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const sections = this.navLinks
      .map((link) => ({
        id: link.id,
        element: document.getElementById(link.id),
      }))
      .filter(
        (section): section is { id: SectionId; element: HTMLElement } =>
          section.element !== null,
      );

    if (!sections.length) return;

    const pageBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;

    if (pageBottom) {
      this.activeSection.set(sections[sections.length - 1].id);
      return;
    }

    const activationPoint = window.scrollY + 130;
    let currentSection = sections[0].id;

    for (const section of sections) {
      if (section.element.offsetTop <= activationPoint) {
        currentSection = section.id;
      } else {
        break;
      }
    }

    this.activeSection.set(currentSection);
  }
}
