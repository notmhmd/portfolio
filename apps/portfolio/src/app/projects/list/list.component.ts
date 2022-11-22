import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PopupHostDirective } from '../../directives/host.directive';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'portfolio-generator-project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  shown = false;
  skillInf = 'Some additional information';
  currentSkillElement: any;
  private calloutRef?: ComponentRef<DetailComponent>;
  @ViewChild(PopupHostDirective)
  private popupHost: PopupHostDirective | undefined;

  constructor() {
    console.log('projects list constructed ...');
  }

  ngOnInit(): void {
    console.log('projects list inited ...');
  }

  // popup methods
  /**
   * DYNAMIC POPUP METHODS
   */
  onSkillMouseEnter(event: any, skill: any) {
    this.currentSkillElement = event.target;
    const currentPosition = this.offset(event.target);
    this.showCallout(skill, currentPosition);
  }

  @HostListener('mouseover', ['$event'])
  onSkillMouseOver(event: any) {
    let hoverComponent = event.target;
    let inside = false;
    do {
      if (this.calloutRef) {
        if (
          hoverComponent === this.calloutRef.location.nativeElement ||
          hoverComponent === this.currentSkillElement
        ) {
          inside = true;
        }
      }
      hoverComponent = hoverComponent.parentNode;
    } while (hoverComponent);
    if (inside) {
      console.log('inside');
    } else {
      console.log('outside');
      this.hideCallout();
    }
  }

  private createCallout(data: any): ComponentRef<DetailComponent> | undefined {
    const viewContainer = this.popupHost?.viewContainerRef;
    viewContainer?.clear();
    const calloutComponentRef = viewContainer?.createComponent(DetailComponent);
    if (calloutComponentRef) calloutComponentRef.instance.project = data;
    return calloutComponentRef;
  }

  showCallout(skill: any, currentPosition: { top: any; left: any }) {
    this.calloutRef = this.createCallout(skill);
    if (this.calloutRef) {
      this.calloutRef.instance.styleLeft = currentPosition.left + 'px';
      this.calloutRef.instance.styleTop = currentPosition.top + 27 + 'px';
    }
  }
  hideCallout() {
    if (this.calloutRef) {
      this.calloutRef.destroy();
      this.calloutRef = undefined;
    }
  }
  // calculate position relative to document for proper popup displaying
  private offset(el: { getBoundingClientRect: () => any }) {
    const rect = el.getBoundingClientRect();
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
}
