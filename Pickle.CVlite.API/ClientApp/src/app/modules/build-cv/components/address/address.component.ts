import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildCvService } from '../../services/build-cv.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private buildCvService: BuildCvService
    ) {}

  ngOnInit(): void {
    this.route.url.subscribe(value => {
      this.buildCvService.currentStep = this.buildCvService.getStepByName(value[0].path)
    })

    console.log(this.buildCvService.isFirstStep)
  }

}
