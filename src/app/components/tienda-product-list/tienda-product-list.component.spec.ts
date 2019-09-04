import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaProductListComponent } from './tienda-product-list.component';

describe('TiendaProductListComponent', () => {
  let component: TiendaProductListComponent;
  let fixture: ComponentFixture<TiendaProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
