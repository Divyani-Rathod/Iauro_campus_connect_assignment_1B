import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudListComponent } from './stud-list/stud-list.component';
import { StudDetailsComponent } from './stud-details/stud-details.component';
import { StudDataServiceService } from './stud-data.service.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    StudDataServiceService
  ]
})
export class StudentModule { }
