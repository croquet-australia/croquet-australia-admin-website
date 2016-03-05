import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Hero, HeroService } from './hero.service';
import { HeroComponent } from './hero.component';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes/heroes.component.html',
    styleUrls: ['app/heroes/heroes.component.css'],
    directives: [HeroComponent]
})

export class HeroesComponent implements OnInit {
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(private _heroService: HeroService, private _router: Router) { }

    getHeroes() {
        this.selectedHero = undefined;
        this.heroes = [];

        this._heroService.getHeroes().then(heroes => this.heroes = heroes);

        return this.heroes;
    }

    gotoDetail() {
        this._router.navigate(['Hero', { id: this.selectedHero.id }]);
    }

    ngOnInit() {
        this.heroes = this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}
