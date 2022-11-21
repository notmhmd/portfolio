import { Component, OnInit } from '@angular/core';
import {
  Container,
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  Engine,
} from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'portfolio-generator-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  id = 'tsparticles';
  particlesOptions = {
    // preset: 'links',

    fpsLimit: 80,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.attract,
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#D0DCD7',
      },
      links: {
        color: '#6B9080',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circles',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  constructor() {
    console.log('hero constructed ..');
  }

  ngOnInit(): void {
    console.log('hero initied ..');
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
}
