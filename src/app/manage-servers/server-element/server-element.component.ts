import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
//  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement')
  element: {
    type: string,
    name: string,
    content: string
  };
  @Input()
  name: string;
  @ViewChild('heading')
  heading: ElementRef;
  @ContentChild('contentParagraph')
  paragraph: ElementRef;

  constructor() {
    console.log('[ServerElement] constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('[ServerElement] ngOnChanges');
  }

  ngOnInit(): void {
    console.log('[ServerElement] ngOnInit');
    console.log(this.heading.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('[ServerElement] ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('[ServerElement] ngAfterContentInit');
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('[ServerElement] ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('[ServerElement] ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('[ServerElement] ngAfterViewInit');
    console.log(this.heading.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log('[ServerElement] ngOnDestroy');
  }

}
