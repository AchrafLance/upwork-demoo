import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-court-deposits',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './court-deposits.component.html',
  styleUrl: './court-deposits.component.css',
})
export class CourtDepositsComponent {}
