import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTodosComponent } from './detail-todos.component';

describe('DetailTodosComponent', () => {
  let component: DetailTodosComponent;
  let fixture: ComponentFixture<DetailTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
