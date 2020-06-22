import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  numbers = [1, 2, 3, 4, 5];
  show = false;
  value = 11;

  constructor() { }

  ngOnInit(): void {
  }

}
