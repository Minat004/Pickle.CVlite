import { Injectable } from '@angular/core';
import { Observable, from, filter } from "rxjs";
import { BuildCvStep } from "../../../models/build-cv.model";
import { STEPS } from "../build-cv-steps";

@Injectable({
  providedIn: 'root'
})
export class BuildCvService {

  constructor() { }

  getSteps(): Observable<BuildCvStep> {
    return from(STEPS)
  }

  getStepByName(name: string): BuildCvStep {
    let result!: BuildCvStep
    
    from(STEPS)
    .pipe(filter((param) => param.name === name))
    .subscribe((value) => result = value)

    return result
  }

  getStepById(id: number): BuildCvStep {
    let result!: BuildCvStep
    
    from(STEPS)
    .pipe(filter((param) => param.id === id))
    .subscribe((value) => result = value)

    return result
  }
}
