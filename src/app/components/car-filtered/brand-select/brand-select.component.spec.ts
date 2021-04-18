import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSelectComponent } from './brand-select.component';

describe('BrandSelectComponent', () => {
  let component: BrandSelectComponent;
  let fixture: ComponentFixture<BrandSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
