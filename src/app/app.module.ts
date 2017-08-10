import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {NotFoundComponent} from "./errors/not-found.component";
import {RegistroComponent} from "./usuario/registro/registro.component";
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./principal/principal.component";
import {LoginComponent} from "./usuario/login/login.component";
import {NuevoGrupoComponent} from "./grupo-spam/nuevo/nuevo-grupo.component";
import {UsuarioSpamInput} from "./grupo-spam/input/usuario-spam-input/usuario-spam.input.component";
import {ListaGrupoComponent} from "./grupo-spam/lista/lista-grupo.component";
import {GrupoInputComponent} from "./grupo-spam/input/grupo-spam-input/grupo-spam.input.component";
import {ModificaGrupoComponent} from "./grupo-spam/modificar/modifica-grupo.component";
import {GrupoSpamMensajeInputComponent} from "./grupo-spam/input/grupo-spam-mensaje/grupo-spam-mensaje.input.component";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PrincipalComponent,
    RegistroComponent,
    LoginComponent,
    NuevoGrupoComponent,
    UsuarioSpamInput,
    ListaGrupoComponent,
    GrupoInputComponent,
    ModificaGrupoComponent,
    GrupoSpamMensajeInputComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
