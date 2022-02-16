import { NgModule } from '@angular/core';
import { OmnitechTableComponent } from './omnitech-table.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";



@NgModule({
  declarations: [
    OmnitechTableComponent
  ],
  imports: [
    NgxDatatableModule
  ],
  exports: [
    OmnitechTableComponent
  ]
})
export class OmnitechTableModule { }
