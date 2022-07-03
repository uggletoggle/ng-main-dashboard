import { Component, OnInit } from '@angular/core';
import { propertiesList } from 'src/app/helpers/propertiesList';
import { Property } from 'src/app/models/Property';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  propertiesList : Property[] = propertiesList;

  constructor() { }

  ngOnInit(): void {
  }

}
