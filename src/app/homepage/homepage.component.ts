import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import heroes from '../db/heroes.json';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  heroList:{id: string, name: string, type: string, description: string, lore: string, photo: string, link: string }[] = heroes
}
