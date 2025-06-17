import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  news = [
    {
      title: 'Selected as a Coach at EYouth for DEPI',
      summary:
        'Mentoring young developers on freelancing and career building in the Digital Egypt Pioneers Initiative.',
      date: 'March 2025',
    },
    {
      title: 'Completed Full Stack MEARN Diploma at ITI',
      summary:
        'Successfully finished a 4-month intensive diploma in full stack development (MEARN stack).',
      date: 'May 2025',
    },
    {
      title: 'Launched Graduation Project System',
      summary:
        'Deployed University Housing Management System at South Valley University.',
      date: 'July 2024',
    },
  ];
}
