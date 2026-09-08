import { ChangeDetectionStrategy, Component } from '@angular/core';

interface FocusItem {
  icon: string;
  label: string;
}

interface EducationItem {
  date: string;
  title: string;
  details: string[];
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly focusItems: FocusItem[] = [
    { icon: 'bi-code-slash', label: 'Angular Apps' },
    { icon: 'bi-phone', label: 'Responsive RTL UI' },
    { icon: 'bi-plug', label: 'API Integration' },
  ];

  readonly educationItems: EducationItem[] = [
    {
      date: '2025 - Present',
      title: "Master's Degree",
      details: [
        'Computer Science Department',
        'Faculty of Computers and Information',
        'Assiut University',
      ],
    },
    {
      date: '2024 - 2025',
      title: 'Intensive Training Program',
      details: [
        'Full Stack Web Development',
        'MEARN Stack Track',
        'Information Technology Institute (ITI)',
      ],
    },
    {
      date: '2020 - 2024',
      title: "Bachelor's Degree",
      details: [
        'Computer Science Department',
        'Faculty of Computers and Information',
        'South Valley University',
      ],
    },
  ];
}
