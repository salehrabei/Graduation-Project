import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AfterregComponent } from './afterreg/afterreg.component';
import { CompletedcoursesComponent } from './completedcourses/completedcourses.component';
import { CoursesComponent } from './courses/courses.component';
import { CurrentcoursesComponent } from './currentcourses/currentcourses.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { MyprofileComponent } from './myprofile/myprofile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TaskComponent } from './task/task.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", redirectTo:"home",pathMatch:"full" },
  { path: "home", canActivate:[AuthGuard], component: HomeComponent },
  { path: "about",  canActivate:[AuthGuard],component: AboutComponent },

  { path: "profile", canActivate:[AuthGuard],component: MyprofileComponent },

  { path: "courses", canActivate:[AuthGuard], component: CoursesComponent },

  { path: "schedule", canActivate:[AuthGuard], component: ScheduleComponent },
  { path: "registration",  canActivate:[AuthGuard],component: RegistrationComponent },

  { path: "login", component: LoginComponent },
  { path: "register", component:RegisterComponent },

  { path: "completedcourses", canActivate:[AuthGuard], component:CompletedcoursesComponent },
  

  { path: "currentcourses", canActivate:[AuthGuard], component:CurrentcoursesComponent },
  { path: "afterregistration", canActivate:[AuthGuard], component:AfterregComponent },
  { path: "forgotpassword", component:ForgotpasswordComponent },
  { path: "task",  canActivate:[AuthGuard], component:TaskComponent },
  { path: "pdf", redirectTo:"../assets/gehad tarek 11.pdf" },

  { path: "**", component: NotfoundComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
