import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  candidatesResults = [];

  constructor(
    private httpClient : HttpClient
  ) { }

  ngOnInit() {
    this.voteRanking();
  }

  voteRanking()
  {
    this.httpClient.get('api/vote/results').subscribe(
      (res:VoteRes[]) =>
      {
        
        console.log(res);
        for(let candidate of res) 
        {
          let data = {
            name: candidate.name,
            surname: candidate.surname,
            img: candidate.img,
            party: candidate.party,
            countVotes: candidate.votes.length,
            percent: 50
          }
          this.candidatesResults.push(data);

       
        }
        var totalVotes = 0;
        for(let candidate of this.candidatesResults)
        {
          totalVotes = totalVotes + candidate.countVotes;

        }
        var percentage = 0;
        for(let candidate of this.candidatesResults)
        {
          percentage = candidate.countVotes / totalVotes *100;
          candidate.percent = percentage;
        }
      }
    );
  }
}
class VoteRes
{
  name: string;
  surname: string;
  party: string;
  img: string;
  votes: string[];

}
