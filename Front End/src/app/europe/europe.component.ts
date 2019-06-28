import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css']
})
export class EuropeComponent implements OnInit {
europe = [
'Albania',
'Andorra',
'Armenia',
'Austria',
'Azerbaijan',
'Belarus',
'Belgium',
'Bosnia and Herzegovina',
'Bulgaria',
'Croatia',
'Cyprus',
'Czechia',
'Denmark',
'Estonia',
'Finland',
'France',
'Georgia',
'Germany',
'Greece',
'Hungary',
'Iceland',
'Ireland',
'Italy',
'Kazakhstan',
'Kosovo',
'Latvia',
'Liechtenstein',
'Lithuania',
'Luxembourg',
'Malta',
'Moldova',
'Monaco',
'Montenegro',
'Netherlands',
'North Macedonia', 
'Norway',
'Poland',
'Portugal',
'Romania',
'Russia',
'San Marino',
'Serbia',
'Slovakia',
'Slovenia',
'Spain',
'Sweden',
'Switzerland',
'Turkey',
'Ukraine',
'United Kingdom', 
'Vatican City'
]
  constructor() { }

  ngOnInit() {
  }

}
