import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { ListComponent } from './projects/list/list.component';
import { DetailComponent } from './projects/detail/detail.component';
import { PopupHostDirective } from './directives/host.directive';
import { ExperincesComponent } from './experinces/experinces.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    PopupHostDirective,
    ExperincesComponent,
  ],
  imports: [BrowserModule, HttpClientModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ListComponent, DetailComponent, PopupHostDirective],
})
export class AppModule {}
