import { Component, OnInit } from '@angular/core';
import { IHousing } from './housing.model';
import { HousingService } from './housing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { housingMock } from './housing.mock';

@Component({
  selector: 'app-housing-details',
  templateUrl: './housing-details.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingDetailsComponent implements OnInit {

  housingId: number;
  housing: IHousing;
  lds: boolean;

  constructor(protected housingSrevice: HousingService, protected route: ActivatedRoute, protected router: Router) { }

  ngOnInit(): void {
    this.lds = true;
    this.housingId = this.route.snapshot.params['id'];
    this.loadHousing();
  }

  loadHousing() {
    this.lds = true;
    this.housing = housingMock[0];
    // this.housingSrevice.findOne(this.housingId).subscribe(res => {
    //   this.housing = res.body.data;
    //   this.lds = false;
    // }, err => {
    //   console.error(err);
    //   this.lds = false;
    // });
    this.lds = false;
  }

}
