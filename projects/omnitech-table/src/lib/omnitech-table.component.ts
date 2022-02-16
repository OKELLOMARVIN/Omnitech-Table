import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ommni',
  template: `
    <p>
      omnitech-table works!
    </p>

    <ngx-datatable
      class="bootstrap selection-cell"
      [columnMode]="'force'"
      [headerHeight]="50"
      [footerHeight]="50"
      [rowHeight]="'auto'"
      [rows]="rows"
      [externalPaging]="true"
      [externalSorting]="true"
    >
      <!--<ngx-datatable-column
        [width]="30"
        prop="id"
      >
        <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
          <input type="checkbox" [value]="value" (change)="onSelected($event)">
        </ng-template>
      </ngx-datatable-column>-->
      <!--<ngx-datatable-column name="Action" sortable="false">
        <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
          <button
            (click)="seeDetails(row);"
            class="btn btn-default"
            style="padding: 1px 6px;">
            <i class="fa fa-pencil-alt"></i>
          </button>
          <button (click)="deleteGroup(row)" class="btn btn-danger" style="padding: 1px 6px;">
            <i class="fa fa-trash"></i>
          </button>
        </ng-template>

      </ngx-datatable-column>-->
    </ngx-datatable>
  `,
  styles: [
  ]
})
export class OmnitechTableComponent implements OnInit {
  selectedData=[];
  checkedRow: any;
  rows= [
    {
      "name":"okello",
      "age":25

  },{
      "name":"Marvin",
      "age":35
    },{
      "name":"Kevin",
      "age":45
    }];

  constructor() { }

  ngOnInit(): void {
  }
  /*onSelected(event) {
    if (event.target.checked) {
      this.checkedRow = event.target.value;
      this.selectedData.push(this.checkedRow)
    } else { /!*if it is not checked*!/
      const x = this.selectedData.indexOf(this.checkedRow);
      this.selectedData.splice(x, 1);
    }
  }*/

}
