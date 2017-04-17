import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeboxComponent } from './recipebox.component';

describe('RecipeboxComponent', () => {
  let component: RecipeboxComponent;
  let fixture: ComponentFixture<RecipeboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
