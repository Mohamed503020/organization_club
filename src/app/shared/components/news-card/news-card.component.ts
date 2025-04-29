import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  @Input() data: {
    image: string;
    category: string;
    date: string;
    title: string;
  } = {
    image: '',
    category: '',
    date: '',
    title: ''
  }

  ;


  @Input() height: string = 'auto';
  @Input() imgHeight: string = 'auto';
}
