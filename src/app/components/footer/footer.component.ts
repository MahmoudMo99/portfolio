import { Component, HostListener } from '@angular/core';
import { VisitCounterService } from '../../services/visit-counter.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  showBackToTop = false;
  visitsCount = 0;

  constructor(private counterService: VisitCounterService) {}

  ngOnInit(): void {
    this.counterService.updateVisit().subscribe((value) => {
      this.visitsCount = value;
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.showBackToTop = window.scrollY > 200;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  formatNumber(n: number): string {
    if (n < 1000) return n.toString();
    if (n >= 1000 && n < 1000000) {
      return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    if (n >= 1000000) {
      return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    return n.toString();
  }
}
