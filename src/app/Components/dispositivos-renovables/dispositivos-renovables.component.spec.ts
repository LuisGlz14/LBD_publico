import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivosRenovablesComponent } from './dispositivos-renovables.component';

describe('DispositivosRenovablesComponent', () => {
  let component: DispositivosRenovablesComponent;
  let fixture: ComponentFixture<DispositivosRenovablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositivosRenovablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivosRenovablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
