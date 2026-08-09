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
        'Delivering technical lectures and hands-on training in the MEARN Stack across multiple ITI tracks.',
        'Focused on practical applications, real-world projects, debugging, and mentoring junior developers.',
      ],
    },
    {
      title: 'Freelance Webflow Developer',
      organization: 'Mostaql',
      date: '12/2025',
      type: 'Webflow Website Enhancement',
      icon: 'bi-window-sidebar',
      description: [
        'Completed and enhanced a partially built Webflow website with a focus on clean UI, better structure, and consistent branding.',
        'Improved mobile responsiveness, fixed layout issues, adjusted spacing, typography, navigation links, and CTA behavior.',
        'Refined key pages including Home, Services, Why IGCA, Testimonials, and FAQ, and applied basic SEO improvements.',
      ],
    },
    {
      title: 'Coach for Freelancing in Software Development',
      organization: 'EYouth',
      date: '10/2024 - 04/2025',
      type: 'Project-Based | DEPI Initiative',
      icon: 'bi-person-video3',
      description: [
        'Provided guidance on freelancing skills, client engagement, and portfolio building.',
        'Helped participants prepare for software development opportunities.',
      ],
    },
    {
      title: 'Freelance Angular Developer',
      organization: 'Mostaql',
      date: '11/2024 - 02/2025',
      type: 'Web Application Project',
      icon: 'bi-code-slash',
      description: [
        'Developed a web application for small businesses to manage services, employees, and bookings.',
        'Built client-facing pages to reserve time slots and view availability.',
        'Used Angular, .NET, and MS SQL Server.',
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
        'Analyzed a mobile app idea and prepared a clear SRS document.',
        'Designed user-friendly UX layouts for the proposed application.',
      ],
      reviewLink: 'https://mostaql.com/u/Mahmoud_7oda_9/reviews/8076027',
      linkLabel: 'Client Review',
    },
    {
      title: 'Web Development Internship',
      organization: 'NetArabia',
      date: '08/2022 - 09/2022',
      type: 'Training Internship',
      icon: 'bi-laptop',
      description: [
        'Learned HTML, CSS, JavaScript, and WordPress fundamentals.',
        'Built basic websites and practiced frontend development concepts.',
      ],
    },
  ];
}
