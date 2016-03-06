import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Tournament, TournamentsService } from './tournaments.service';
import { TournamentComponent } from './tournament.component';

@Component({
    selector: 'my-tournaments',
    templateUrl: 'app/tournaments/tournaments.component.html',
    directives: [TournamentComponent]
})

export class TournamentsComponent implements OnInit {
    public tournaments: Tournament[];
    public selectedTournament: Tournament;

    constructor(private _tournamentsService: TournamentsService, private _router: Router) { }

    getTournaments() {
        this.selectedTournament = undefined;
        this.tournaments = [];

        this._tournamentsService.getTournaments().then(tournaments => this.tournaments = tournaments);

        return this.tournaments;
    }

    gotoDetail() {
        this._router.navigate(['Tournament', { id: this.selectedTournament.id }]);
    }

    ngOnInit() {
        this.tournaments = this.getTournaments();
    }

    onSelect(tournament: Tournament) {
        this.selectedTournament = tournament;
    }
}
