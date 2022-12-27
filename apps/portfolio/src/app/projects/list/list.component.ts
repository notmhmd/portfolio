import {
  Component,
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
  currentProjectElement?: HTMLElement;
  private calloutRef?: ComponentRef<DetailComponent>;
  @ViewChild(PopupHostDirective)
  private popupHost: PopupHostDirective | undefined;
  projects: Project[] = [];

  @ViewChild('projectList', { static: false }) projectsList?: ElementRef;
  constructor() {
    console.log('projects list constructed ...');
  }

  ngOnInit(): void {
    console.log('projects list inited ...');
    this.projects = [
      {
        id: '1',
        name: 'Fresh Mobile Application',
        coverImage:
          'https://play-lh.googleusercontent.com/aqClDPVbJjJ8QohrkJZce392s10oUHgesMs0lV7Hq3kTWqv4lfhtFPe-1_7cvtZskhQ=w240-h480-rw',
        description:
          'Fresh is a sales service of vegetables and fruits - and other products - carefully selected at the central market prices with home delivery at a nominal price developed using ionic 3 framework',
        link: 'https://play.google.com/store/apps/details?id=com.omegateam.fresh',
      },
      {
        id: '2',
        name: 'Movie Recomendation',
        coverImage:
          'https://png2.cleanpng.com/sh/dba421f7b1e5cf1c4f07e537931cc637/L0KzQYq3V8MxN5dqiJH0aYP2gLBuTgBpd6V0fARqcHjsc37tifxuNZ50jttuLXPkfbb5gb1kcZ9qhdM2d3Xlg7r7hb1idpUyhdHraXzoPbL3kPxqa5J5gdH3LXTohrbzjCBubZ95ReVucobsc7a0VfQ0bpQASqc5ZXToRIq1WckzPmo8TaI6NUa3RIe4U8Q6OGc1UZD5bne=/kisspng-photographic-film-movie-camera-cinema-website-and-mobile-application-development-service-5d3fc9250ede49.9926975015644613490609.png',
        description:
          'a movie recomendation service built using python django that implements cosine similarity algoritm',
        link: 'https://github.com/notmhmd/DjangoMovieRecommendation',
      },
      {
        id: '3',
        name: 'ABC University',
        coverImage: 'https://cdn-icons-png.flaticon.com/512/508/508970.png',
        description:
          'ABC University is fully integrated social network platform build for university students that have many features that helps communcation between student and help building communities around them built using python django',
        link: 'https://github.com/notmhmd/ABC',
      },
      {
        id: '4',
        name: 'Tblya',
        coverImage: 'https://dashboard.tblya.com/assets/logo.svg',
        description:
          'tblya is a e-store builder platform built for sudanese market to help mini stores advance on the e-commerce eco-system',
        link: 'https://dashboard.tblya.com/#/home',
      },
    ];
  }

  onProjectMouseEnter(event: Event, project: Project) {
    this.currentProjectElement = event.target as HTMLElement;
    const currentPosition = this.offset(event.target);
    this.showCallout(project, currentPosition);
  }
  @HostListener('body:click', ['$event'])
  @HostListener('mouseover', ['$event'])
  onProjectMouseOver(event: MouseEvent) {
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
      hoverComponent = (<HTMLElement>hoverComponent).parentNode;
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
