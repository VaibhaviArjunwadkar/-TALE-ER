import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { 

    this.el.nativeElement.style.color = 'yellow';

  }

  // @HostListener('click') onMouseClick() {
  //   this.el.nativeElement.style.backgroundColor = 'yellow';
  // }

  // @HostListener('mouseenter') onMouseEnter() {
   
  // }

  // @HostListener('mouseleave') onMouseLeave() {
    
  // }

}
