import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { NgParticlesModule } from 'ng-particles';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  declarations: [HeaderComponent, HeroComponent],
  imports: [CommonModule, NgParticlesModule, NgxTypedJsModule],
  exports: [HeaderComponent, HeroComponent],
})
export class LayoutModule {}
