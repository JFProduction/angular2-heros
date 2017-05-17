import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

// renders the output
@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ],
})
export class HeroesComponent implements OnInit {
  // injecting the HeroService into our HeroesComponent
  constructor(
    private heroService: HeroService,
    private router: Router,
  ) {}

  heroes: Hero[]; // initiallizing heroes array
  selectedHero: Hero;
  // on HeroesComponent init do these things
  ngOnInit(): void {
    this.getHeroes();
  }
  // setting local heroes array to hero service's heroes array
  getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  // createing the onSelect method
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // navigate to details page
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  addHero(name: string): void {
    name = name.trim();
    if (!name) return;
    this.heroService.createHero(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  deleteHero(hero: Hero): void {
    this.heroService
      .deleteHero(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(
          h => h != hero
        );
        if (this.selectedHero === hero)
          this.selectedHero = null;
      })
  }
}
