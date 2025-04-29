import { Component, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';
interface Team {
  id: number;
  name: string;
  logo: string;
}

interface MatchData {
  homeTeam: Team;
  awayTeam: Team;
  league: string;
  date: Date;
  venue: string;
}
@Component({
  selector: 'app-next-match',
  templateUrl: './next-match.component.html',
  styleUrl: './next-match.component.scss'
})
export class NextMatchComponent {
  @Input() matchData!: MatchData;

  // Countdown properties
  weeks: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private countdownSubscription: Subscription | null = null;

  constructor() { }

  ngOnInit(): void {
    this.calculateCountdown();
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }

  private startCountdown(): void {
    this.countdownSubscription = interval(1000).subscribe(() => {
      this.calculateCountdown();
    });
  }

  private calculateCountdown(): void {
    const now = new Date().getTime();
    const matchTime = this.matchData.date.getTime();
    const distance = matchTime - now;

    if (distance <= 0) {
      this.weeks = 0;
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;

      if (this.countdownSubscription) {
        this.countdownSubscription.unsubscribe();
      }
      return;
    }

    // Calculate time units
    const millisecondsPerSecond = 1000;
    const millisecondsPerMinute = millisecondsPerSecond * 60;
    const millisecondsPerHour = millisecondsPerMinute * 60;
    const millisecondsPerDay = millisecondsPerHour * 24;
    const millisecondsPerWeek = millisecondsPerDay * 7;

    this.weeks = Math.floor(distance / millisecondsPerWeek);
    const remainingAfterWeeks = distance % millisecondsPerWeek;

    this.days = Math.floor(remainingAfterWeeks / millisecondsPerDay);
    const remainingAfterDays = remainingAfterWeeks % millisecondsPerDay;

    this.hours = Math.floor(remainingAfterDays / millisecondsPerHour);
    const remainingAfterHours = remainingAfterDays % millisecondsPerHour;

    this.minutes = Math.floor(remainingAfterHours / millisecondsPerMinute);
    const remainingAfterMinutes = remainingAfterHours % millisecondsPerMinute;

    this.seconds = Math.floor(remainingAfterMinutes / millisecondsPerSecond);
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  }
}
