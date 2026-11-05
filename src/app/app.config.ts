import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';
import { LanguageService } from './core/services/language.service';
import { ThemeService } from './core/services/theme.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),

    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',
        suffix: '.json',
        failOnError: true,
      }),
      fallbackLang: 'en',
      lang: 'en',
    }),

    provideAppInitializer(() => {
      const themeService = inject(ThemeService);
      const languageService = inject(LanguageService);

      themeService.initialize();

      return languageService.initialize();
    }),
  ],
};
