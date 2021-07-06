import { Component, OnInit } from '@angular/core';
import {CowsService} from '../services/cows.service';

@Component({
  selector: 'app-root',
  template: `<app-table [cows]="cowsService.cowList"></app-table>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private cowsService: CowsService) {}

  ngOnInit(): void {
    this.cowsService.getAllCows();
  }

}
