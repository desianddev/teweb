import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/users/dashboard/dashboard.component';
import { TournamentsComponent } from 'src/app/users/tournaments/tournaments.component';



export const UserLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tournaments', component: TournamentsComponent }
    // { path: 'events', component: EventsComponent },
    // { path: 'event-create', component: EventCreateComponent},
    // { path: 'seasons', component: SeasonsComponent },
    // { path: 'season-create', component: SeasonCreateComponent},
    // { path: 'teams', component: TeamsComponent },
    // { path: 'team-create', component: TeamCreateComponent },
    // { path: 'profile', component: ProfileComponent},
    // { path: 'manage-staff', component: ManageStaffComponent},
    // { path: 'pools', component: PoolsComponent}

];
