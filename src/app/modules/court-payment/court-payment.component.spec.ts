import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtPaymentComponent } from './court-payment.component';

describe('CourtPaymentComponent', () => {
  let component: CourtPaymentComponent;
  let fixture: ComponentFixture<CourtPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourtPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
