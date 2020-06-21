import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onPlay() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
      if (this.lastNumber % 2 === 0) {
        this.evenNumbers.push(this.lastNumber);
      } else {
        this.oddNumbers.push(this.lastNumber);
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }

}
