import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Validators, FormGroup, FormControl } from '@angular/forms'; //??
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent {
  showPanel: boolean = false;
  user: User =
    {
      name: "",
      surname: "",
      sex: "",
      dni: 0,
      isVoted: false
    };

  constructor(private http: HttpClient, private router: Router) { }

  saveUser() {
    console.log("submiting...");
    console.log(JSON.stringify(this.user));
    let _url = `api/users/?dni=${this.user.dni}`;

    this.http.get(_url).subscribe(
      (res) => {
        console.log("respuesta de api");
        console.log(JSON.stringify(res));
        let userResponse = res as User;

        if (userResponse.isVoted) {
          this.showPanel = true;
        }
        else {
          this.http.post('api/users', this.user).subscribe(res => {
            const id = res['_id'];
            if (id) {
              //navegar a Candidates
              this.router.navigate(['/candidates', id]);

            }
          });

        }
      });


  }
  logger() {
    console.log(JSON.stringify(this.user));
  }
}
class User {
  name: string;
  surname: string;
  dni: number;
  sex: string;
  isVoted: boolean;

}