import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent    {

  navItems = [
    { name: 'HOME', link: '/' },
    { name: 'MATCHES', link: '/matches' },
    { name: 'PLAYERS', link: '/players' },
    { name: 'BLOG', link: '/blog' },
    { name: 'CONTACT', link: '/contact' }
  ];

}
