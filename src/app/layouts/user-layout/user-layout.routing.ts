import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/users/dashboard/dashboard.component';
import { EventCreateComponent } from 'src/app/users/events/event-create/event-create.component';
import { EventsComponent } from 'src/app/users/events/events.component';
import { ProfileComponent } from 'src/app/users/profile/profile.component';
import { SeasonCreateComponent } from 'src/app/users/seasons/season-create/season-create.component';
import { SeasonsComponent } from 'src/app/users/seasons/seasons.component';
import { TeamCreateComponent } from 'src/app/users/teams/team-create/team-create.component';
import { TeamsComponent } from 'src/app/users/teams/teams.component';
import { ManageStaffComponent } from 'src/app/users/tournaments/manage-staff/manage-staff.component';
import { PoolsComponent } from 'src/app/users/tournaments/pools/pools.component';
import { TournamentsComponent } from 'src/app/users/tournaments/tournaments.component';



export const UserLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tournaments', component: TournamentsComponent },
    { path: 'events', component: EventsComponent },
    { path: 'event-create', component: EventCreateComponent},
    { path: 'seasons', component: SeasonsComponent },
    { path: 'season-create', component: SeasonCreateComponent},
    { path: 'teams', component: TeamsComponent },
    { path: 'team-create', component: TeamCreateComponent },
    { path: 'profile', component: ProfileComponent},
    { path: 'manage-staff', component: ManageStaffComponent},
    { path: 'pools', component: PoolsComponent}

];
