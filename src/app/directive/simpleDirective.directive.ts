import { OnInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[simpleStyleDirective]'
})
export class SimpleDirective implements OnInit {

    constructor(public elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = "red";
    }
}