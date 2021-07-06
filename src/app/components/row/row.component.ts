import {Component, Input} from '@angular/core';
import {CowsService, ICowResponse} from '../../../services/cows.service';

@Component({
    selector: 'app-row',
    template: `
        <div class="row-wrap">
            <input [value]="cow.cowId ? cow.cowId : ''" [disabled]="true">
            <input [value]="cow.alertType ? cow.alertType : ''" (keyup)="editCow($event, 'alertType')">
            <input [value]="cow.cowEntryStatus ? cow.cowEntryStatus : ''" (keyup)="editCow($event, 'cowEntryStatus')">
            <input [value]="cow.currentGroupName ? cow.currentGroupName : ''" (keyup)="editCow($event, 'currentGroupName')">
            <input [value]="cow.newGroupName ? cow.newGroupName : ''" (keyup)="editCow($event, 'newGroupName')">
            <button (click)="deleteRow(cow.cowId)"> delete</button>
        </div>
    `,
    styleUrls: ['./row.component.css']
})
export class RowComponent {
    @Input() cow: ICowResponse;

    constructor(private cowsService: CowsService) {}

    deleteRow(id: number): void {
      this.cowsService.deleteCow(id.toString());
    }

    editCow(event: any, key: string): void {
      this.cowsService.ediCow({
          cowId: this.cow.cowId.toString(),
          value: event.target.value,
          key,
      });
    }
}
