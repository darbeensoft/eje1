import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InformacionAcademicaComponent } from './components/informacion-academica/informacion-academica.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, InformacionAcademicaComponent, RouterModule],
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
rutaEspecifica(): boolean {
  return !this.router.url.includes('/datos-emprendedor');
}


}
