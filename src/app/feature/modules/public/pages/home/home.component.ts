import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  carouselData = [
    {
      p: 'POWER KICK TO GET YOUR GOALS...',
      button: 'LEARN MORE',
      img: '/images/players/team.jpeg',
      fgImg: '/images/players/team.jpeg'// path to your image
    },
    {
      p: 'JOIN THE TEAM OF CHAMPIONS',
      button: 'JOIN NOW',
      img: '/images/players/player_2.jpeg',
       fgImg: '/images/players/team.jpeg'
    },
    {
      p: 'POWER KICK TO GET YOUR GOALS...',
      button: 'LEARN MORE',
      img: '/images/players/player_3.jpeg',
      fgImg: '/images/players/team.jpeg'// path to your image
    },
    {
      p: 'JOIN THE TEAM OF CHAMPIONS',
      button: 'JOIN NOW',
      img: '/images/players/player_4.jpeg',
       fgImg: '/images/players/team.jpeg'
    }
  ];
  mainNews = [
    {
      image: '/images/players/player_5.jpeg',
      category: 'Rencontre du',
      date: '23 avril 2025',
      title: 'Le Canon Sportif de Yaoundé : Revivre les moments forts du match '
    },
    {
      image:'/images/players/player_6.jpeg',
      category: 'Rencontre du',
      date: '24 avril 2025',
      title: 'Le Canon Sportif de Yaoundé : un parcours mythique'
    },

  ];

  sideNews = [
    {
      title: 'Dernière ligne droite',
      category: 'CLUB',
      date: 'il y a 13 heures'
    },
    {
      title: 'Le defi est relevé  ',
      category: 'ÉQUIPE PREMIÈRE',
      date: '22 avril 2025'
    },
    {
      title: '1er journée du championnat ',
      category: 'ÉQUIPE PREMIÈRE',
      date: '22 avril 2025'
    },
    {
      title: 'Match amicals ',
      category: 'ÉQUIPE PREMIÈRE',
      date: '22 avril 2025'
    }
  ];
  mostRated = [
    {
      image: '/images/players/player_7.jpeg',
      category: ' Rencontre du',
      date: '23 avril 2025',
      title: 'Canon de Yaoundé : Les faits marquants'
    },
    {
      image:'/images/players/player_8.jpeg',
      category: ' Rencontre du',
      date: '24 avril 2025',
      title: 'Canon de Yaoundé : Les préparation'
    },
    {
      image:'/images/players/player_9.jpeg',
      category: ' Rencontre du',
      date: '24 avril 2025',
      title: 'Canon de Yaoundé : solidarité'
    },
    {
      image:'/images/players/player_10.jpeg',
      category: ' Rencontre du',
      date: '24 avril 2025',
      title: 'Canon de Yaoundé : Nos rencontres '
    }
  ]
}
