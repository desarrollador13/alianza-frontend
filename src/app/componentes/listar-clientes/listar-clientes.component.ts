import { Component, OnInit } from '@angular/core';
import { ListarClientesService } from '../../services/listar-clientes.service';
import { Store } from '@ngrx/store';
import { ACTIVO, INACTIVO } from '../../estadoApp';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
	form:FormGroup
	dato:any;
	datos :Array<any> = [];
  constructor(private listarClientesService: ListarClientesService,
  	private store: Store<any>,
  	private formBuilder: FormBuilder,
  	) {
  	  this.store.subscribe(data => {
	      console.log(data.estado.cargar,'datasubscribe')
	      if (data.estado.activar) this.obtenerDatos()
	      if (data.estado.activar) this.pasos()
	      
	    })
	    this.form = this.formBuilder.group({
	      parametro: ['']
	    });
      
  }

  ngOnInit() {
  	this.obtenerDatos()
  }

  pasos() {
  	this.store.dispatch({ type: INACTIVO });
  }
  get fl() {
  	console.log('')
    return this.form.controls;
  }

  obtenerDatos() {
  	this.listarClientesService.obtenerCliente('clientes').subscribe((data:any) => {
  		console.log(data);
  		this.dato = data;
    });
  }

  validarFormulario(event) {
  	if (this.form.invalid) {
  		return;
  	}else{
  		if(this.form.value.parametro==''){
  			this.obtenerDatos();
  			return;
  		}
  		let idBusqueda:any;
  		for(let datos of this.dato) {
  			if(this.form.value.parametro == datos.llaveCompartida){
  				idBusqueda = datos.id
  			}
  		}
  		if(idBusqueda ==undefined || idBusqueda == 'undefined')return
  	this.listarClientesService.obtenerClienteId(`clientes/${idBusqueda}`).subscribe((data:any) => {
  		console.log(data);
  		//this.form.reset();
  		this.dato = [data];
    });
  	}
  }

}
