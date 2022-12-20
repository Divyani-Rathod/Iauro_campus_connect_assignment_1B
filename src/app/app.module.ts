import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { StudListComponent } from './student/stud-list/stud-list.component';
import { StudDetailsComponent } from './student/stud-details/stud-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudListComponent,
    StudDetailsComponent
  ],
  imports: [
    BrowserModule,
    StudentModule
  ],
  providers: [],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
