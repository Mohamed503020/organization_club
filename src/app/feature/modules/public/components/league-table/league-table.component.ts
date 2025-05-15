import { Component, Input } from '@angular/core';
interface LeagueStanding {
  position: number;
  team: string;
  wins: number;
  draws: number;
  losses: number;
  points: number;
}

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrl: './league-table.component.scss'
})
export class LeagueTableComponent {
  @Input() standings: LeagueStanding[] = [];
}
