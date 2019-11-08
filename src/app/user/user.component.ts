import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http: HttpClient) { }
  abcd;
  getData() {
      this.http.get('http://localhost:3000/user').subscribe(res => {
        console.log(res);
        this.abcd = res;
        return res;
      });
  }

  ngOnInit() {
  }

}



// import { Component, OnInit } from '@angular/core';
// import { DataSource } from '@angular/cdk/table';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 11, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 41, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 61, symbol: 'Li'},
//   {position: 4, name: 'Beryl', weight: 91, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20, symbol: 'Ne'},
// ];


// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent implements OnInit {
//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource = ELEMENT_DATA;
//   constructor() { }

//   ngOnInit() {
//   }

// }
