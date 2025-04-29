import { Component, Input } from '@angular/core';
export interface BlogPost {
  id: number;
  date: string;
  title: string;
  summary: string;
  imageUrl: string;
}
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  @Input() blogPosts: BlogPost[] = [];
  @Input() sectionTitle: string = 'Our Blog';
}
