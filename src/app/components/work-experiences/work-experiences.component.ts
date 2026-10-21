import { ChangeDetectionStrategy, Component } from '@angular/core';

interface WorkExperience {
  title: string;
  organization: string;
  date: string;
  type: string;
  description: readonly string[];
  icon: string;
  reviewLink?: string;
  linkLabel?: string;
  current?: boolean;
}

@Component({
  selector: 'app-work-experiences',
  imports: [],
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperiencesComponent {
  readonly experiences: readonly WorkExperience[] = [
    {
      title: 'External Instructor',
      organization: 'Information Technology Institute (ITI)',
      date: '07/2025 - Present',
      type: 'Part-Time',
      icon: 'bi-mortarboard',
      current: true,
      description: [
        'Deliver hands-on web development training across the MEARN Stack, including Angular, React, Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript.',
        'Mentor trainees through real-world projects, debugging, code reviews, and practical implementation of web application features.',
      ],
    },
    {
      title: 'Freelance Angular Developer',
      organization: 'Confidential Client',
      date: '08/2026',
      type: 'Educational Platform',
      icon: 'bi-code-slash',
      description: [
        'Developed the Angular frontend for an educational training and assessment platform, including admin dashboard screens, student portal workflows, and responsive UI components.',
        'Built reusable Angular components, Reactive Forms, routing, and integrated REST APIs with a .NET backend.',
        'Collaborated with backend and UI/UX team members to deliver clear and user-friendly workflows.',
      ],
    },
    {
      title: 'Freelance Webflow Developer',
      organization: 'Mostaql',
      date: '12/2025 - 01/2026',
      type: 'Website Enhancement',
      icon: 'bi-window-sidebar',
      description: [
        'Redesigned and enhanced a Webflow website, improving UI/UX, mobile responsiveness, and on-page SEO across key pages.',
        'Improved layout structure, spacing, typography, navigation, CTA behavior, and overall visual consistency.',
      ],
    },
    {
      title: 'Freelancing Coach – Software Development',
      organization: 'EYouth',
      date: '10/2024 - 04/2025',
      type: 'DEPI Initiative',
      icon: 'bi-person-video3',
      description: [
        'Mentored participants in freelancing, portfolio building, client communication, project presentation, and preparation for freelance opportunities.',
        'Provided practical mentoring and career guidance as part of the Digital Egypt Pioneers Initiative (DEPI).',
      ],
    },
    {
      title: 'Freelance Angular Developer',
      organization: 'Mostaql',
      date: '11/2024 - 01/2025',
      type: 'Booking Web Application',
      icon: 'bi-code-slash',
      description: [
        'Developed the frontend of a booking management application covering bookings, services, employees, and availability.',
        'Built responsive Angular interfaces using reusable components, Reactive Forms, routing, guards, interceptors, and REST API integration.',
      ],
      reviewLink: 'https://mostaql.com/u/Mahmoud_7oda_9/reviews/8202653',
      linkLabel: 'Client Review',
    },
    {
      title: 'Freelance UI/UX & SRS Consultant',
      organization: 'Mostaql',
      date: '09/2024',
      type: 'Documentation & UX Design',
      icon: 'bi-pencil-square',
      description: [
        'Created an SRS document and UX wireframes defining user flows, application screens, and core system requirements.',
      ],
      reviewLink: 'https://mostaql.com/u/Mahmoud_7oda_9/reviews/8076027',
      linkLabel: 'Client Review',
    },
  ];
}
