import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSpellsComponent } from './all-spells.component';

describe('AllSpellsComponent', () => {
  let component: AllSpellsComponent;
  let fixture: ComponentFixture<AllSpellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSpellsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
