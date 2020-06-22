import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener, Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input()
  defaultColor: string = 'rgba(154, 255, 0, 0.5)';
  @Input()
  highlightColor: string = 'rgba(226,255,15,0.77)';

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  @HostListener('mouseenter')
  mouseover() {
    this.backgroundColor = this.highlightColor;
    // renderer.setStyle(this.elRef.nativeElement,
    // 'background-color', 'rgba(226,255,15,0.77)');
    this.renderer.setStyle(this.elRef.nativeElement,
      'font-weight', 'bold');
  }

  @HostListener('mouseleave')
  mouseout() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement,
    // 'background-color', 'rgba(154, 255, 0, 0.5)');
    this.renderer.setStyle(this.elRef.nativeElement,
      'font-weight', 'normal');
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement,
      'text-align', 'center');
  }

}
