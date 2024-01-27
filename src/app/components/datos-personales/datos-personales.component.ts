import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from '../../services/formulario.service';

@Component({
  selector: 'app-datos-personales',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './datos-personales.component.html',
  styleUrl: './datos-personales.component.css'
})
export class DatosPersonalesComponent {
  formPersonal: FormGroup;
  showAlert: boolean = false;

  constructor(private router: Router,private formularioService: FormularioService) {
    this.formPersonal = this.formularioService.crearFormularioDatosPersonales();
  }

  showValidationErrorAlert() {
    this.showAlert = true;
  }

  hideAlert() {
    this.showAlert = false;
  }

  onSubmit() {
    if (this.formularioService.validarFormularioIndividual(this.formPersonal)) {
      this.hideAlert();
      this.router.navigate(['./informacion-academica']);
    } else {
      this.showValidationErrorAlert();
    }
  }
}

