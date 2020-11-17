import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaColoniaComponent } from './consulta-colonia.component';

describe('ConsultaColoniaComponent', () => {
  let component: ConsultaColoniaComponent;
  let fixture: ComponentFixture<ConsultaColoniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaColoniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaColoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
