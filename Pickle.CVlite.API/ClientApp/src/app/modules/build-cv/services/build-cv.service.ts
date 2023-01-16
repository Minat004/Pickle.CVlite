import { Injectable } from '@angular/core';
import {Observable, from, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BuildCvStep} from "../../../models/build-cv.model";
import {STEPS} from "../build-cv-steps";

@Injectable({
  providedIn: 'root'
})
export class BuildCvService {

  constructor(private http: HttpClient) { }

  getSteps(): Observable<BuildCvStep>{
    return from(STEPS)
  }

  getStep(name: string): BuildCvStep{
    return {id:0, name:'', title:''}
  }
}
