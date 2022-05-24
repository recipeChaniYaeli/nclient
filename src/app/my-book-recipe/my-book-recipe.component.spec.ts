import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookRecipeComponent } from './my-book-recipe.component';

describe('MyBookRecipeComponent', () => {
  let component: MyBookRecipeComponent;
  let fixture: ComponentFixture<MyBookRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBookRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBookRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
