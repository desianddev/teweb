import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserLayoutRoutes } from './user-layout.routing';

//import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DashboardComponent } from 'src/app/users/dashboard/dashboard.component';
import { DynamicScriptLoaderService } from 'src/app/common/services/dynamic-script-load-service';
import { TabsModule } from 'ngx-foundation';
import { TournamentsComponent } from 'src/app/users/tournaments/tournaments.component';
//import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    // LbdModule,
    // InfiniteScrollModule,
    //NgxDaterangepickerMd.forRoot(),
     TabsModule.forRoot(),
   // SlickCarouselModule

  ],
  declarations: [
    DashboardComponent,
    TournamentsComponent,
    // EventsComponent,
    // EventCreateComponent,
    // SeasonCreateComponent,
    // SeasonsComponent,
    // TeamsComponent,
    // TeamCreateComponent,
    // ProfileComponent,
    // ManageStaffComponent,
    // PoolsComponent
  ],
  providers: [
    DynamicScriptLoaderService
  ]
})

export class UserLayoutModule {}
