import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidates: any;
  selectedUserId: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    console.log(JSON.stringify(this.route.snapshot.paramMap));
    this.selectedUserId = this.route.snapshot.paramMap.get('id');

    this.http.get('api/candidates').subscribe(data => {
      this.candidates = data;
    })
  }
  candidateOnClick(candidate: any) {
    // console.log("click ok")
    let userId = this.selectedUserId;
    let candidateId = candidate._id;
    let voteModel = {
      user_id: userId,
      candidate_id: candidateId
    };
    console.log("Posting " + JSON.stringify(voteModel));
    this.http.post('api/vote', voteModel).subscribe(res => {

      console.log(res);
      //navegar a Ranking
      this.router.navigate(['/ranking']);
    });
}
}
