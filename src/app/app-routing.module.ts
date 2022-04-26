import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PresentationComponent} from "./pages/presentation/presentation.component";
import {CommunicationComponent} from "./pages/communication/communication.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'accueil', component: PresentationComponent},
  {path: 'communication', component: CommunicationComponent},
  {path: 'acceuil', redirectTo: 'accueil'},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
