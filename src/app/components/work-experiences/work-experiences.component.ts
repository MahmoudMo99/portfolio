import { ChangeDetectionStrategy, Component } from '@angular/core';

interface WorkExperience {
  title: string;
  organization: string;
  date: string;
  type: string;
  description: string[];
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
  readonly experiences: WorkExperience[] = [
    {
      title: 'External Instructor',
      organization: 'Information Technology Institute (ITI)',
      date: '07/2025 - Present',
      type: 'Part Time',
      icon: 'bi-mortarboard',
      current: true,
      description: [
        'Deliver hands-on training in modern web development, including the MEARN Stack track, across multiple ITI tracks.',
        'Mentor trainees through real-world projects, debugging, code reviews, and practical implementation of web application features.',
      ],
    },
    {
      title: 'Freelance Angular Developer',
      organization: 'Freelance Client',
      date: '08/2026',
      type: 'Educational Platform Project',
      icon: 'bi-mortarboard',
      description: [
        'Developed the frontend of a full educational training and exams platform using Angular, including admin dashboard screens and student portal workflows.',
        'Implemented reusable components, Reactive Forms, routing, and REST API integration with a .NET backend.',
        'Collaborated with backend and UI/UX team members to deliver organized, user-friendly frontend workflows.',
      ],
    },
    {
      title: 'Freelance Webflow Developer',
      organization: 'Mostaql',
      date: '12/2025 - 01/2026',
      type: 'Webflow Website Enhancement',
      icon: 'bi-window-sidebar',
      description: [
        'Redesigned and improved a Webflow website, enhancing UI/UX, mobile responsiveness, and SEO for the homepage and services page.',
        'Improved layout structure, spacing, typography, navigation links, CTA behavior, and consistent branding.',
      ],
    },
    {
      title: 'Freelancing Coach in Software Development',
      organization: 'EYouth',
      date: '10/2024 - 04/2025',
      type: 'Project-Based | DEPI Initiative',
      icon: 'bi-person-video3',
      description: [
        'Guided participants in freelancing fundamentals, portfolio building, client communication, and project presentation.',
        'Helped participants prepare for software development opportunities through practical mentoring and career guidance.',
      ],
    },
    {
      title: 'Freelance Angular Developer',
      organization: 'Mostaql',
      date: '11/2024 - 02/2025',
      type: 'Web Application Project',
      icon: 'bi-code-slash',
      description: [
        'Developed the frontend of a booking management web application for managing services, employees, bookings, and availability.',
        'Built responsive Angular screens using reusable components, Reactive Forms, routing, guards, interceptors, and REST API integration.',
      ],
      reviewLink: 'https://mostaql.com/u/Mahmoud_7oda_9/reviews/8202653',
      linkLabel: 'Client Review',
    },
    {
      title: 'Freelance UI/UX & SRS Project',
      organization: 'Mostaql',
      date: '09/2024',
      type: 'Documentation & UX Design',
      icon: 'bi-pencil-square',
      description: [
        'Created an SRS document and UX wireframes to clarify user flows, screens, and core system requirements.',
      ],
      reviewLink: 'https://mostaql.com/u/Mahmoud_7oda_9/reviews/8076027',
      linkLabel: 'Client Review',
    },
  ];
}
