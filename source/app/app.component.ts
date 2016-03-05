// Angular components
import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

// Application components
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './heroes/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Application service
import { HeroService } from './heroes/hero.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService, ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
    { path: '/heroes', name: 'Heroes', component: HeroesComponent },
    { path: '/detail/:id', name: 'Hero', component: HeroComponent }
])

export class AppComponent {
    public title = 'Tour of Heroes';
}
