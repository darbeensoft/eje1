import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from '../../services/formulario.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-registro-emprendedor',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent],
  templateUrl: './registro-emprendedor.component.html',
  styleUrl: './registro-emprendedor.component.css'
})
export class RegistroEmprendedorComponent {
  formPersonal: FormGroup;
  showAlert: boolean = false;

  constructor(private router: Router,private formularioService: FormularioService) {
    this.formPersonal = this.formularioService.crearFormularioEmprendedor();
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
