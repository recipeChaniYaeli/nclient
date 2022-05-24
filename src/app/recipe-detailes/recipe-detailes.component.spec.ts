import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailesComponent } from './recipe-detailes.component';

describe('RecipeDetailesComponent', () => {
  let component: RecipeDetailesComponent;
  let fixture: ComponentFixture<RecipeDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
