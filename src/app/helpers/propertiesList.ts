import * as moment from 'moment';
import { Property } from '../models/Property';

export const propertiesList: Property[] = [
    {
        propertyId: 1,
        propertyType: 'Townhouse',
        propertyAddress: '4 Mercer St',
        propertyImageUrl: './assets/images/house-6.jpg',
        price: 678.1,
        timeAdded: moment(
            new Date(new Date().setDate(new Date().getDate() - 1 ))
        ).fromNow(),
        numberOfBathrooms: 2,
        numberOfBedrooms: 2,
        squareMeters: 240
    },
    {
        propertyId:2,
        propertyType:'Apartment',
        propertyAddress:'304a Poplar Hight St',
        propertyImageUrl:'./assets/images/house-7.jpg',
        price:540.145,
        timeAdded:moment(
          new Date(new Date().setDate(new Date().getDate()-2))
        ).fromNow(),
        numberOfBathrooms:1,
        numberOfBedrooms:2,
        squareMeters:163,
    },
    {
        propertyId:3,
        propertyType:'House',
        propertyAddress:'807B St Phygyy',
        propertyImageUrl:'./assets/images/house-8.jpg',
        price:420.15,
        timeAdded:moment(
          new Date()
        ).fromNow(),
        numberOfBathrooms:2,
        numberOfBedrooms:2,
        squareMeters:320,
    },
];