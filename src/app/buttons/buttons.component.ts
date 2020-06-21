import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  showDetails = false;
  buttonClicks = [];
  // increment = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails(){
    // this.increment++;
    this.showDetails = !this.showDetails;
    // this.buttonClicks.push(this.buttonClick(increment));
    this.buttonClicks.push(new Date());
  }

}
