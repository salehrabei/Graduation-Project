import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-currentcourses',
  templateUrl: './currentcourses.component.html',
  styleUrls: ['./currentcourses.component.css']
})
export class CurrentcoursesComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

}
