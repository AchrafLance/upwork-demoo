import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../core/header/header.component';

@Component({
  selector: 'app-court-payment',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './court-payment.component.html',
  styleUrl: './court-payment.component.css',
})
export class CourtPaymentComponent {}
