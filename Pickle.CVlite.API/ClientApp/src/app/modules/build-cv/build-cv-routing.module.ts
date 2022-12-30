import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuildCvComponent} from "./build-cv.component";
import {PersonalInfoComponent} from "./components/personal-info/personal-info.component";
import {AddressComponent} from "./components/address/address.component";

const routes: Routes = [
  {
    path: 'build-cv',
    component: BuildCvComponent,
    children: [
      {
        path: 'personal-info',
        component: PersonalInfoComponent,
      },
      {
        path: 'address',
        component: AddressComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildCvRoutingModule { }
