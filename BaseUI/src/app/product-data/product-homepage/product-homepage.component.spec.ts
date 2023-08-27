import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHomepageComponent } from './product-homepage.component';

describe('ProductHomepageComponent', () => {
  let component: ProductHomepageComponent;
  let fixture: ComponentFixture<ProductHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductHomepageComponent]
    });
    fixture = TestBed.createComponent(ProductHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});