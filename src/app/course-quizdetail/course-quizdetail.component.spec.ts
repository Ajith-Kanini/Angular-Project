import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseQuizdetailComponent } from './course-quizdetail.component';

describe('CourseQuizdetailComponent', () => {
  let component: CourseQuizdetailComponent;
  let fixture: ComponentFixture<CourseQuizdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseQuizdetailComponent]
    });
    fixture = TestBed.createComponent(CourseQuizdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
