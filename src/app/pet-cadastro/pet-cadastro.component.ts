import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-cadastro',
  templateUrl: './pet-cadastro.component.html',
  styleUrls: ['./pet-cadastro.component.css']
})
export class PetCadastroComponent implements OnInit {

title: string = 'Cadastro pet'

  constructor() { }

  ngOnInit(): void {
  }

}
