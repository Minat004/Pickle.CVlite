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

  constructor(
          private route: ActivatedRoute,
          public router: Router,
          private buildCvService: BuildCvService
          ) {}

  ngOnInit(): void {
    this.route.url.subscribe((value) => {
      this.buildCvService.currentStep = this.buildCvService.getStepByName(value[0].path)
    })

    this.isFirstStep = this.router.url === `/${this.steps[0].name}`

    console.log(this.isFirstStep)
    console.log(this.buildCvService.currentStep)
    console.log(`/${this.steps[0].name}`)
  }

  gotoNext(): void{
    this.router.navigate([this.steps[this.buildCvService.currentStep.id + 1].name], { relativeTo: this.route })
  }

  gotoBack(): void{
    if (this.buildCvService.currentStep.name === this.steps[1].name){
      this.router.navigate(['./'], {relativeTo: this.route})
      this.buildCvService.currentStep = this.steps[0]
    }
    else {
      this.router.navigate([this.steps[this.buildCvService.currentStep.id - 1].name], { relativeTo: this.route })
    }
  }
}
