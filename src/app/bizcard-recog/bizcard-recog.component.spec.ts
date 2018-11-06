import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizcardRecogComponent } from './bizcard-recog.component';

describe('BizcardRecogComponent', () => {
  let component: BizcardRecogComponent;
  let fixture: ComponentFixture<BizcardRecogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizcardRecogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizcardRecogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
