import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  computed,
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from '@angular/core';

export type AppTheme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly storageKey = 'portfolio-theme';

  readonly theme = signal<AppTheme>('light');

  readonly isDark = computed(() => this.theme() === 'dark');

  initialize(): void {
    const theme = this.getInitialTheme();

    this.applyTheme(theme, false);
  }

  toggleTheme(): void {
    this.setTheme(this.theme() === 'light' ? 'dark' : 'light');
  }

  setTheme(theme: AppTheme): void {
    this.applyTheme(theme, true);
  }

  private getInitialTheme(): AppTheme {
    if (!isPlatformBrowser(this.platformId)) {
      return 'light';
    }

    const storedTheme = localStorage.getItem(this.storageKey);

    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  private applyTheme(theme: AppTheme, persist: boolean): void {
    this.theme.set(theme);

    const root = this.document.documentElement;

    root.dataset['theme'] = theme;
    root.style.colorScheme = theme;

    this.document
      .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#07111f' : '#f7f9fc');

    if (persist && isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, theme);
    }
  }
}
