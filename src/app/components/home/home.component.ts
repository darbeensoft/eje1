import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}
  onSubmit() {    
      this.router.navigate(['./datos-personales']);  
      
}
onSubmit2() {    
  this.router.navigate(['./datos-emprendedor']);  
  
}
}
