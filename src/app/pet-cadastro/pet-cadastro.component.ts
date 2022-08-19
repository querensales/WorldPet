import { petModel } from './../../shared/pet.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-cadastro',
  templateUrl: './pet-cadastro.component.html',
  styleUrls: ['./pet-cadastro.component.css']
})
export class PetCadastroComponent implements OnInit {

  title: string = 'Cadastro pet'
  petModel: petModel = new petModel();
  especie!: [];

  constructor() { }

  ngOnInit(): void {
    this.petModel.name = '';
    this.petModel.especie = '';
    this.petModel.raca = '';
  }


}
