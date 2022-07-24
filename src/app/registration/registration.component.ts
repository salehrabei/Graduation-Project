import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
// import { LoginComponent } from '../login/login.component';
import { ApiService } from '../services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  displayedColumns: string[] = ['courseName', 'courseProf', 'courseDay', "hours", "action"];
  dataSource!: MatTableDataSource<any>;
  isLimited = new BehaviorSubject(null);;
  access: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCourses();
    console.log(this.isLimited.getValue());


    this.isLimited.subscribe(() => {
      if (this.isLimited.getValue() == null) {
        this.access = false;
      }
      else {
        this.access = true;

      }
    })
  }
  openDialog() {

    if (this.dataSource.filteredData.length < 6) {
    //   let test:any="false";
    //   this.isLimited.next(test);
    //   console.log(this.isLimited.getValue());

    this.dialog.open(DialogComponent, {
      width: "30%"
    }).afterClosed().subscribe(val => {
      if (val === "save") {
        this.getAllCourses();

      }
    })
    }
    else {
      // this.isLimited.next(null);
      // console.log(this.isLimited.getValue());


      // this.router.navigate(["/profile"]);
      alert("sorry dialog")
    }

  }
  getAllCourses() {
    this.api.getCourse()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(this.dataSource);
          if (this.dataSource.filteredData.length <6) {
            let test: any = "false";
            this.isLimited.next(test);
          }
          else {
            this.isLimited.next(null);
            console.log(this.isLimited.getValue());
            

            alert("sorry you already registered all allowed hours")
            // this.router.navigate(["/profile"])

          }


        },
        error: (err) => {
          alert("error")
        }
      })
  }
  editCourse(row: any) {
    this.dialog.open(DialogComponent, {
      width: "30%",
      data: row,
    }).afterClosed().subscribe(val => {
      if (val === "update") {
        this.getAllCourses();

      }
    })
  }
  deleteCourse(row: any) {
    this.api.deleteCourse(row.id)
      .subscribe({
        next: (res) => {
          alert("course deleted")
          this.getAllCourses();
        }, error: () => {
          alert("error")
        }
      })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
