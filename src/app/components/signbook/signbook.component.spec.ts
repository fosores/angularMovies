import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignbookComponent } from './signbook.component';

describe('SignbookComponent', () => {
  let component: SignbookComponent;
  let fixture: ComponentFixture<SignbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignbookComponent]
    });
    fixture = TestBed.createComponent(SignbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
