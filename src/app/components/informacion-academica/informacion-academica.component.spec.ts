import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionAcademicaComponent } from './informacion-academica.component';

describe('InformacionAcademicaComponent', () => {
  let component: InformacionAcademicaComponent;
  let fixture: ComponentFixture<InformacionAcademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionAcademicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacionAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('debería mostrar una alerta de error de validación', () => {
    component.showValidationErrorAlert();
    expect(component.showAlert).toBe(true);
  });
  it('debería ocultar la alerta', () => {
    component.hideAlert();
    expect(component.showAlert).toBe(false);
  });
});
