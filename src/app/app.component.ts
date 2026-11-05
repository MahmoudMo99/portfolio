import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AboutComponent } from './components/about/about.component';
import { ContactCtaComponent } from './components/contact-cta/contact-cta.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { WorkExperiencesComponent } from './components/work-experiences/work-experiences.component';
import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    WorkExperiencesComponent,
    PortfolioComponent,
    SkillsComponent,
    FeaturesComponent,
    TestimonialsComponent,
    ContactCtaComponent,
    FooterComponent,
    ScrollToTopComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
