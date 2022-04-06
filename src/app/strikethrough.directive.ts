import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'//the brackets make it an attribute directive
})
//logic to  be applied on elements withe selector
export class StrikethroughDirective {

  constructor( private elem:ElementRef){}
  @HostListener("click") onClick(){ //action
    this.textDeco("line-through")
  }
  @HostListener("dblclick") onDoubleClick(){
    this.textDeco("None")
  }
    private textDeco(action:string) { //function to take in action and perform textdecoration

    this.elem.nativeElement.style.textDecoration = action
  }

}
//element ref is to inject reference to host dom element where we use the directive

