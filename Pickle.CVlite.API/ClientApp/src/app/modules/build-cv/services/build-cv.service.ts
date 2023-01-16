import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BuildCvService {

  constructor(private http: HttpClient) { }

  getAllSteps(): Observable<any>{
    return this.http.get('../../../../assets/build-cv-steps.json')
  }
}
