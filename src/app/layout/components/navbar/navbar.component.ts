import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent    {

  navItems = [
    { name: 'Accueil', link: '/' },
    { name: 'Apropos', link: '/' },
    { name: ' Nos partenaire ', link: '/' },
    { name: 'Nos Projets ', link: '/' },
    { name: 'Contact', link: '/' }
  ];

}
