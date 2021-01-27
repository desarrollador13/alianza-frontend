import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClientesComponent } from './componentes/listar-clientes/listar-clientes.component';
import { FormularioClientesComponent } from './componentes/formulario-clientes/formulario-clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './estadoApp';

@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
    FormularioClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ estado: appReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
