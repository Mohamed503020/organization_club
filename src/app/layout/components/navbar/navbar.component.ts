import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent    {

 topNavLinks = [
  {
    name : "Le Club",
    route: "/"
  },
  {
    name: "Équipes" ,
    route:"/"
  },
  {
    name : "Billetterie",
    route: "/"
  },
  {
    name: "Adhésion" ,
    route:"/"
  },
  {
    name : "Boutique",
    route: "/"
  },
  {
    name: "Contact" ,
    route:"/contact-us"
  },
 ]
 display = false;
 categories = [
  {
    title: 'LE CLUB',
    color: '#d6001c', // Red underline
    items: [
      { label: 'Histoire du Canon', link: '/histoire-du-canon' },
      { label: 'Palmarès', link: '/palmares' },
      { label: 'Organigramme', link: '/organigramme' },
      { label: 'Infrastructures', link: '/infrastructures' },
      { label: 'Nos légendes', link: '/nos-legendes' },
      { label: 'Mot du Président', link: '/mot-du-president' }
    ]
  },
  {
    title: 'ÉQUIPES',
    color: '#067861', // Green underline
    items: [
      { label: 'Équipe première', link: '/equipe-premiere' },
      { label: 'Équipes jeunes', link: '/equipes-jeunes' },
      { label: 'Équipe féminine', link: '/equipe-feminine' },
      { label: 'Statistiques par joueur', link: '/statistiques-joueur' }
    ]
  },
  {
    title: 'ACTUALITÉS',
    color: '#007bff', // Blue underline
    items: [
      { label: 'Articles', link: '/articles' },
      { label: 'Interviews', link: '/interviews' },
      { label: 'Médias (photos & vidéos)', link: '/medias' }
    ]
  },
  {
    title: 'BILLETTERIE',
    color: '#cf1127', // Dark Red underline
    items: [
      { label: 'Prochains matchs', link: '/prochains-matchs' },
      { label: 'Réservation et paiement des billets', link: '/reservation-billets' },
      { label: 'QR code d’entrée', link: '/qr-code-entree' }
    ]
  },
  {
    title: 'ADHÉSION',
    color: '#9c27b0', // Purple underline
    items: [
      { label: 'Espace d’adhésion', link: '/espace-adhesion' },
      { label: 'Paiement sécurisé', link: '/paiement-securise' },
      { label: 'Historique de paiement', link: '/historique-paiement' },
      { label: 'Espace personnel', link: '/espace-personnel' }
    ]
  },
  {
    title: 'BOUTIQUE',
    color: '#ff9800', // Orange underline
    items: [
      { label: 'Maillots, écharpes, gadgets', link: '/boutique-produits' },
      { label: 'Paiement en ligne', link: '/paiement-en-ligne' },
      { label: 'Livraison ou retrait', link: '/livraison-retrait' }
    ]
  },
  {
    title: 'FORMATION',
    color: '#4caf50', // Green underline
    items: [
      { label: 'Présentation du projet', link: '/presentation-projet' },
      { label: 'Recrutement jeunes talents', link: '/recrutement-jeunes' },
      { label: 'Nos ambitions', link: '/nos-ambitions' },
      { label: 'Galerie photos', link: '/galerie-photos' }
    ]
  },
  {
    title: 'PARTENAIRES',
    color: '#607d8b', // Gray underline
    items: [
      { label: 'Présentation des partenaires', link: '/presentation-partenaires' },
      { label: 'Devenir partenaire', link: '/devenir-partenaire' }
    ]
  }
];

  openMenu() {
    this.display = !this.display;
  }


}
