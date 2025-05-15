import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  
  navCategories = [
    {
      title: 'News',
      links: [
        { name: 'All', url: '/news/all' },
        { name: 'Club News', url: '/news/club' },
        { name: 'Media Center', url: '/news/media' },
        { name: 'Video', url: '/news/video' },
        { name: 'RSS', url: '/news/rss' }
      ]
    },
    {
      title: 'Tickets',
      links: [
        { name: 'Online Ticket', url: '/tickets/online' },
        { name: 'Payment and Prices', url: '/tickets/payment' },
        { name: 'Contact & Booking', url: '/tickets/contact' },
        { name: 'Tickets', url: '/tickets' },
        { name: 'Coupon', url: '/tickets/coupon' }
      ]
    },
    {
      title: 'Matches',
      links: [
        { name: 'Standings', url: '/matches/standings' },
        { name: 'World Cup', url: '/matches/world-cup' },
        { name: 'La Liga', url: '/matches/la-liga' },
        { name: 'Hyper Cup', url: '/matches/hyper-cup' },
        { name: 'World League', url: '/matches/world-league' }
      ]
    },
    {
      title: 'Social',
      links: [
        { name: 'Twitter', url: 'https://twitter.com' },
        { name: 'Facebook', url: 'https://facebook.com' },
        { name: 'Instagram', url: 'https://instagram.com' },
        { name: 'Youtube', url: 'https://youtube.com' }
      ]
    }
  ];
}
