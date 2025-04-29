import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-count-dowan-time',
  templateUrl: './count-dowan-time.component.html',
  styleUrl: './count-dowan-time.component.scss'
})
export class CountDowanTimeComponent {
  weeks: number = 440;
  days: number = 6;
  hours: number = 8;
  minutes: number = 42;
  seconds: number = 10;
  
  private timerSubscription: Subscription | undefined;

  ngOnInit(): void {
    // In a real app, we would calculate the countdown based on an event date
    // For this example, we're just showing static values with only seconds decrementing
    this.timerSubscription = interval(1000).subscribe(() => {
      this.updateCountdown();
    });
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private updateCountdown(): void {
    // This is simplified just to show the timer working
    // In a real app, we would calculate all values properly
    if (this.seconds > 0) {
      this.seconds--;
    } else {
      this.seconds = 59;
      if (this.minutes > 0) {
        this.minutes--;
      } else {
        this.minutes = 59;
        if (this.hours > 0) {
          this.hours--;
        } else {
          this.hours = 23;
          if (this.days > 0) {
            this.days--;
          } else {
            this.days = 6;
            if (this.weeks > 0) {
              this.weeks--;
            }
          }
        }
      }
    }
  }
}
