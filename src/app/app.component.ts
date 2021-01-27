import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	formulario:boolean = false;
	buttonText:string = 'Mostrar Formulario';
  title = 'app-vass-alianza';

  constructor() { }

  ngOnInit() {
  }

  mostrarFormulario():void {
  	if(this.buttonText == 'Mostrar Formulario') {
	  	this.formulario = true;
	  	this.buttonText= 'Ocultar Formulario';
	  }else{
	  	this.formulario = false;
	  	this.buttonText= 'Mostrar Formulario';
	  }
  }
}
