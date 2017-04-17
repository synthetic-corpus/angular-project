import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingboxComponent } from './shoppingbox.component';

describe('ShoppingboxComponent', () => {
  let component: ShoppingboxComponent;
  let fixture: ComponentFixture<ShoppingboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
