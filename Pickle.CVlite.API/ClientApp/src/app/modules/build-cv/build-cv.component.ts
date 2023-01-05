import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from "@angular/router";
import {UserStep} from "../../models/create-steps";
import {StringHelper} from "../../helpers/string-helper";
import {Observable} from "rxjs";

@Component({
  selector: 'app-build-cv',
  templateUrl: './build-cv.component.html',
  styleUrls: ['./build-cv.component.scss']
})
export class BuildCvComponent implements OnInit{
  steps: string[] = []
  isSelectedTemplate = false
  canBack = false
  name: Observable<string[]>

  constructor(
          private route: ActivatedRoute,
          private router: Router
          ) {}

  ngOnInit(): void {
    const userSteps = Object.values<string>(UserStep);
    userSteps.forEach((step) => {
      this.steps.push(step)
    })

    this.route.url.subscribe(value => {
      console.log(value[0].path)
    })
  }

  goToNext(): void{
    if (this.router.url === '/build-cv'){
      this.isSelectedTemplate = true
      this.canBack = true
      this.router.navigate([this.steps[0]], {relativeTo: this.route}).then()
    }else {
      const urlArray: string[] = StringHelper.splitForArray(this.router.url)
      const i: number = this.steps.indexOf(urlArray[urlArray.length - 1])
      if (i >= this.steps.length - 1) return
      this.router.navigate([this.steps[i + 1]], {relativeTo: this.route}).then()
    }
  }

  goToBack(): void{
    const urlArray: string[] = StringHelper.splitForArray(this.router.url)
    const i: number = this.steps.indexOf(urlArray[urlArray.length - 1])
    if (i === 0) {
      this.isSelectedTemplate = false
      this.canBack = false
      this.router.navigate(['./'], {relativeTo: this.route}).then()
      return
    }
    this.router.navigate([this.steps[i - 1]], {relativeTo: this.route}).then()
  }
}
