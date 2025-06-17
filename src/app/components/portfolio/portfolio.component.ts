import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects = [
    {
      title: 'University Campus Housing Management',
      description:
        'A complete system for student housing operations using Angular and .NET.',
      link: '#',
    },
    {
      title: 'YouTube Playlist Downloader',
      description: 'Download playlists in one zip file using Python & JS.',
      link: '#',
    },
    {
      title: 'Medium Articles Platform',
      description: 'Full CRUD Medium-style blog platform.',
      link: '#',
    },
    {
      title: 'E-Commerce Website',
      description: 'Product filtering & browsing with Angular.',
      link: '#',
    },
    {
      title: 'Online Learning System',
      description: 'Admin, teacher & student dashboard with course materials.',
      link: '#',
    },
    {
      title: 'Personality Detection App',
      description:
        'ML model to detect personality type based on questionnaire.',
      link: '#',
    },
  ];
}
