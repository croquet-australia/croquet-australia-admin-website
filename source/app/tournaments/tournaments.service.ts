import { Injectable } from 'angular2/core';
import { TOURNAMENTS } from '../mocks/mock-tournaments';

export interface Tournament {
    id: number;
    name: string;
}

@Injectable()
export class TournamentsService {
    getTournaments() {
        return Promise.resolve(TOURNAMENTS);
    }

    getTournament(id: number) {
        return Promise.resolve(TOURNAMENTS).then(
            tournaments => tournaments.filter(t => t.id === id)[0]
        );
    }
}
