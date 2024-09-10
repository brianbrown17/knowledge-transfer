import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router'; // Import the Router module

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MarkdownModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {} // Inject the Router module

  goToPost() {
    // Navigate to the '/post' route
    this.router.navigate(['/post']);
  }

}
