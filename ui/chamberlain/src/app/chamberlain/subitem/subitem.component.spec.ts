import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubitemComponent } from './subitem.component';

describe('SubitemComponent', () => {
  let component: SubitemComponent;
  let fixture: ComponentFixture<SubitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubitemComponent]
    });
    fixture = TestBed.createComponent(SubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
