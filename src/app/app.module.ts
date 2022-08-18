import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { PetCadastroComponent } from './pet-cadastro/pet-cadastro.component';
import { RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    ClienteCadastroComponent,
    PetCadastroComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
