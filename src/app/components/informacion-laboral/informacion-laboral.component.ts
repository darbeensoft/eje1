import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from '../../services/formulario.service';
import { ModalComponent } from '../modal/modal.component';





@Component({
  selector: 'app-informacion-laboral',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent],
  templateUrl: './informacion-laboral.component.html',
  styleUrl: './informacion-laboral.component.css'
})
export class InformacionLaboralComponent {
  formPersonal: FormGroup;
  showAlert: boolean = false;

  constructor(private router: Router,private formularioService: FormularioService) {
    this.formPersonal = this.formularioService.crearFormularioInformacionLaboral();
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
      this.router.navigate(['./datos-emprendedor']);
    } else {
      this.showValidationErrorAlert();
    }
  }
  

  
}
