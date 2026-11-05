import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface WorkExperience {
  titleKey: string;
  organizationKey: string;
  dateKey: string;
  typeKey: string;
  descriptionKeys: readonly string[];
  icon: string;
  reviewLink?: string;
  current?: boolean;
}

@Component({
  selector: 'app-work-experiences',
  imports: [TranslatePipe],
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperiencesComponent {
  readonly experiences: readonly WorkExperience[] = [
    {
      titleKey: 'experience.items.iti.title',
      organizationKey: 'experience.items.iti.organization',
      dateKey: 'experience.items.iti.date',
      typeKey: 'experience.items.iti.type',
      icon: 'bi-mortarboard',
      current: true,
      descriptionKeys: [
        'experience.items.iti.description1',
        'experience.items.iti.description2',
      ],
    },
    {
      titleKey: 'experience.items.educationPlatform.title',
      organizationKey: 'experience.items.educationPlatform.organization',
      dateKey: 'experience.items.educationPlatform.date',
      typeKey: 'experience.items.educationPlatform.type',
      icon: 'bi-code-slash',
      descriptionKeys: [
        'experience.items.educationPlatform.description1',
        'experience.items.educationPlatform.description2',
        'experience.items.educationPlatform.description3',
      ],
    },
    {
      titleKey: 'experience.items.webflow.title',
      organizationKey: 'experience.items.webflow.organization',
      dateKey: 'experience.items.webflow.date',
      typeKey: 'experience.items.webflow.type',
      icon: 'bi-window-sidebar',
      descriptionKeys: [
        'experience.items.webflow.description1',
        'experience.items.webflow.description2',
      ],
    },
    {
      titleKey: 'experience.items.eyouth.title',
      organizationKey: 'experience.items.eyouth.organization',
      dateKey: 'experience.items.eyouth.date',
      typeKey: 'experience.items.eyouth.type',
      icon: 'bi-person-video3',
      descriptionKeys: [
        'experience.items.eyouth.description1',
        'experience.items.eyouth.description2',
      ],
    },
    {
      titleKey: 'experience.items.booking.title',
      organizationKey: 'experience.items.booking.organization',
      dateKey: 'experience.items.booking.date',
      typeKey: 'experience.items.booking.type',
      icon: 'bi-braces',
      reviewLink: 'https://mostaql.com/u/Mahmoud_7oda_9/reviews/8202653',
      descriptionKeys: [
        'experience.items.booking.description1',
        'experience.items.booking.description2',
      ],
    },
    {
      titleKey: 'experience.items.ux.title',
      organizationKey: 'experience.items.ux.organization',
      dateKey: 'experience.items.ux.date',
      typeKey: 'experience.items.ux.type',
      icon: 'bi-pencil-square',
      reviewLink: 'https://mostaql.com/u/Mahmoud_7oda_9/reviews/8076027',
      descriptionKeys: ['experience.items.ux.description1'],
    },
  ];
}
