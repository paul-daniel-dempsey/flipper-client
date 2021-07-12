import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassslotComponent } from './list-classslot.component';

describe('ListClassslotComponent', () => {
  let component: ListClassslotComponent;
  let fixture: ComponentFixture<ListClassslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClassslotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClassslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
