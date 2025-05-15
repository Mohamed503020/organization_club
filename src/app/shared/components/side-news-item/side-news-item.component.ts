import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-news-item',
  templateUrl: './side-news-item.component.html',
  styleUrl: './side-news-item.component.scss'
})
export class SideNewsItemComponent {
  @Input() data:{
    title: string;
    category: string;
    date: string;
  }= {
    title: '',
    category: '',
    date: ''
  }

}
