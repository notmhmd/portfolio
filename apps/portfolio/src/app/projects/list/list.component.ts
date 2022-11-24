import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Project } from '@portfolio-generator/api-interfaces';
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
  currentProjectElement?: HTMLElement;
  private calloutRef?: ComponentRef<DetailComponent>;
  @ViewChild(PopupHostDirective)
  private popupHost: PopupHostDirective | undefined;
  projects: Project[] = [];
  visible = 4;

  @ViewChild('projectList', { static: false }) projectsList?: ElementRef;
  constructor() {
    console.log('projects list constructed ...');
  }

  ngOnInit(): void {
    console.log('projects list inited ...');
    this.projects = [
      {
        id: '1',
        name: 'test-project 1',
        coverImage: 'https://placeimg.com/250/180/arch',
        description: '',
        link: '',
      },
      {
        id: '2',
        name: 'test-project 2',
        coverImage: 'https://placeimg.com/250/180/arch',
        description: '',
        link: '',
      },
      {
        id: '3',
        name: 'test-project 3',
        coverImage: 'https://placeimg.com/250/180/arch',
        description: '',
        link: '',
      },
      {
        id: '4',
        name: 'test-project 4',
        coverImage: 'https://placeimg.com/250/180/arch',
        description: '',
        link: '',
      },
      {
        id: '5',
        name: 'test-project 5',
        coverImage: 'https://placeimg.com/250/180/arch',
        description: '',
        link: '',
      },
      {
        id: '6',
        name: 'test-project 6',
        coverImage: 'https://placeimg.com/250/180/arch',
        description: '',
        link: '',
      },
      {
        id: '7',
        name: 'test-project 7',
        coverImage: 'https://placeimg.com/250/180/arch',
        description: '',
        link: '',
      },
      {
        id: '8',
        name: 'test-project 8',
        coverImage: 'https://placeimg.com/250/180/arch',
        description: '',
        link: '',
      },
      {
        id: '9',
        name: 'test-project 9',
        coverImage: 'https://placeimg.com/250/180/arch',
        description: '',
        link: '',
      },
    ];
  }

  onProjectMouseEnter(event: Event, project: Project) {
    this.currentProjectElement = event.target as HTMLElement;
    const currentPosition = this.offset(event.target);
    this.showCallout(project, currentPosition);
  }

  @HostListener('mouseover', ['$event'])
  onProjectMouseOver(event: any) {
    let hoverComponent = event.target;
    let inside = false;
    do {
      if (this.calloutRef) {
        if (
          hoverComponent === this.calloutRef.location.nativeElement ||
          hoverComponent === this.currentProjectElement
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

  private createCallout(
    project: Project
  ): ComponentRef<DetailComponent> | undefined {
    const viewContainer = this.popupHost?.viewContainerRef;
    viewContainer?.clear();
    const calloutComponentRef = viewContainer?.createComponent(DetailComponent);
    if (calloutComponentRef) calloutComponentRef.instance.project = project;
    return calloutComponentRef;
  }

  showCallout(project: Project, currentPosition: { top: any; left: any }) {
    this.calloutRef = this.createCallout(project);
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
  private offset(el: EventTarget | null) {
    const rect = (el as HTMLElement).getBoundingClientRect();
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
}
