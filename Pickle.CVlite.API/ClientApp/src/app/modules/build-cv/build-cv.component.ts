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
  steps: BuildCvStep[] = []
  isSelectedTemplate = false
  canBack = false
  names: string[] = []
  currentStep: BuildCvStep

  constructor(
          private route: ActivatedRoute,
          private router: Router,
          private buildCvService: BuildCvService
          ) {}

  ngOnInit(): void {

    this.steps = STEPS

    this.buildCvService.getSteps()
      .pipe(map((x: BuildCvStep) => x.name))
      .subscribe((x) => this.names.push(x))

    console.log(this.names)

    this.route.url.subscribe((value) => {
      console.log(value[0].path)
      this.currentStep = this.buildCvService.getStepByName(value[0].path)
    })

    console.log(this.currentStep)
  }

  gotoNext(): void{
    this.router.navigate([this.steps[this.currentStep.id + 1].name], { relativeTo: this.route })
    if (this.currentStep.name === this.steps[0].name) {
      this.isSelectedTemplate = false
      this.canBack = false
    }
    else {
      this.isSelectedTemplate = true
      this.canBack = true
    }
  }

  gotoBack(): void{

  }
}
