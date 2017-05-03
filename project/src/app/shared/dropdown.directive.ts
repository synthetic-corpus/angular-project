import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {
  //state = 'collapsed';
  constructor(private element: ElementRef, renderer: Renderer2){
    // Element refers to the html element this is attached to.
    // ElementRef is a class.
  }
  status = 'collapsed';

  ngOnInit(){
    ///
    //this.element. What do I put here to access the element's class?
  }
  @HostListener('click') enterClick(eventData: Event){
    if (this.status === 'collapsed'){
      console.log('Enter Click');
      this.status = 'opened';
    }else{
      console.log('Exit Click');
      this.status = 'collapsed';
    }
  }

}
