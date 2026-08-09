import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

type ProjectCategory = 'All' | 'Angular' | 'AI';

interface PortfolioProject {
  title: string;
  description: string;
  categories: Exclude<ProjectCategory, 'All'>[];
  primaryCategory: Exclude<ProjectCategory, 'All'>;
  skills: string[];
  image: string;
  github?: string;
  live?: string;
  video?: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  readonly categories: ProjectCategory[] = ['All', 'Angular', 'AI'];

  readonly selectedCategory = signal<ProjectCategory>('All');

  readonly projects: PortfolioProject[] = [
    {
      title: 'Nova AI Learning Assistant',
      description:
        'A full-stack AI learning assistant with real-time streaming responses, Markdown rendering, persistent conversations, and a responsive Angular interface.',
      categories: ['Angular', 'AI'],
      primaryCategory: 'AI',
      skills: ['Angular', 'TypeScript', 'Node.js', 'Express', 'Gemini API'],
      image: '/images/projects/nova-ai.png',
      github: 'https://github.com/MahmoudMo99/nova-ai',
    },
    {
      title: 'Personal Portfolio',
      description:
        'My personal portfolio showcasing my projects, skills, work experience, and frontend background.',
      categories: ['Angular'],
      primaryCategory: 'Angular',
      skills: ['Angular', 'TypeScript', 'SASS', 'Bootstrap'],
      image: '/images/projects/portfolio.png',
      github: 'https://github.com/MahmoudMo99/portfolio',
      live: 'https://mahmoud-mohamed-portfolio.vercel.app/',
    },
    {
      title: 'University Campus Housing Management',
      description:
        'A web application for managing student housing, services, employees, and reservations.',
      categories: ['Angular'],
      primaryCategory: 'Angular',
      skills: ['Angular', '.NET', 'SQL Server'],
      image: '/images/projects/madina.jpg',
      live: 'http://193.227.49.104/madina/login',
      video:
        'https://drive.google.com/file/d/1MvZCvKK9nqqJO3jpELBa6q4r7aUjEGPk/view?usp=sharing',
    },
    {
      title: 'Medium Articles Platform',
      description:
        'A full CRUD articles platform with authentication, user profiles, and REST API integration.',
      categories: ['Angular'],
      primaryCategory: 'Angular',
      skills: ['Angular', 'ASP.NET Core', 'REST API'],
      image: '/images/projects/medium.png',
      github: 'https://github.com/MahmoudMo99/MediumPlus',
      live: 'https://medium-plus.vercel.app/',
    },
    {
      title: 'Tripadvisor Clone',
      description:
        'A full-stack travel platform clone built with Angular, Node.js, Express, and MongoDB.',
      categories: ['Angular'],
      primaryCategory: 'Angular',
      skills: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
      image: '/images/projects/trip.png',
      github: 'https://github.com/MahmoudMo99/tripadvisor-angular',
    },
    {
      title: 'Islamic and Quran Website',
      description:
        'A platform for Islamic content, Quran reading, and Tafsir using Angular and REST APIs.',
      categories: ['Angular'],
      primaryCategory: 'Angular',
      skills: ['Angular', 'Bootstrap', 'REST API'],
      image: '/images/projects/quran.png',
      github: 'https://github.com/MahmoudMo99/QuranSunnah',
      live: 'https://quran-sunnah.vercel.app/',
    },
  ];

  readonly filteredProjects = computed(() => {
    const category = this.selectedCategory();

    if (category === 'All') {
      return this.projects;
    }

    return this.projects.filter((project) =>
      project.categories.includes(category),
    );
  });

  filterProjects(category: ProjectCategory): void {
    this.selectedCategory.set(category);
  }
}
