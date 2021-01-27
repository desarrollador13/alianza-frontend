import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ListarClientesService } from '../../services/listar-clientes.service';
import { Store } from '@ngrx/store';
import { ACTIVO, INACTIVO } from '../../estadoApp';

@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styleUrls: ['./formulario-clientes.component.css']
})
export class FormularioClientesComponent implements OnInit {

	form:FormGroup
	mesa:string=''
	errorFecha:boolean = false
	submit:boolean = false
  constructor(private formBuilder: FormBuilder,
    private listarClientesService: ListarClientesService,
    private store: Store<any>
    ) {
  	this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono : ['', Validators.required],
      email: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  get fl() {
    return this.form.controls;
  }

  validarFormulario(event) {
  	if (this.form.invalid) {
  		console.log(this.form)
  		this.submit = true;
  		if(this.form.value.fechaFin <= this.form.value.fechaInicio){
  			this.errorFecha = true
  			this.mesa= 'La fecha fin debe ser mayor que fecha inicio.'
  			return;
  		}
      let nombreApellido = this.form.value.nombre.split(" ") 
      if(nombreApellido.length < 2) {
        this.errorFecha = true
        this.mesa= 'Ingresa el apellido por favor.'
      }
      return;
  	}else{

      if(this.form.value.fechaFin <= this.form.value.fechaInicio){
        this.errorFecha = true
        this.mesa= 'La fecha fin debe ser mayor que fecha inicio.'
        return;
      }
      let nombreApellido = this.form.value.nombre.split(" ") 
      console.log(nombreApellido,'nombreApellido'+ nombreApellido.length)
      if(nombreApellido.length < 2) {
        this.errorFecha = true
        this.mesa= 'Falta por Ingresar el apellido por favor.'
        return;
      }
  		this.submit = false;
  		this.errorFecha = false;
      this.mesa = '';
      let positio = this.form.value.nombre.split(" ")
      let compuesto = ''
      if( positio.length == 3){
        compuesto  = positio[1]
      }
      if( positio.length == 2){
        compuesto  = positio[1]
      }
      if( positio.length == 4){
        compuesto  = positio[2]
      }
      let llaveCompartida = this.form.value.nombre.charAt(0) + compuesto
      let JSONForm = {
        nombre :this.form.value.nombre,
        email :this.form.value.email,
        telefono :this.form.value.telefono,
        fechaInicio: this.form.value.fechaInicio,
        fechaFin: this.form.value.fechaFin,
        llaveCompartida : llaveCompartida
      }
      console.log('JSONForm',JSONForm)
  		console.log(this.form.value, llaveCompartida)
      this.listarClientesService.registrarCliente('clientes',JSONForm).subscribe((data:any) => {
        this.store.dispatch({ type: ACTIVO });
        this.form.reset();
        console.log(data);
      });

    }
  }
}
