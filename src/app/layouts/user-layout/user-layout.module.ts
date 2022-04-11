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
import { EventsComponent } from 'src/app/users/events/events.component';
import { EventCreateComponent } from 'src/app/users/events/event-create/event-create.component';
import { ProfileComponent } from 'src/app/users/profile/profile.component';
import { SeasonCreateComponent } from 'src/app/users/seasons/season-create/season-create.component';
import { SeasonsComponent } from 'src/app/users/seasons/seasons.component';
import { TeamsComponent } from 'src/app/users/teams/teams.component';
import { TeamCreateComponent } from 'src/app/users/teams/team-create/team-create.component';
import { ManageStaffComponent } from 'src/app/users/tournaments/manage-staff/manage-staff.component';
import { PoolsComponent } from 'src/app/users/tournaments/pools/pools.component';
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
    EventsComponent,
    EventCreateComponent,
    SeasonCreateComponent,
    SeasonsComponent,
    TeamsComponent,
    TeamCreateComponent,
    ProfileComponent,
    ManageStaffComponent,
    PoolsComponent
  ],
  providers: [
    DynamicScriptLoaderService
  ]
})

export class UserLayoutModule {}
