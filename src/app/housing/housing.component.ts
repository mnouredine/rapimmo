import { Component, OnInit } from '@angular/core';
import { HousingService } from './housing.service';
import { IHousing } from './housing.model';
import { housingMock } from './housing.mock';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingComponent implements OnInit {

  housings: IHousing[];
  lds: boolean;

  constructor(protected housingService: HousingService) { }

  ngOnInit(): void {
    this.lds = true;
    this.loadAll();
  }

  loadAll() {
    this.lds = true;
    this.housings = housingMock;
    // this.housingService.query().subscribe(res => {
    //   this.housings = res.body.data;
    //   this.lds = false;
    // }, err => {
    //   console.error(err);
    //   this.lds = false;
    // });
    this.lds = false;
  }

}
