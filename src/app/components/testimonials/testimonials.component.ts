import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Testimonial {
  quote: string;
  client: string;
  platform: string;
  project: string;
  reviewLink: string;
  language: 'ar' | 'en';
}

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  readonly stars = Array.from({ length: 5 });

  readonly testimonials: readonly Testimonial[] = [
    {
      quote:
        'التعامل كان أكثر من رائع مع المهندس محمود وأبدى فهم كامل لمتطلبات المشروع وكأنه شريك فيه. كان متعاون في كل المراحل ويصلح ويربط كل حاجة انطلبت منه بشكل كامل. تم تسليم المشروع على أكمل وجه والحمدلله.',
      client: 'Mostaql Client',
      platform: 'Verified on Mostaql',
      project: 'Angular Booking Web Application',
      reviewLink: 'https://mostaql.com/u/Mahmoud_7oda_9/reviews/8202653',
      language: 'ar',
    },
    {
      quote:
        'الف شكر... احترافية في العمل ودقة عالية وسرعة في إنجاز المطلوب مع تقبل التعديلات والاضافات برحابة وتفهم وبإذن الله بداية للتعاون في أعمال قادمة',
      client: 'Mostaql Client',
      platform: 'Verified on Mostaql',
      project: 'UI/UX & SRS Project',
      reviewLink: 'https://mostaql.com/u/Mahmoud_7oda_9/reviews/8076027',
      language: 'ar',
    },
  ];
}
