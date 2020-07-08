import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingComponent } from './housing.component';
import { RouterModule } from '@angular/router';
import { HousingDetailsComponent } from './housing-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HousingComponent, HousingDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'housing',
        // canActivate: [AuthGuardService],
        component: HousingComponent
      },
      {
        path: 'housing/:id/view',
        // canActivate: [AuthGuardService],
        component: HousingDetailsComponent
      }
    ]),
  ]
})
export class HousingModule { }
