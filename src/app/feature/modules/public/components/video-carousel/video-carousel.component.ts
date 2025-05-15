import { Component } from '@angular/core';
interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}
@Component({
  selector: 'app-video-carousel',
  templateUrl: './video-carousel.component.html',
  styleUrl: './video-carousel.component.scss'
})
export class VideoCarouselComponent {
  videos: Video[] = [];
  currentSlide = 0;

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  ngOnInit() {
    // Mock data - in a real app this would come from a service
    this.videos = [
      {
        id: 1,
        title: 'Romolu to stay at Real Nadrid?',
        thumbnailUrl: '/images/players/player_1.jpeg',
        videoUrl: 'https://example.com/video1.mp4'
      },
      {
        id: 2,
        title: 'Dogba set for Juvendu return?',
        thumbnailUrl: '/images/players/player_2.jpeg',
        videoUrl: 'https://example.com/video2.mp4'
      },
      {
        id: 3,
        title: 'Kai Nets Double To Secure Comfortable Away Win',
        thumbnailUrl: '/images/players/player_3.jpeg',
        videoUrl: 'https://example.com/video3.mp4'
      },
      {
        id: 4,
        title: 'Romolu to stay at Real Nadrid?',
        thumbnailUrl: '/images/players/player_4.jpeg',
        videoUrl: 'https://example.com/video4.mp4'
      },
      {
        id: 5,
        title: 'Romolu to stay at Real Nadrid?',
        thumbnailUrl: '/images/players/player_5.jpeg',
        videoUrl: 'https://example.com/video1.mp4'
      },
      {
        id: 6,
        title: 'Dogba set for Juvendu return?',
        thumbnailUrl: '/images/players/player_6.jpeg',
        videoUrl: 'https://example.com/video2.mp4'
      },
      {
        id: 7,
        title: 'Kai Nets Double To Secure Comfortable Away Win',
        thumbnailUrl: '/images/players/player_7.jpeg',
        videoUrl: 'https://example.com/video3.mp4'
      },
      {
        id: 8,
        title: 'Romolu to stay at Real Nadrid?',
        thumbnailUrl: '/images/players/player_8.jpeg',
        videoUrl: 'https://example.com/video4.mp4'
      }
    ];
  }

  previousSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.videos.length - 1 : this.currentSlide - 1;
  }

  nextSlide(): void {
    this.currentSlide = this.currentSlide === this.videos.length - 1 ? 0 : this.currentSlide + 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
