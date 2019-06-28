import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-southamerica',
  templateUrl: './southamerica.component.html',
  styleUrls: ['./southamerica.component.css']
})
export class SouthamericaComponent implements OnInit {
southamerica = [
'Argentina',
'Bolivia',
'Brazil',
'Chile',
'Colombia',
'Ecuador',
'Guyana',
'Paraguay',
'Peru',
'Suriname',
'Uruguay',
'Venezuela'
]
  constructor() { }

  ngOnInit() {
  }

}
