import { Component, OnInit,Input } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  @Input()  pers: Personne;
  constructor() { }

  ngOnInit(): void {
  }

}
