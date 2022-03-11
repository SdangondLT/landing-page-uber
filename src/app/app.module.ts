import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { CardLeftComponent } from './card-left/card-left.component';
import { CardRightComponent } from './card-right/card-right.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    CardLeftComponent,
    CardRightComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
