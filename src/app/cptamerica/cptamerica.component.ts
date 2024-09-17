import { Component, NgModule } from '@angular/core';

import heroes from '../db/heroes.json';
import { CommonModule } from '@angular/common';
import { NgxSearchFilterModule } from 'ngx-search-filter';

function getHeroByFilter(id: string | number){
  return heroes.filter(name => name.id === id);
}
var filterhero = getHeroByFilter("1");
console.log (filterhero)
@Component({
  selector: 'app-cptamerica',
  standalone: true,
  imports: [CommonModule, NgxSearchFilterModule],
  templateUrl: './cptamerica.component.html',
  styleUrl: './cptamerica.component.css'
})



export class CptamericaComponent {
    filterhero:{id: string, name: string, type: string, description: string, lore: string, photo: string, link: string }[] = getHeroByFilter("1");
}
