// import { NgClass } from '@angular/common';
import { Component, signal, computed } from '@angular/core';

interface Characters {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
  styleUrls: ['./dragonball-page.component.css'],
  imports: [
    // NgClass
  ],
})
export class DragonballPageComponent {
  characters = signal<Characters[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 4, name: 'Yamcha', power: 500 },
    { id: 3, name: 'Pikoro', power: 5500 },
  ]);

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   };
  // });
}
