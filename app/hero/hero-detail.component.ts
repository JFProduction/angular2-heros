import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero'; // importing the hero class
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    // use selector as the tag to reference this information
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
    // so we can bind the hero from AppComponent **LEGACY**
    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHeroById(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}