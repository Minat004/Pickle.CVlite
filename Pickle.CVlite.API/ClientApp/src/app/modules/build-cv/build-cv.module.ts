import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildCvRoutingModule } from './build-cv-routing.module';
import {AddressComponent} from "./components/address/address.component";
import {PersonalInfoComponent} from "./components/personal-info/personal-info.component";


@NgModule({
  declarations: [
    AddressComponent,
    PersonalInfoComponent
  ],
  imports: [
    CommonModule,
    BuildCvRoutingModule
  ]
})
export class BuildCvModule { }
