import { Directive, ElementRef } from "@angular/core";

@Directive ({
    selector: '[elementhightliter]'
})
export class ElementHightliter {
    constructor(private elem: ElementRef){
        this.elem.nativeElement.style.background = 'pink'
    }
}