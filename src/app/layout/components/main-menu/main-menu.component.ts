import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {
  @Input() isMenuVisible = false;

  menu = [
    {
      title: 'Le Club',
      items: [
        'Histoire du Canon',
        'Palmarès',
        'Organigramme',
        'Infrastructures',
        'Nos légendes',
        'Mot du Président ou Manager Général'
      ]
    },
    {
      title: 'Équipes',
      items: [
        'Équipe première',
        'Équipes jeunes',
        'Équipe féminine',
        'Statistiques par joueur'
      ]
    },
    {
      title: 'Actualités',
      items: ['Articles', 'Interviews', 'Médias (photos & vidéos)']
    },
    {
      title: 'Billetterie',
      items: [
        'Prochains matchs',
        'Réservation et paiement des billets',
        'QR code d’entrée'
      ]
    },
    {
      title: 'Adhésion',
      items: [
        'Espace d’adhésion',
        'Paiement sécurisé',
        'Historique de paiement',
        'Espace personnel'
      ]
    },
    {
      title: 'Boutique',
      items: [
        'Maillots, écharpes, gadgets',
        'Paiement en ligne',
        'Livraison ou retrait en boutique'
      ]
    },
    {
      title: 'Formation',
      items: [
        'Présentation du projet',
        'Recrutement jeunes talents',
        'Nos ambitions',
        'Galerie photos'
      ]
    },
    {
      title: 'Partenaires',
      items: ['Présentation des partenaires', 'Devenir partenaire']
    },
    {
      title: 'Contact',
      items: ['Formulaire de contact', 'Réseaux sociaux', 'Localisation du siège / stade']
    }
  ];

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  closeMenu() {
    this.isMenuVisible = false;
  }
}
