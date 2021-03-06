import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { CommunicationComponent } from './pages/communication/communication.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import {registerLocaleData} from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { RainbowPipe } from './utils/pipes/rainbow.pipe';
import { FormulairesComponent } from './pages/formulaires/formulaires.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormulairesReactiveComponent } from './pages/formulaires-reactive/formulaires-reactive.component';
import { ObservableComponent } from './pages/observable/observable.component';
import { HttpComponent } from './pages/http/http.component';
import {HttpClientModule} from "@angular/common/http";
import { CrudComponent } from './pages/crud/crud.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { SecretComponent } from './pages/secret/secret.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    CommunicationComponent,
    PageNotFoundComponent,
    NavigationComponent,
    UserCardComponent,
    ManagerComponent,
    EmployeeComponent,
    PipesComponent,
    RainbowPipe,
    FormulairesComponent,
    FormulairesReactiveComponent,
    ObservableComponent,
    HttpComponent,
    CrudComponent,
    PostCardComponent,
    PostFormComponent,
    AuthenticationComponent,
    SecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
