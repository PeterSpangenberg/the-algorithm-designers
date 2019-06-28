import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcticaComponent } from './arctica.component';

describe('ArcticaComponent', () => {
  let component: ArcticaComponent;
  let fixture: ComponentFixture<ArcticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
