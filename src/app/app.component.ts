import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { InformacionAcademicaComponent } from './components/informacion-academica/informacion-academica.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DatosPersonalesComponent, HeaderComponent, FooterComponent, InformacionAcademicaComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}

  isDatosPersonalesActive(): boolean {
    return this.router.isActive('/datos-personales', true);
  }

  isInformacionAcademicaActive(): boolean {
    return this.router.isActive('/informacion-academica', true);
  }

  isInformacionLaboralActive(): boolean {
    return this.router.isActive('/informacion-laboral', true);
  }
}
