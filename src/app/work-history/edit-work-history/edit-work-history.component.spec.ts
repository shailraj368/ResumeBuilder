import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkHistoryComponent } from './edit-work-history.component';

describe('EditWorkHistoryComponent', () => {
  let component: EditWorkHistoryComponent;
  let fixture: ComponentFixture<EditWorkHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditWorkHistoryComponent]
    });
    fixture = TestBed.createComponent(EditWorkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
