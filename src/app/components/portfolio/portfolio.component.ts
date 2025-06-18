import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  categories = ['All', 'Web', 'AI', 'Mobile UI', 'Tools'];
  selectedCategory = 'All';

  projects = [
    {
      title: 'Tripadvisor Clone',
      description: 'Clone of Tripadvisor with Angular & Node JS.',
      category: 'Web',
      skills: [
        'HTML',
        'CSS',
        'Bootstrap',
        'Angular',
        'Node JS',
        'Express JS',
        'Mongo DB',
      ],
      image: '/images/projects/trip.png',
      github: 'https://github.com/MahmoudMo99/tripadvisor-angular',
    },
    {
      title: 'University Campus Housing Management',
      description: 'System for student housing using Angular and .NET.',
      category: 'Web',
      skills: ['Angular', '.NET', 'SQL Server'],
      image: '/images/projects/madina.jpg',
      live: 'http://193.227.49.104/madina/login',
      video:
        'https://drive.google.com/file/d/1MvZCvKK9nqqJO3jpELBa6q4r7aUjEGPk/view?usp=sharing',
    },
    {
      title: 'E-Commerce Website',
      description: 'Filter & view product details with Angular.',
      category: 'Web',
      skills: ['HTML', 'CSS', 'Bootstrap', 'TypeScript', 'Angular'],
      image: '/images/projects/ecommerce.png',
      github: 'https://github.com/MahmoudMo99/Angular-E-Commerce',
    },
    {
      title: 'Medium Articles Platform',
      description: 'Full CRUD blog with profile & auth.',
      category: 'Web',
      skills: ['Angular', 'ASP.NET Core', 'REST API'],
      image: '/images/projects/medium.png',
      github: 'https://github.com/MahmoudMo99/MediumPlus',
      live: 'https://medium-plus.vercel.app/',
    },
    {
      title: 'Islamic and Quran Website',
      description: 'A website for Islamic content and Quran & Tafsir reading.',
      category: 'Web',
      skills: ['HTML', 'CSS', 'Bootstrap', 'Angular', 'Rest API'],
      image: '/images/projects/quran.png',
      github: 'https://github.com/MahmoudMo99/QuranSunnah',
      live: 'https://quran-sunnah.vercel.app/',
    },
    {
      title: 'YouTube Playlist Downloader',
      description: 'Download playlists as ZIP using Flask & JS.',
      category: 'Tools',
      skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Python', 'Flask'],
      image: '/images/projects/download-yout.png',
      github: 'https://github.com/MahmoudMo99/Youtube-Playlist-Downloader',
      video:
        'https://www.linkedin.com/posts/mahmoud-mohamed-a25901223_for-youtube-playlists-download-lovers-activity-7215057068204933121-ydzQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADgyaH0BbjEuGZZyUMA7ZMkUi7YePJjokFU',
    },

    {
      title: 'Mobile Food UI',
      description: 'Food ordering app UI built with Figma.',
      category: 'Mobile UI',
      skills: ['Figma', 'UX', 'UI'],
      image: '/images/projects/food.png',
      live: 'https://www.figma.com/file/9cxnbJy4BtnaQgSbnxbdbp/Fast-Food-Design?type=design&node-id=0%3A1&mode=design&t=uX0rKOu1kSSBGGcx-1',
    },
    {
      title: 'Online Learning Management System',
      description: 'Manage courses, materials, and students.',
      category: 'Web',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'ASP.NET Core'],
      image: '/images/projects/OLMS.png',
      github: 'https://github.com/MahmoudMo99/Learning-Management-System',
    },
    {
      title: 'JavaScript Assignments Solutions',
      description: 'Solutions for JS tasks from Elzero Academy.',
      category: 'Tools',
      skills: ['JavaScript', 'HTML', 'CSS'],
      image: '/images/projects/Js.jpg',
      github: 'https://github.com/MahmoudMo99/JavaScript-Assignments',
    },
    {
      title: 'Personality Detection App',
      description: 'ML model detects personality based on inputs.',
      category: 'AI',
      skills: ['Python', 'ML', 'Flask'],
      image: '/images/projects/personality.png',
      github: 'https://github.com/MahmoudMo99/ML-Personality-Detection',
      video:
        'https://www.linkedin.com/posts/mahmoud-mohamed-a25901223_how-about-knowing-your-type-of-personality-activity-7011728294903459843-Uls_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADgyaH0BbjEuGZZyUMA7ZMkUi7YePJjokFU',
    },
  ];

  get filteredProjects() {
    if (this.selectedCategory === 'All') return this.projects;
    return this.projects.filter((p) => p.category === this.selectedCategory);
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
  }

  getBadgeClass(skill: string): string {
    const map: { [key: string]: string } = {
      Angular: 'bg-danger',
      '.NET': 'bg-secondary',
      Python: 'bg-warning text-dark',
      Flask: 'bg-warning text-dark',
      SQL: 'bg-primary',
      'SQL Server': 'bg-primary',
      JS: 'bg-info text-dark',
      Figma: 'bg-success',
      ML: 'bg-warning text-dark',
      UX: 'bg-success',
      UI: 'bg-success',
    };
    return 'badge rounded-pill ' + (map[skill] || 'bg-secondary');
  }
}
