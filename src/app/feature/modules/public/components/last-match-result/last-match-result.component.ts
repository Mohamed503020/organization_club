import { Component } from '@angular/core';

@Component({
  selector: 'app-last-match-result',
  templateUrl: './last-match-result.component.html',
  styleUrl: './last-match-result.component.scss'
})
export class LastMatchResultComponent {
  homeGoals: number = 4;
  awayGoals: number = 1;
  
  homeTeam = {
    name: 'LA LEGA',
    status: 'win',
    players: [
      { name: 'Anja Landry', goals: 7 },
      { name: 'Eadie Salinas', goals: 12 },
      { name: 'Ashton Allen', goals: 10 },
      { name: 'Baxter Metcalfe', goals: 5 }
    ]
  };
  
  awayTeam = {
    name: 'JUVENDU',
    status: 'loss',
    players: [
      { name: 'Macauly Green', goals: 3 },
      { name: 'Arham Stark', goals: 8 },
      { name: 'Stephan Murillo', goals: 9 },
      { name: 'Ned Ritter', goals: 5 }
    ]
  };
}
