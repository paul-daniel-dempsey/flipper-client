import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poolslot_ListComponent } from './poolslot-list.component';

describe('Poolslot_ListComponent', () => {
  let component: Poolslot_ListComponent;
  let fixture: ComponentFixture<Poolslot_ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Poolslot_ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Poolslot_ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
