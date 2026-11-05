import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface FocusItem {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

interface EducationItem {
  dateKey: string;
  titleKey: string;
  detailsKeys: readonly string[];
}

@Component({
  selector: 'app-about',
  imports: [TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly focusItems: readonly FocusItem[] = [
    {
      icon: 'bi-braces',
      titleKey: 'about.focus.angular.title',
      descriptionKey: 'about.focus.angular.description',
    },
    {
      icon: 'bi-display',
      titleKey: 'about.focus.ui.title',
      descriptionKey: 'about.focus.ui.description',
    },
    {
      icon: 'bi-diagram-3',
      titleKey: 'about.focus.api.title',
      descriptionKey: 'about.focus.api.description',
    },
  ];

  readonly educationItems: readonly EducationItem[] = [
    {
      dateKey: 'about.education.items.master.date',
      titleKey: 'about.education.items.master.title',
      detailsKeys: [
        'about.education.items.master.detail1',
        'about.education.items.master.detail2',
      ],
    },
    {
      dateKey: 'about.education.items.iti.date',
      titleKey: 'about.education.items.iti.title',
      detailsKeys: [
        'about.education.items.iti.detail1',
        'about.education.items.iti.detail2',
      ],
    },
    {
      dateKey: 'about.education.items.bachelor.date',
      titleKey: 'about.education.items.bachelor.title',
      detailsKeys: [
        'about.education.items.bachelor.detail1',
        'about.education.items.bachelor.detail2',
      ],
    },
  ];
}
