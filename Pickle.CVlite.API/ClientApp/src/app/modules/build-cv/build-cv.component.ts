import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, map } from "rxjs";
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
  isFirstStep: boolean
  canBack: boolean

  constructor(
          private route: ActivatedRoute,
          private router: Router,
          private buildCvService: BuildCvService
          ) {}

  ngOnInit(): void {
    this.route.url.subscribe((value) => {
      console.log('path:')
      console.log(value)
      this.buildCvService.currentStep = this.buildCvService.getStepByName(value[0].path)
      
      this.isFirstStep = this.buildCvService.isFirstStep
      this.canBack = this.buildCvService.canBack
    })
   
    console.log('current:')
    console.log(this.buildCvService.currentStep)
  }

  gotoNext(): void{
    console.log('current:')
    console.log(this.buildCvService.currentStep)
    this.router.navigate([this.steps[this.buildCvService.currentStep.id + 1].name], { relativeTo: this.route })

    console.log('current:')
    console.log(this.buildCvService.currentStep)
  }

  gotoBack(): void{
    this.router.navigate([this.steps[this.buildCvService.currentStep.id - 1].name], { relativeTo: this.route })
  }
}
