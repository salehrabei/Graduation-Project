import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedcoursesComponent } from './completedcourses.component';

describe('CompletedcoursesComponent', () => {
  let component: CompletedcoursesComponent;
  let fixture: ComponentFixture<CompletedcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
