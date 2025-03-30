import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../core/header/header.component';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink, HeaderComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {}
