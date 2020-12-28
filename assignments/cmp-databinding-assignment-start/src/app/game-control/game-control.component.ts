import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  num: number = 0;

  numbers: number[] = [];

  timer;

  startGame() {
    this.timer = setInterval(() => {
      this.num++;
      this.numbers.push(this.num);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.timer);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
