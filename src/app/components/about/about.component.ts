import { ChangeDetectionStrategy, Component } from '@angular/core';

interface FocusItem {
  icon: string;
  label: string;
  description: string;
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
  readonly focusItems: readonly FocusItem[] = [
    {
      icon: 'bi-code-slash',
      label: 'Angular Development',
      description:
        'Reusable components, forms, routing, and application structure',
    },
    {
      icon: 'bi-display',
      label: 'Responsive UI',
      description:
        'Clean interfaces that work across desktop, tablet, and mobile',
    },
    {
      icon: 'bi-plug',
      label: 'API Integration',
      description: 'REST APIs, RxJS workflows, guards, and interceptors',
    },
  ];

  readonly educationItems: readonly EducationItem[] = [
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
