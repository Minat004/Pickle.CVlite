import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { BuildCvService } from '../../services/build-cv.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private buildCvService: BuildCvService
    ) {}

  ngOnInit(): void {
    this.route.url.subscribe(value => {
      this.buildCvService.currentStep = this.buildCvService.getStepByName(value[0].path)
    })

    console.log(this.buildCvService.isFirstStep)
    console.log(this.buildCvService.canBack)
  }
}
