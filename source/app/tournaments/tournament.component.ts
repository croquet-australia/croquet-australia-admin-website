import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';
import { Tournament, TournamentsService } from './tournaments.service';

@Component({
    selector: 'my-tournament',
    templateUrl: 'app/tournaments/tournament.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class TournamentComponent implements OnInit {
    @Input() tournament: Tournament;

    constructor(private _tournamentsService: TournamentsService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        if (!this.tournament) {
            let id = +this._routeParams.get('id');
            this._tournamentsService.getTournament(id).then(tournament => this.tournament = tournament);
        }
    }
}
