import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteJokeComponent } from './favourite-joke.component';

describe('FavouriteJokeComponent', () => {
  let component: FavouriteJokeComponent;
  let fixture: ComponentFixture<FavouriteJokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteJokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
