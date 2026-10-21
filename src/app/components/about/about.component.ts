import { ChangeDetectionStrategy, Component } from '@angular/core';

interface FocusItem {
  icon: string;
  label: string;
  description: string;
}

interface EducationItem {
  date: string;
  title: string;
  details: readonly string[];
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
      label: 'Angular Engineering',
      description:
        'Reusable components, Signals, Reactive Forms, routing, and application structure',
    },
    {
      icon: 'bi-display',
      label: 'Responsive & RTL UI',
      description:
        'Responsive interfaces designed for desktop, tablet, mobile, and RTL experiences',
    },
    {
      icon: 'bi-plug',
      label: 'API-Driven Applications',
      description:
        'REST API integration, RxJS workflows, authentication, guards, and interceptors',
    },
  ];

  readonly educationItems: readonly EducationItem[] = [
    {
      date: '2025 - Present',
      title: "Master's in Computer Science",
      details: ['Faculty of Computers and Information', 'Assiut University'],
    },
    {
      date: '2024 - 2025',
      title: 'Intensive Training Program – MEARN Stack',
      details: [
        'Full-Stack Web Development',
        'Information Technology Institute (ITI)',
      ],
    },
    {
      date: '2020 - 2024',
      title: "Bachelor's in Computers & Information",
      details: ['Computer Science Department', 'South Valley University'],
    },
  ];
}
