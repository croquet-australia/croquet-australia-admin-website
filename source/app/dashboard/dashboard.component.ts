import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'ca-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})

export class DashboardComponent {
    constructor(public router: Router) {
    }
}
