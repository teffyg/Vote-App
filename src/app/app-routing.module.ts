import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CandidateComponent } from './candidate/candidate.component';
import { StartComponent } from './start/start.component'
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  
  {
    path: 'users',
    component: UserComponent,
    data: { title: "Voter registration"}
  },
  {
    path: 'candidates/:id',
    component: CandidateComponent,
    data: { title: "Candidates List"}
  },
  {
    path: 'start',
    component: StartComponent,
    data: { title: "Start"}
  },
  {
    path:'', redirectTo:'/start', 
    pathMatch: 'full'
  },
  {
    path: 'ranking',
    component: RankingComponent,
    data: { title: "Ranking"}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,

  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
