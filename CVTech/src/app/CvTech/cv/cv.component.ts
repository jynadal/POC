import { Component, OnInit } from '@angular/core';
import { Personne } from '../../Model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne [];
  selectedPersonne: Personne;
  constructor() { }

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'Smith', 'John', 40, 'jy_rouge.jpg', 179812345,'Web Développer'),
      new Personne(2, 'Begood',  'Elton',30, 'rotating_card_profile3.png', 290812345, 'Web Designer'),
      new Personne(3,  'Sidony', 'Carla', 35, 'rotating_card_profile.png', 185812345, 'Chef de Projet')
    ];
  }
  selectPersonne(personne) {
    this.selectedPersonne = personne;
  }


}
