import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaProductListImgComponent } from './tienda-product-list-img.component';

describe('TiendaProductListImgComponent', () => {
  let component: TiendaProductListImgComponent;
  let fixture: ComponentFixture<TiendaProductListImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaProductListImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaProductListImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
