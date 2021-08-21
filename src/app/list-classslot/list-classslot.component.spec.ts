import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent_Classslot } from './list-classslot.component';

describe('ListComponent_Classslot', () => {
  let component: ListComponent_Classslot;
  let fixture: ComponentFixture<ListComponent_Classslot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent_Classslot ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent_Classslot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
