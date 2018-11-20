import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core';
import { RoutingModule } from './routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RoutingModule, CoreModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
