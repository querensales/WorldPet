import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/shared/models/cliente.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {
  title: string = 'Cadastro de cliente'
  cliente: ClienteModel = new ClienteModel();


  constructor() { }

  ngOnInit(): void {
    this.cliente.firstname = '';
    this.cliente.lastname = '';
    this.cliente.email = '';
    this.cliente.cpf = '';
    this.cliente.number = '';
    this.cliente.petname = '';
  }

}
