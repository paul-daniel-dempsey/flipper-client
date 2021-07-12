import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent_Swimmers } from './list-swimmers.component';

describe('ListComponent_Swimmers', () => {
  let component: ListComponent_Swimmers;
  let fixture: ComponentFixture<ListComponent_Swimmers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent_Swimmers ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent_Swimmers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
