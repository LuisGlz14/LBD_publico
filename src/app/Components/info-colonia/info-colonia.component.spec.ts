import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoColoniaComponent } from './info-colonia.component';

describe('InfoColoniaComponent', () => {
  let component: InfoColoniaComponent;
  let fixture: ComponentFixture<InfoColoniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoColoniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoColoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
