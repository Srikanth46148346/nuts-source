import { Component, OnInit } from '@angular/core';
import { DataService } from '../myService/data.service';
import { data } from '../myService/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService ) { }

  ngOnInit(): void {
    console.log('my data from service:', data);
    this.data = data;
  }

}
