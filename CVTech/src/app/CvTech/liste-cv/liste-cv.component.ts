import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../../Model/Personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {
  @Input() personnes: Personne[];
  constructor() { }

  ngOnInit(): void {
  }

}
