import { especieModel } from './../../shared/models/especie.model';
import { petModel } from '../../shared/pet.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pet-cadastro',
  templateUrl: './pet-cadastro.component.html',
  styleUrls: ['./pet-cadastro.component.css']
})
export class PetCadastroComponent implements OnInit {

  title: string = 'Cadastro pet'
  petModel: petModel = new petModel();
  especies!: especieModel[];

  constructor(private requisicao: HttpClient){ }

  ngOnInit(): void {
    this.petModel.name = '';
    this.petModel.especie = '';
    this.petModel.raca = '';
    this.requisicao.get<especieModel[]>('https://localhost:7150/Especie').subscribe(result => {
      console.log('result:', result)
      this.especies = result;

    })

  }

  salvar(): void{

  }

}
