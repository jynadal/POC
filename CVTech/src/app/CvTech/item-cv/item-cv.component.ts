import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../../Model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {
  @Input() personne: Personne;
  constructor() { }

  ngOnInit(): void {
  }
}
