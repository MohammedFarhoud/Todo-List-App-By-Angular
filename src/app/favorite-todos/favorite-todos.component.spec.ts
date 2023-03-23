import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTodosComponent } from './favorite-todos.component';

describe('FavoriteTodosComponent', () => {
  let component: FavoriteTodosComponent;
  let fixture: ComponentFixture<FavoriteTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
