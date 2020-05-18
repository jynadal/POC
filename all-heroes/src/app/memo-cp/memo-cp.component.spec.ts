import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoCPComponent } from './memo-cp.component';

describe('MemoCPComponent', () => {
  let component: MemoCPComponent;
  let fixture: ComponentFixture<MemoCPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoCPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoCPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
