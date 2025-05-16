import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent    {
  isNavOpen=false
  navItems = [
    { name: 'Accueil', link: '/home' ,fragment:"Accueil" },
    { name: 'Apropos', link: '/home', fragment:"Apropos" },
    { name: ' Nos partenaire ', link: '/home',fragment:"partenaire" },
    { name: 'Nos Projets ', link: '/home' , fragment:"Projets" },
    { name: 'Contact', link: '/home' ,fragment:"Contact"}
  ];

}
