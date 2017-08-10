import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import {RegistroComponent} from "./usuario/registro/registro.component";
import {NotFoundComponent} from "./errors/not-found.component";
import {PrincipalComponent} from "./principal/principal.component";
import {LoginComponent} from "./usuario/login/login.component";
import {NuevoGrupoComponent} from "./grupo-spam/nuevo/nuevo-grupo.component";
import {ListaGrupoComponent} from "./grupo-spam/lista/lista-grupo.component";
import {ModificaGrupoComponent} from "./grupo-spam/modificar/modifica-grupo.component";

const appRoutes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevo-grupo', component: NuevoGrupoComponent },
  { path: 'modifica-grupo/:id', component: ModificaGrupoComponent },
  { path: 'lista-grupo', component: ListaGrupoComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
