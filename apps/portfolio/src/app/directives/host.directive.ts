import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[portfolioGeneratorHost]',
})
export class PopupHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
