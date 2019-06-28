import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit {
asia = [
'Afghanistan',
'Armenia',
'Azerbaijan',
'Bahrain',
'Bangladesh',
'Bhutan',
'Brunei',
'Cambodia',
'China',
'Cyprus',
'Georgia',
'India',
'Indonesia',
'Iran',
'Iraq',
'Israel',
'Japan',
'Jordan',
'Kazakhstan',
'Kuwait',
'Kyrgyzstan',
'Laos',
'Lebanon',
'Malaysia',
'Maldives',
'Mongolia',
'Myanmar', 
'Nepal',

'Vietnam',
'Yemen'
]
  constructor() { }

  ngOnInit() {
  }

}
