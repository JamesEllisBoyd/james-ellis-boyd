import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './core/main/main.component';
import { ServicesComponent } from './core/services/services.component';
import { AboutComponent } from './core/about/about.component';
import { HeaderMenuComponent } from './core/header-menu/header-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ServicesComponent,
    AboutComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
