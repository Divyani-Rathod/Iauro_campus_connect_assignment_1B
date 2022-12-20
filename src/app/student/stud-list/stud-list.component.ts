import { Component,OnInit } from '@angular/core';
import { StudDataServiceService } from '../stud-data.service.service';

@Component({
  selector: 'app-stud-list',
  templateUrl: './stud-list.component.html',
  styleUrls: ['./stud-list.component.css']
})
export class StudListComponent implements OnInit {
  studList:{name:string ; ID:string }[] = [];
  constructor(
    private studData: StudDataServiceService
  ){}

  ngOnInit(): void {
      this.studList = this.studData.getStudentList();
      console.log("this.studList",this.studList);
  }
}
