import { Component } from '@angular/core';

type ProjectCategory = 'All' | 'Web' | 'AI' | 'Mobile UI' | 'Tools';

interface PortfolioProject {
  title: string;
  description: string;
  category: Exclude<ProjectCategory, 'All'>;
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
})
export class PortfolioComponent {
  readonly categories: ProjectCategory[] = [
    'All',
    'Web',
    'AI',
    'Mobile UI',
    'Tools',
  ];

  selectedCategory: ProjectCategory = 'All';

  readonly projects: PortfolioProject[] = [
    {
      title: 'Personal Portfolio',
      description:
        'My personal portfolio showcasing my projects, skills, and work experience.',
      category: 'Web',
      skills: ['Angular', 'TypeScript', 'SASS', 'Bootstrap'],
      image: '/images/projects/portfolio.png',
      github: 'https://github.com/MahmoudMo99/portfolio',
      live: 'https://mahmoud-mohamed-portfolio.vercel.app/',
    },
    {
      title: 'Tripadvisor Clone',
      description:
        'A Tripadvisor clone built with Angular, Node.js, Express, and MongoDB.',
      category: 'Web',
      skills: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
      image: '/images/projects/trip.png',
      github: 'https://github.com/MahmoudMo99/tripadvisor-angular',
    },
    {
      title: 'University Campus Housing Management',
      description:
        'A system for managing student housing, services, employees, and reservations.',
      category: 'Web',
      skills: ['Angular', '.NET', 'SQL Server'],
      image: '/images/projects/madina.jpg',
      live: 'http://193.227.49.104/madina/login',
      video:
        'https://drive.google.com/file/d/1MvZCvKK9nqqJO3jpELBa6q4r7aUjEGPk/view?usp=sharing',
    },
    {
      title: 'E-Commerce Website',
      description:
        'An Angular e-commerce interface with product filtering and details pages.',
      category: 'Web',
      skills: ['Angular', 'TypeScript', 'Bootstrap'],
      image: '/images/projects/ecommerce.png',
      github: 'https://github.com/MahmoudMo99/AngularE-Commerce',
    },
    {
      title: 'Medium Articles Platform',
      description:
        'A full CRUD articles platform with authentication, profiles, and REST APIs.',
      category: 'Web',
      skills: ['Angular', 'ASP.NET Core', 'REST API'],
      image: '/images/projects/medium.png',
      github: 'https://github.com/MahmoudMo99/MediumPlus',
      live: 'https://medium-plus.vercel.app/',
    },
    {
      title: 'Islamic and Quran Website',
      description:
        'A platform for Islamic content, Quran reading, and Tafsir using REST APIs.',
      category: 'Web',
      skills: ['Angular', 'Bootstrap', 'REST API'],
      image: '/images/projects/quran.png',
      github: 'https://github.com/MahmoudMo99/QuranSunnah',
      live: 'https://quran-sunnah.vercel.app/',
    },
    {
      title: 'YouTube Playlist Downloader',
      description:
        'A tool for downloading YouTube playlists as ZIP files using Flask and JavaScript.',
      category: 'Tools',
      skills: ['Python', 'Flask', 'JavaScript', 'Bootstrap'],
      image: '/images/projects/download-yout.png',
      github: 'https://github.com/MahmoudMo99/Youtube-Playlist-Downloader',
      video:
        'https://www.linkedin.com/posts/mahmoud-mohamed-a25901223_for-youtube-playlists-download-lovers-activity-7215057068204933121-ydzQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADgyaH0BbjEuGZZyUMA7ZMkUi7YePJjokFU',
    },
    {
      title: 'Mobile Food UI',
      description: 'A modern food ordering mobile app UI designed with Figma.',
      category: 'Mobile UI',
      skills: ['Figma', 'UI', 'UX'],
      image: '/images/projects/food.png',
      live: 'https://www.figma.com/file/9cxnbJy4BtnaQgSbnxbdbp/Fast-Food-Design?type=design&node-id=0%3A1&mode=design&t=uX0rKOu1kSSBGGcx-1',
    },
    {
      title: 'Online Learning Management System',
      description:
        'A learning management system for courses, materials, and student management.',
      category: 'Web',
      skills: ['ASP.NET Core', 'JavaScript', 'Bootstrap'],
      image: '/images/projects/OLMS.png',
      github: 'https://github.com/MahmoudMo99/FullStack-OLMS',
    },
    {
      title: 'JavaScript Assignments Solutions',
      description:
        'A collection of JavaScript problem-solving assignments from Elzero Academy.',
      category: 'Tools',
      skills: ['JavaScript', 'HTML', 'CSS'],
      image: '/images/projects/Js.jpg',
      github: 'https://github.com/MahmoudMo99/JavaScript-Assignments-Solutions',
    },
    {
      title: 'Personality Detection App',
      description:
        'A machine learning app that predicts personality type based on user inputs.',
      category: 'AI',
      skills: ['Python', 'ML', 'Flask'],
      image: '/images/projects/personality.png',
      github: 'https://github.com/MahmoudMo99/ML-Personality-Detection',
      video:
        'https://www.linkedin.com/posts/mahmoud-mohamed-a25901223_how-about-knowing-your-type-of-personality-activity-7011728294903459843-Uls_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADgyaH0BbjEuGZZyUMA7ZMkUi7YePJjokFU',
    },
  ];

  get filteredProjects(): PortfolioProject[] {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }

    return this.projects.filter(
      (project) => project.category === this.selectedCategory,
    );
  }

  filterProjects(category: ProjectCategory): void {
    this.selectedCategory = category;
  }
}
