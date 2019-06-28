import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustralasiaComponent } from './australasia.component';

describe('AustralasiaComponent', () => {
  let component: AustralasiaComponent;
  let fixture: ComponentFixture<AustralasiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustralasiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustralasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
