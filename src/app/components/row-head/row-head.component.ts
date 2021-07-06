import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-head',
  template: `
        <div class="row-head-wrap">
            <div *ngFor="let column of columnList">{{column}}</div>
        </div>
    `,
  styleUrls: ['./row-head.component.css']
})
export class RowHeadComponent implements OnInit {
  columnList: Array<string> = [
    'cowId',
    'alertType',
    'cowEntryStatus',
    'currentGroupName',
    'newGroupName',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
