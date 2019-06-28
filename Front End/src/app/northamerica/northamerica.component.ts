import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-northamerica',
  templateUrl: './northamerica.component.html',
  styleUrls: ['./northamerica.component.css']
})
export class NorthamericaComponent implements OnInit {
  northamerica = ['Antigua and Barbuda','Bahamas','Barbados','Belize','Bermuda',
'Canada','Costa Rica','Cuba','Dominica','Dominican Republic','El Salvador','Grenada',
'Guatemala','Haiti','Honduras','Jamaica','Mexico','Nicaragua','Panama','St. Kitts and Nevis',
'St. Lucia','St. Vincent and The Grenadines','Trinidad and Tobago','United States'
  ]

  constructor() { }

  ngOnInit() {
  }

}
