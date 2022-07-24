
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  courseForm !: FormGroup
  actionBtn: string = "save"
  constructor(private formBuilder: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      courseName: ["", Validators.required],
      courseProf: ["", Validators.required],
      courseDay: ["", Validators.required]
    });

    if (this.editData) {
      this.actionBtn = "update"
      this.courseForm.controls["courseName"].setValue(this.editData.courseName);
      this.courseForm.controls["courseProf"].setValue(this.editData.courseProf);

      this.courseForm.controls["courseDay"].setValue(this.editData.courseDay);

    }

  }
  addCourse() {
    if (!this.editData) {
      if (this.courseForm.valid) {
        this.api.postCourse(this.courseForm.value)
          .subscribe({
            next: (res) => {
              alert("course added successfully");
              this.courseForm.reset();
              this.dialogRef.close("save");
            },
            error: () => {
              alert("error")
            }
          })
      } 
      }
      else {
        this.updateCourse()
    }

  }
  updateCourse() {
    this.api.putCourse(this.courseForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("course updated successfully");
          this.courseForm.reset();
          this.dialogRef.close("update");
        },
        error: () => {
          alert("error")
        }
      })
  }
}

