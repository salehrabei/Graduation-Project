import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CompletedcoursesComponent } from './completedcourses/completedcourses.component';
import { CurrentcoursesComponent } from './currentcourses/currentcourses.component';
import { AfterregComponent } from './afterreg/afterreg.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TaskComponent } from './task/task.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatDialogModule } from '@angular/material/dialog';
// import { FilePickerModule } from  'ngx-awesome-uploader';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { RegisterComponent } from './register/register.component';
// import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MyprofileComponent,
    ScheduleComponent,
    CoursesComponent,
    RegistrationComponent,
    LoginComponent,

    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    CompletedcoursesComponent,
    CurrentcoursesComponent,
    AfterregComponent,
    ForgotpasswordComponent,
    TaskComponent,
    DialogComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatSliderModule, MatSidenavModule, BrowserAnimationsModule, HttpClientModule, MatNativeDateModule, FormsModule, ReactiveFormsModule,
    MatDialogModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule,
    MatPaginatorModule, MatSortModule,AngularFileUploaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
