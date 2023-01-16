import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from "@angular/router";
import {StringHelper} from "../../helpers/string-helper";
import {filter, map, Observable} from "rxjs";
import {BuildCvService} from "./services/build-cv.service";
import { BuildCvStep } from 'src/app/models/build-cv.model';

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

  constructor(
          private route: ActivatedRoute,
          private router: Router,
          private buildCvService: BuildCvService
          ) {}

  ngOnInit(): void {

    this.buildCvService.getSteps()
      .pipe(map((x: BuildCvStep) => x.name))
      .subscribe((x) => {
        this.names.push(x)
      })

    console.log(this.names)

    this.route.url.subscribe(value => {
      console.log(value[0].path)
    })
  }

  gotoNext(): void{

  }

  gotoBack(): void{

  }
}
