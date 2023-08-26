import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamberlainComponent } from './chamberlain.component';

describe('ChamberlainComponent', () => {
  let component: ChamberlainComponent;
  let fixture: ComponentFixture<ChamberlainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChamberlainComponent]
    });
    fixture = TestBed.createComponent(ChamberlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
