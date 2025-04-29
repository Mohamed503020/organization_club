import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  sponsors: string[] = [
    '/images/snipes.png',
    '/images/qatar.png',
    '/images/all.png',
    '/images/ooredoo.png',
    '/images/visit-rwanda.png',
    '/images/qnb.png',
    '/images/bein.png',
    '/images/ea-sports.png',
    '/images/aspetar.png',
    '/images/parions.png',
    '/images/bitpanda.png',
  ];

  links = [
    {
      title: 'Le Canon Sportif de Yaoundé ',
      items: ['Equipe première', 'Féminines', 'Handball',  'Club', 'Fondation',  'Partenaires'],
    },
    {
      title: 'SERVICES',
      items: ['Mon compte', 'Billetterie', 'Boutique',  'Stadium Tour'],
    },
    {
      title: 'LANGUES',
      items: ['Français', 'English', 'Português', 'Español', 'العربية', 'Bahasa Indonesia'],
    },
    {
      title: 'AIDE',
      items: ['Mentions légales', 'Données personnelles', 'CGV', 'Cookies', "Centre d'aide", 'Carrières'],
    },
  ];

  socialIcons: string[] = [
    'facebook-f',
    'instagram',
    'x-twitter',
    'youtube',
    'snapchat-ghost',
    'tiktok',
    'percent',
    'whatsapp',
    'twitch',
    'discord',
  ];
}
