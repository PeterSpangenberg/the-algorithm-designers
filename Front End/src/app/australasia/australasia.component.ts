import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-australasia',
  templateUrl: './australasia.component.html',
  styleUrls: ['./australasia.component.css']
})
export class AustralasiaComponent implements OnInit {
australasia = [
  'Australia',
  'New Genia',
  'New Zealand'

]
  constructor() { }

  ngOnInit() {
  }

}
