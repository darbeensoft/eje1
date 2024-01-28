import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from '../../services/formulario.service';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-informacion-academica',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent],
  templateUrl: './informacion-academica.component.html',
  styleUrl: './informacion-academica.component.css'
})
export class InformacionAcademicaComponent {

  checkboxesSeleccionados: number = 0;

  onCheckboxChange(checked: boolean) {
    if (checked) {
      this.checkboxesSeleccionados++;
    } else {
      this.checkboxesSeleccionados--;
    }
  }

  formPersonal: FormGroup;
  showAlert: boolean = false;

  constructor(private router: Router,private formularioService: FormularioService) {
    this.formPersonal = this.formularioService.crearFormularioInformacionAcademica();
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
