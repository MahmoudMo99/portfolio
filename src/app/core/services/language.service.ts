import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

export type AppLanguage = 'en' | 'ar';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly translate = inject(TranslateService);

  private readonly storageKey = 'portfolio-language';

  readonly language = computed<AppLanguage>(() =>
    this.translate.currentLang() === 'ar' ? 'ar' : 'en',
  );

  readonly isArabic = computed(() => this.language() === 'ar');

  readonly direction = computed<'ltr' | 'rtl'>(() =>
    this.isArabic() ? 'rtl' : 'ltr',
  );

  async initialize(): Promise<void> {
    this.translate.addLangs(['en', 'ar']);

    const language = this.getInitialLanguage();

    this.applyDocumentLanguage(language);

    try {
      await firstValueFrom(this.translate.use(language));
    } catch {
      await this.useFallbackLanguage();
    }
  }

  toggleLanguage(): void {
    const language: AppLanguage = this.language() === 'en' ? 'ar' : 'en';

    void this.setLanguage(language);
  }

  async setLanguage(language: AppLanguage): Promise<void> {
    if (language === this.language()) {
      return;
    }

    try {
      await firstValueFrom(this.translate.use(language));

      this.applyDocumentLanguage(language);
      this.persistLanguage(language);
    } catch {
      await this.useFallbackLanguage();
    }
  }

  private getInitialLanguage(): AppLanguage {
    if (!isPlatformBrowser(this.platformId)) {
      return 'en';
    }

    const storedLanguage = localStorage.getItem(this.storageKey);

    return storedLanguage === 'ar' ? 'ar' : 'en';
  }

  private persistLanguage(language: AppLanguage): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(this.storageKey, language);
  }

  private applyDocumentLanguage(language: AppLanguage): void {
    const root = this.document.documentElement;

    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
  }

  private async useFallbackLanguage(): Promise<void> {
    await firstValueFrom(this.translate.use('en'));

    this.applyDocumentLanguage('en');
    this.persistLanguage('en');
  }
}
