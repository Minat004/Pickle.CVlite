import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs";
import { BuildCvService } from "./services/build-cv.service";
import { BuildCvStep } from 'src/app/models/build-cv.model';
import { STEPS } from './build-cv-steps';

@Component({
  selector: 'app-build-cv',
  templateUrl: './build-cv.component.html',
  styleUrls: ['./build-cv.component.scss']
})
export class BuildCvComponent implements OnInit{
  steps: BuildCvStep[] = STEPS
  isSelectedTemplate = false
  canBack = false
  currentStep: BuildCvStep

  constructor(
          private route: ActivatedRoute,
          private router: Router,
          private buildCvService: BuildCvService
          ) {}

  ngOnInit(): void {
    this.route.url.subscribe((value) => {
      console.log('path: ' + value[0].path)
      this.currentStep = this.buildCvService.getStepByName(value[0].path)
    })

    console.log('current:')
    console.log(this.currentStep)
  }

  gotoNext(): void{
    console.log('current:')
    console.log(this.currentStep)
    this.router.navigate([this.steps[this.currentStep.id + 1].name], { relativeTo: this.route })
    this.currentStep = this.steps[this.currentStep.id + 1]
    if (this.currentStep.name === this.steps[0].name) {
      this.isSelectedTemplate = false
      this.canBack = false
    }
    else {
      this.isSelectedTemplate = true
      this.canBack = true
    }
    console.log('current:')
    console.log(this.currentStep)
  }

  gotoBack(): void{
    this.router.navigate([this.steps[this.currentStep.id - 1].name], { relativeTo: this.route })
    this.currentStep = this.steps[this.currentStep.id - 1]
  }
}
