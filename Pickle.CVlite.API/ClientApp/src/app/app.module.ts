import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { BuildCvComponent } from './modules/build-cv/build-cv.component';
import { BuildCvModule } from './modules/build-cv/build-cv.module';
import { ErrorComponent } from './components/error/error.component';
import { BuildCvService } from "./modules/build-cv/services/build-cv.service";
import { HttpClientModule } from "@angular/common/http";
import { BuilderComponent } from './components/builder/builder.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BuildCvComponent,
    ErrorComponent,
    BuilderComponent,
  ],
  imports: [
    BrowserModule,
    BuildCvModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BuildCvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
