// Angular components
import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

// Application components
import { DashboardComponent } from './dashboard/dashboard.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentComponent } from './tournaments/tournament.component';

// Application services
import { TournamentsService } from './tournaments/tournaments.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [TournamentsService, ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
    { path: '/tournaments', name: 'Tournaments', component: TournamentsComponent },
    { path: '/tournaments/:id', name: 'Tournament', component: TournamentComponent }
])

export class AppComponent {
    public title = 'Administration';
}
