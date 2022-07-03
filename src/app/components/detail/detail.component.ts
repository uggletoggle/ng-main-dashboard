import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/Property';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  property!: Property;

  constructor() { }

  ngOnInit(): void {
  }

}
