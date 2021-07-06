import { Component, Input } from '@angular/core';
import {CowsService, ICowResponse} from '../../../services/cows.service';
import {Cow} from '../../../services/cow.model';

@Component({
  selector: 'app-table',
  template: `<app-row-head></app-row-head>
             <div>
               <button (click)="addRow()">add</button>
               <app-row [cow]="cow" *ngFor="let cow of cows"></app-row>
             </div>`,
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() cows: Array<ICowResponse>;
  constructor(private cowsService: CowsService) { }

  addRow(): void {
    const cow = new Cow();
    this.cowsService.addCow(cow);
  }
}
