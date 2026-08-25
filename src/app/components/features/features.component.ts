import { ChangeDetectionStrategy, Component } from '@angular/core';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {
  readonly features: FeatureItem[] = [
    {
      icon: 'bi-code-slash',
      title: 'Angular Development',
      description:
        'Building scalable Angular applications using TypeScript, RxJS, reusable components, routing, forms, and REST API integration.',
    },
    {
      icon: 'bi-speedometer2',
      title: 'Admin Dashboards & Systems',
      description:
        'Creating dashboard experiences with tables, filters, forms, authentication flows, role-based UI, analytics, and responsive layouts.',
    },
    {
      icon: 'bi-layout-text-window-reverse',
      title: 'Responsive & RTL Interfaces',
      description:
        'Turning designs into clean, responsive, and user-friendly interfaces with attention to spacing, typography, usability, and Arabic RTL support.',
    },
  ];
}
