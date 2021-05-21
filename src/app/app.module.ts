import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { CandidateComponent } from './candidate/candidate.component';
import { VoteComponent } from './vote/vote.component';
import { StartComponent } from './start/start.component';
import { RankingComponent } from './ranking/ranking.component';




@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    VoteComponent,
    UserComponent,
    StartComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
