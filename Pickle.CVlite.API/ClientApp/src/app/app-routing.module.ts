import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CreateCvComponent} from "./components/create-cv/create-cv.component";
import {PersonalInfoComponent} from "./components/personal-info/personal-info.component";
import {AddressComponent} from "./components/address/address.component";
import {ErrorComponent} from "./components/error/error.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
