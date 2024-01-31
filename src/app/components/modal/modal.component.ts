import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';



@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
@Input() titulo: string | undefined;
constructor(private router: Router, private viewportScroller: ViewportScroller) {}
volver(){
  
  this.router.navigate(['./home']);
  this.viewportScroller.scrollToPosition([0, 0]);
}
}
