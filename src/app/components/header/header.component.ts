import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { LanguageService } from '../../core/services/language.service';
import { ThemeService } from '../../core/services/theme.service';

type SectionId =
  | 'home'
  | 'about'
  | 'experience'
  | 'portfolio'
  | 'skills'
  | 'testimonials'
  | 'contact';

interface NavLink {
  id: SectionId;
  translationKey: string;
}

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  readonly themeService = inject(ThemeService);
  readonly languageService = inject(LanguageService);

  readonly isScrolled = signal(false);
  readonly isMenuOpen = signal(false);
  readonly activeSection = signal<SectionId>('home');

  readonly navLinks: readonly NavLink[] = [
    {
      id: 'home',
      translationKey: 'header.navigation.home',
    },
    {
      id: 'about',
      translationKey: 'header.navigation.about',
    },
    {
      id: 'experience',
      translationKey: 'header.navigation.experience',
    },
    {
      id: 'portfolio',
      translationKey: 'header.navigation.projects',
    },
    {
      id: 'skills',
      translationKey: 'header.navigation.skills',
    },
    {
      id: 'testimonials',
      translationKey: 'header.navigation.reviews',
    },
    {
      id: 'contact',
      translationKey: 'header.navigation.contact',
    },
  ];

  private scrollTicking = false;

  ngOnInit(): void {
    this.updateScrollState();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.scrollTicking) {
      return;
    }

    this.scrollTicking = true;

    requestAnimationFrame(() => {
      this.updateScrollState();
      this.scrollTicking = false;
    });
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (window.innerWidth >= 1180) {
      this.closeMenu();
    }

    this.updateActiveSection();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
    this.closeMenu();
  }

  navigateTo(sectionId: SectionId): void {
    this.activeSection.set(sectionId);
    this.closeMenu();
  }

  private updateScrollState(): void {
    this.isScrolled.set(window.scrollY > 12);
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const sections = this.navLinks
      .map((link) => ({
        id: link.id,
        element: document.getElementById(link.id),
      }))
      .filter(
        (
          section,
        ): section is {
          id: SectionId;
          element: HTMLElement;
        } => section.element !== null,
      );

    if (!sections.length) {
      return;
    }

    const reachedBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4;

    if (reachedBottom) {
      this.activeSection.set(sections.at(-1)!.id);
      return;
    }

    const activationPoint = window.scrollY + 120;
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
