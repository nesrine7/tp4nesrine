import { Component, OnInit, } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-listpersonnes',
  templateUrl: './listpersonnes.component.html',
  styleUrls: ['./listpersonnes.component.css']
})
export class ListpersonnesComponent implements OnInit {
  personnes:Personne[] = [
    {nom:'Ali MBARKI', age:21, isEtudiant:true},
    {nom:'Amira SMIRI', age:32, isEtudiant:false},
    {nom:'Rania MEDDEB', age:19, isEtudiant:true},
    {nom:'Sami TLILI', age:52, isEtudiant:false}
    ]
     

 
  constructor() { }

  ngOnInit(): void {
  }

}
