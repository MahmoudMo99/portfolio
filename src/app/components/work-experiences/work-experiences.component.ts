import { Component } from '@angular/core';

interface WorkExperience {
  title: string;
  organization: string;
  date: string;
  type: string;
  description: string[];
  reviewLink?: string;
  current?: boolean;
}

@Component({
  selector: 'app-work-experiences',
  imports: [],
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.scss',
})
export class WorkExperiencesComponent {
  readonly experiences: WorkExperience[] = [
    {
      title: 'External Instructor',
      organization: 'Information Technology Institute (ITI)',
      date: '07/2025 - Present',
      type: 'Part Time',
      current: true,
      description: [
        'Delivering technical lectures and hands-on training in the MEARN Stack across multiple ITI tracks.',
        'Focused on practical applications, real-world projects, and mentoring junior developers.',
      ],
    },
    {
      title: 'Coach for Freelancing in Software Development',
      organization: 'EYouth',
      date: '10/2024 - 04/2025',
      type: 'Project-Based | DEPI Initiative',
      description: [
        'Provided guidance on freelancing skills, client engagement, and portfolio building.',
        'Helped participants prepare for software development opportunities.',
      ],
    },
    {
      title: 'Freelancing Project',
      organization: 'Mostaql',
      date: '11/2024 - 01/2025',
      type: 'Web Application Project',
      description: [
        'Developed a web application for small businesses to manage services, employees, and bookings.',
        'Built client-facing pages to reserve time slots and view availability.',
        'Used Angular, .NET, and MS SQL Server.',
      ],
      reviewLink: 'https://mostaql.com/u/Mahmoud_7oda_9/reviews/8202653',
    },
    {
      title: 'Freelancing Project',
      organization: 'Mostaql',
      date: '09/2024',
      type: 'Documentation & UX Design',
      description: [
        'Analyzed a mobile app idea and prepared a clear SRS document.',
        'Designed user-friendly UX layouts for the proposed application.',
      ],
      reviewLink: 'https://mostaql.com/u/Mahmoud_7oda_9/reviews/6995300',
    },
    {
      title: 'Web Development Internship',
      organization: 'NetArabia',
      date: '08/2022 - 09/2022',
      type: 'Training Internship',
      description: [
        'Learned HTML, CSS, JavaScript, and WordPress fundamentals.',
        'Built basic websites and practiced frontend development concepts.',
      ],
    },
  ];
}
