import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InformacionAcademicaComponent } from './components/informacion-academica/informacion-academica.component';

import { Router } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InformacionAcademicaComponent, RouterModule, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(private router: Router) {}

 isDatosPersonalesActive(): boolean {
  const currentUrl = this.router.url.split('?')[0];
  return currentUrl === '/datos-personales';
}

isInformacionAcademicaActive(): boolean {
  const currentUrl = this.router.url.split('?')[0];
  return currentUrl === '/informacion-academica';
}

isInformacionLaboralActive(): boolean {
  const currentUrl = this.router.url.split('?')[0];
  return currentUrl === '/informacion-laboral';
}
isRegistroEmprendedorActive(): boolean {
  const currentUrl = this.router.url.split('?')[0];
  return currentUrl === '/datos-emprendedor';
}
isrutaHomeActive(): boolean {
  const currentUrl = this.router.url.split('?')[0];
  return currentUrl === '/home';
}
rutaHome(): boolean{
  return !this.router.url.includes('/home');
}
rutaEspecifica(): boolean {
  return !this.router.url.includes('/datos-emprendedor');
}
noDivisor(): boolean {
  return this.router.url.includes('/datos-personales');
}


}
