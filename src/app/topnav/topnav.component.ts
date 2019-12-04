import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  name:string;
  id:string;
  constructor() { }

  ngOnInit() {
    this.name=localStorage.getItem("fullname");
    this.id=localStorage.getItem("id");
  }

  logout()
  {
               localStorage.setItem("fullname", "");
               localStorage.setItem("id", "");
               window.location.href="http://localhost:4200";
  }
}
