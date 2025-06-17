import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { FeaturesComponent } from "./components/features/features.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { NewsComponent } from "./components/news/news.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, AboutComponent, FeaturesComponent, PortfolioComponent, TestimonialsComponent, SkillsComponent, NewsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mahmoud-portfolio';
}
