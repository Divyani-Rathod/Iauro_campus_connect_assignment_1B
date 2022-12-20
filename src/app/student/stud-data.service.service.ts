import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudDataServiceService {

  constructor() { }
  getStudentList(){
    return [
      {name:'DIVYANI RATHOD', ID: '2020BIT045'},
      {name:'OM SHENDRE', ID: '2020BENTC027'},
    ]
  }
}
