import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtDepositsComponent } from './court-deposits.component';

describe('CourtDepositsComponent', () => {
  let component: CourtDepositsComponent;
  let fixture: ComponentFixture<CourtDepositsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourtDepositsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
