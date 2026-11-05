import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Testimonial {
  quote: string;
  clientKey: string;
  platformKey: string;
  projectKey: string;
  reviewLink: string;
  language: 'ar' | 'en';
}

@Component({
  selector: 'app-testimonials',
  imports: [TranslatePipe],
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
      clientKey: 'testimonials.reviews.booking.client',
      platformKey: 'testimonials.reviews.booking.platform',
      projectKey: 'testimonials.reviews.booking.project',
      reviewLink: 'https://mostaql.com/u/Mahmoud_7oda_9/reviews/8202653',
      language: 'ar',
    },
    {
      quote:
        'الف شكر... احترافية في العمل ودقة عالية وسرعة في إنجاز المطلوب مع تقبل التعديلات والاضافات برحابة وتفهم وبإذن الله بداية للتعاون في أعمال قادمة',
      clientKey: 'testimonials.reviews.srs.client',
      platformKey: 'testimonials.reviews.srs.platform',
      projectKey: 'testimonials.reviews.srs.project',
      reviewLink: 'https://mostaql.com/u/Mahmoud_7oda_9/reviews/8076027',
      language: 'ar',
    },
  ];
}
