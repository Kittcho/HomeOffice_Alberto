import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarLibroComponent } from './buscar-libro.component';

describe('BuscarLibroComponent', () => {
  let component: BuscarLibroComponent;
  let fixture: ComponentFixture<BuscarLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
