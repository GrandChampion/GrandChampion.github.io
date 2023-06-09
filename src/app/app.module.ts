import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {EducationCardComponent} from './education-card/education-card.component';
import { LinkCardComponent } from './link-card/link-card.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { HobbyCardComponent } from './hobby-card/hobby-card.component';
import { AboutmeCardComponent } from './aboutme-card/aboutme-card.component';


@NgModule({
  declarations: [
    AppComponent,
    EducationCardComponent,
    LinkCardComponent,
    HeaderBannerComponent,
    FooterComponent,
    ProjectCardComponent,
    HobbyCardComponent,
    AboutmeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
