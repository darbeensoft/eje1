import { Routes } from '@angular/router';
import { DatosPersonalesComponent } from '../app/components/datos-personales/datos-personales.component';
import { InformacionAcademicaComponent } from './components/informacion-academica/informacion-academica.component';
import { InformacionLaboralComponent } from './components/informacion-laboral/informacion-laboral.component';

export const routes: Routes = [
    { path: 'datos-personales', component: DatosPersonalesComponent },
    { path: 'informacion-academica', component: InformacionAcademicaComponent },
    { path: 'informacion-laboral', component: InformacionLaboralComponent },
    { path: '', redirectTo: '/datos-personales', pathMatch: 'full' },

];
