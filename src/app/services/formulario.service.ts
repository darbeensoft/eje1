import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl   } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  constructor(private fb: FormBuilder) {}

  // Crear formularios individuales
  crearFormularioDatosPersonales(): FormGroup {
    return this.fb.group({
      file: ['', Validators.required],
      documento: ['', Validators.required],
      fecha: ['', Validators.required],
      nombre: ['', Validators.required],
      genero: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      Tdocumento: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      numeroContacto: ['', Validators.required],
    });
  }

  crearFormularioInformacionAcademica(): FormGroup {
    return this.fb.group({
      fAcademica: ['', Validators.required],
      presentacion: ['', Validators.required],
      estrategia: ['', Validators.required],

    });
  }
 

  crearFormularioInformacionLaboral(): FormGroup {
    return this.fb.group({
      cargo: ['', Validators.required],
      razon: ['', Validators.required],
      nombreEmpresa: ['', Validators.required],
      profesion: ['', Validators.required],
      experiencia: ['', Validators.required],
      especialidad: ['', Validators.required],
    });
  }
  crearFormularioEmprendedor(): FormGroup {
    return this.fb.group({
      codigo: ['', Validators.required],
      razon: ['', Validators.required],
      nombreEmpresa: ['', Validators.required],
      profesion: ['', Validators.required],
      experiencia: ['', Validators.required],
      especialidad: ['', Validators.required],
      nColegio: ['', Validators.required],
      nEstudiantes: ['', Validators.required],
      tcolegio: ['', Validators.required],
      pNatural: ['', Validators.required],
      pJuridica: ['', Validators.required],
      cCOlegio: ['', Validators.required] 
    });
  }

  // Validar formularios individuales
  validarFormularioIndividual(form: FormGroup): boolean {
    if (form.invalid) {
      console.log('Formulario inválido. Campos faltantes:');
      Object.keys(form.value).forEach(control => {
        if (form.get(control)?.invalid) {
          console.log(`Campo ${control} es requerido.`);
        }
      });
      return false;
    }
    return true;
  }

  
}
