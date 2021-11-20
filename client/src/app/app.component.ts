import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Implements OnInit (live cycle hooks)
export class AppComponent implements OnInit  {
  title = 'DatingApp';
  users: any; //This typescript stuff

  //Using dependancy injection
  constructor(private http: HttpClient) {}
  ngOnInit() {
   this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:44363/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
}
