import { Component } from '@angular/core';
import heroes from '../db/heroes.json';
import { CommonModule } from '@angular/common';

function getHeroByFilter(id: string | number){
  return heroes.filter(name => name.id === id)
}

var filterhero = getHeroByFilter("2");
console.log (filterhero)

@Component({
  selector: 'app-wintersoldier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wintersoldier.component.html',
  styleUrl: './wintersoldier.component.css'
})
export class WintersoldierComponent {
  filterhero:{id: string, name: string, type: string, description: string, lore: string, photo: string, link: string }[] = getHeroByFilter("2");
}
