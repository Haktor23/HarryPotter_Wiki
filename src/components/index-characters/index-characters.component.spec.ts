import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCharactersComponent } from './index-characters.component';

describe('IndexCharactersComponent', () => {
  let component: IndexCharactersComponent;
  let fixture: ComponentFixture<IndexCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexCharactersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
