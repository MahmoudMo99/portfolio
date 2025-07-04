import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {}

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideRouter([])],
};
