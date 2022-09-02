import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksTableDialogComponent } from './links-table-dialog.component';

describe('LinksTableDialogComponent', () => {
  let component: LinksTableDialogComponent;
  let fixture: ComponentFixture<LinksTableDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksTableDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksTableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
