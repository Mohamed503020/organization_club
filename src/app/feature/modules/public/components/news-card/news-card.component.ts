import { Component } from '@angular/core';

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  newsItems = [
    {
      id: 1,
      title: 'Romelu to stay at Real Madrid?',
      image: '/images/players/player_1.jpeg',
      author: 'Melissa Allison',
      date: 'May 19, 2020',
      category: 'Sports'
    },
    {
      id: 2,
      title: 'Kai Nets Double To Secure Comfortable Away Win',
      image: '/images/players/player_2.jpeg',
      author: 'Melissa Allison',
      date: 'May 19, 2020',
      category: 'Sports'
    },
    {
      id: 3,
      title: 'Dogba set for Juvendu return?',
      image: '/images/players/player_3.jpeg',
      author: 'Melissa Allison',
      date: 'May 19, 2020',
      category: 'Sports'
    }
  ];
}
