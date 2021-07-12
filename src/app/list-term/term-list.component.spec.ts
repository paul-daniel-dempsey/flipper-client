import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Term_ListComponent } from './term-list.component';

describe('Term_ListComponent', () => {
  let component: Term_ListComponent;
  let fixture: ComponentFixture<Term_ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Term_ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Term_ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
