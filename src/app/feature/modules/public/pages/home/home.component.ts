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
  matchData = {
    homeTeam: {
      id: 1,
      name: 'Football League',
      logo: '/images/players/logo-removebg.png'
    },
    awayTeam: {
      id: 2,
      name: 'Soccer',
      logo:  '/images/header/cameron-logo.png'
    },
    league: 'World Cup League',
    date: new Date('2020-12-20T09:30:00Z'),
    venue: 'New Euro Arena'
  };

  // League table data
  leagueStandings = [
    { position: 1, team: 'Football League', wins: 22, draws: 3, losses: 2, points: 140 },
    { position: 2, team: 'Soccer', wins: 22, draws: 3, losses: 2, points: 140 },
    { position: 3, team: 'Juvendo', wins: 22, draws: 3, losses: 2, points: 140 },
    { position: 4, team: 'French Football League', wins: 22, draws: 3, losses: 2, points: 140 },
    { position: 5, team: 'Legia Abante', wins: 22, draws: 3, losses: 2, points: 140 },
    { position: 6, team: 'Giliwice League', wins: 22, draws: 3, losses: 2, points: 140 },
    { position: 7, team: 'Cornika', wins: 22, draws: 3, losses: 2, points: 140 },
    { position: 8, team: 'Gravity Smash', wins: 22, draws: 3, losses: 2, points: 140 }]
}
