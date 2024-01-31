import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from '../../services/formulario.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-datos-personales',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent],
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
  archivoSeleccionado: string = 'Sin archivos seleccionados';
  nombreArchivo(event: any) {
    const archivoEntrada = event.target;

    if (archivoEntrada.files.length > 0) {
      this.archivoSeleccionado = archivoEntrada.files[0].name;
    } else {
      this.archivoSeleccionado = 'Sin archivos seleccionados';
    }
  }
  cambiarColor(event: any) {
    // Accede al elemento que disparó el evento
    const inputElement = event.target;

    // Cambia el color del fondo al perder el foco    
    inputElement.style.borderColor = 'red';
  }

 
}

