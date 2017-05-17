import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // importing forms module
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroesComponent }     from './hero/heroes.component';
import { HeroService }         from './hero/hero.service';
import { DashboardComponent }  from './dashboard.component';
import { AppRoutingModule }    from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,      // enables use of structural directives (*ngIf, *ngFor, etc..)
    AppRoutingModule, // enables use of routing module
    HttpModule,       // enables use of http services
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,  // declaring our HeroDetailComponent
    HeroesComponent,      // declaring our HeroesComponent
    DashboardComponent,   // declaring our DashboardComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
