import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PresentationComponent} from "./pages/presentation/presentation.component";
import {CommunicationComponent} from "./pages/communication/communication.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {ManagerComponent} from "./pages/manager/manager.component";
import {PipesComponent} from "./pages/pipes/pipes.component";
import {FormulairesComponent} from "./pages/formulaires/formulaires.component";
import {FormulairesReactiveComponent} from "./pages/formulaires-reactive/formulaires-reactive.component";
import {ObservableComponent} from "./pages/observable/observable.component";
import {HttpComponent} from "./pages/http/http.component";

const routes: Routes = [
  {path: 'accueil', component: PresentationComponent},
  {path: 'communication', component: CommunicationComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'form', component: FormulairesComponent},
  {path: 'reactive-form', component: FormulairesReactiveComponent},
  {path: 'observables', component: ObservableComponent},
  {path: 'http', component: HttpComponent},
  {path: 'acceuil', redirectTo: 'accueil'},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
