import { Component, OnInit } from "@angular/core";
import { StudDataServiceService } from "../stud-data.service.service";

@Component({
  selector: 'app-stud-details',
  templateUrl: './stud-details.component.html',
  styleUrls: ['./stud-details.component.css']
})
export class StudDetailsComponent implements OnInit{
  studDetails:{name:string ; ID:string }[] = [];
  constructor(
    private studData: StudDataServiceService
  ){}
  ngOnInit(): void {
      this.studDetails = this.studData.getStudentList();
      console.log("this.studDetails",this.studDetails);
  }
}
