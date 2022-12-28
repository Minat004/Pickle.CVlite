import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import {CreateCvComponent} from "./components/create-cv/create-cv.component";
import {PersonalInfoComponent} from "./components/personal-info/personal-info.component";
import {AddressComponent} from "./components/address/address.component";
import { BuildCvComponent } from './modules/build-cv/build-cv.component';
import { BuildCvModule } from './modules/build-cv/build-cv.module';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CreateCvComponent,
    PersonalInfoComponent,
    AddressComponent,
    BuildCvComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    BuildCvModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
