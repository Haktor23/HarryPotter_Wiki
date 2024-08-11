import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCharactersComponent } from './staff-characters.component';

describe('StaffCharactersComponent', () => {
  let component: StaffCharactersComponent;
  let fixture: ComponentFixture<StaffCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffCharactersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
