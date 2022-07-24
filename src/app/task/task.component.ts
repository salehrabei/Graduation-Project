import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
afuConfig = {
    uploadAPI: {
      url:"https://slack.com/api/files.upload"
    }
};
  constructor() { }

  ngOnInit(): void {
  }

}
