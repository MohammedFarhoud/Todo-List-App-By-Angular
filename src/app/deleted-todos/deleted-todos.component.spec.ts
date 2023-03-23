import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedTodosComponent } from './deleted-todos.component';

describe('DeletedTodosComponent', () => {
  let component: DeletedTodosComponent;
  let fixture: ComponentFixture<DeletedTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
