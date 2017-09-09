import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpuselComponent } from './carpusel.component';

describe('CarpuselComponent', () => {
  let component: CarpuselComponent;
  let fixture: ComponentFixture<CarpuselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpuselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpuselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
