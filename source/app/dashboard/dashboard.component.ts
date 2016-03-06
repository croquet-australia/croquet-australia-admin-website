import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Tournament, TournamentsService } from '../tournaments/tournaments.service';

@Component({
    selector: 'ca-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public tournaments: Tournament[] = [];

    constructor(private _tournamentsService: TournamentsService, private _router: Router) { }

    ngOnInit() {
        this._tournamentsService.getTournaments().then(tournaments => this.tournaments = tournaments.slice(1, 5));
    }

    gotoDetail(tournament: Tournament) {
        this._router.navigate(['Tournament', { id: tournament.id }]);
    }
}
