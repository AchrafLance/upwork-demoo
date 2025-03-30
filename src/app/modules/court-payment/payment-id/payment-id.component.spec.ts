import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentIdComponent } from './payment-id.component';

describe('PaymentIdComponent', () => {
  let component: PaymentIdComponent;
  let fixture: ComponentFixture<PaymentIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
