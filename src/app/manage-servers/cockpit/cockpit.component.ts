import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('contentInput', {static: true})
  serverContentInput: ElementRef;
  @Output()
  serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output()
  blueprintCreated = new EventEmitter<{name: string, content: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({name: nameInput.value,
      content: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({name: nameInput.value,
      content: this.serverContentInput.nativeElement.value});
  }

}
