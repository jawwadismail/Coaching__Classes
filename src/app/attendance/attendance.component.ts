import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})

export class AttendanceComponent implements OnInit {

  constructor(private http: HttpClient) { }
  abcd;
  getData() {
      this.http.get('http://localhost:3000/login').subscribe(res => {
        console.log(res);
        this.abcd = res;
        return res;
      });
  }
  ngOnInit() { }


}
