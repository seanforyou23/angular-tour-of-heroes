import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component';

import { SideNavComponent } from './side-nav/side-nav.component';
import { EmptyStateModule } from 'patternfly-ng/empty-state';
import { NavigationModule } from 'patternfly-ng/navigation';
// import { EmptyStateModule, NavigationModule } from 'patternfly-ng';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NavigationModule,
    EmptyStateModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [
    AppComponent,
    HeroSearchComponent,
    routedComponents,
    SideNavComponent,
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
