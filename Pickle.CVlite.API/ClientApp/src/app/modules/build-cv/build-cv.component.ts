import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserStep} from "../../models/create-steps";
import {StringHelper} from "../../helpers/string-helper";

@Component({
  selector: 'app-build-cv',
  templateUrl: './build-cv.component.html',
  styleUrls: ['./build-cv.component.scss']
})
export class BuildCvComponent implements OnInit{
  steps: string[] = []

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const userSteps = Object.values<string>(UserStep);
    userSteps.forEach((step) => {
      this.steps.push(step)
    })
  }

  goToNext(): void{
    if (this.router.url === '/create-cv'){
      this.router.navigate([this.steps[0]], {relativeTo: this.route}).then()
    }else {
      let urlArray: string[] = StringHelper.splitForArray(this.router.url)
      const i: number = this.steps.indexOf(urlArray[urlArray.length - 1])
      if (i >= this.steps.length - 1) return
      this.router.navigate([this.steps[i + 1]], {relativeTo: this.route}).then()
    }
  }

  goToBack(): void{

  }
}
