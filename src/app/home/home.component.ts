import { Component, OnInit } from '@angular/core';
import { IHousing } from '../housing/housing.model';
import { HousingService } from '../housing/housing.service';
import { housingMock } from '../housing/housing.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
    // this.housingService.findRecents(6).subscribe(res => {
    //   this.housings = res.body.data;
    //   console.log(this.housings);
    //   this.lds = false;
    // }, err => {
    //   console.error(err);
    //   this.lds = false;
    // });
    this.lds = false;
  }

}
