import { Component, Input, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon: PokemonData;

  constructor(private pokemonService: PokemonService) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites: {
        other: {
          dream_world: {
            front_default: ''
          }
        }
      },
      types: []
    };
  }

  ngOnInit() {
    this.getPokemon('bulbasaur')
  }

  getPokemon(searchName: string){
    this.pokemonService.getPokemon(searchName).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            types: res.types,
            sprites: res.sprites
          }
        },
        error: (err) => console.log('Not Found')
      }
    )
  }

}
