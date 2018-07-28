import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../shared/rental.model'

@Injectable()
export class RentalService{

private rentals: Rental[] = [{
    id: "1",
    title: "Luxury City Apartment",
    city: "Cambridge",
    street: "Rainbow Street",
    category: "Apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 1,
    description: "Luxury apartment in the center of Cambridge",
    dailyRate: 120,
    shared: false,
    createdOn: "22/07/2018"
  },
  {
    id: "2",
    title: "Luxury City Apartment",
    city: "Edinburgh",
    street: "Rob Roy Street",
    category: "Apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 1,
    description: "Luxury apartment in the center of Edinburgh",
    dailyRate: 180,
    shared: false,
    createdOn: "22/07/2018"
  },
  {
    id: "3",
    title: "Luxury City Apartment",
    city: "London",
    street: "Oxford Street",
    category: "Apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 1,
    description: "Luxury apartment in the center of London",
    dailyRate: 320,
    shared: false,
    createdOn: "12/05/2018"
  },
  {
    id: "4",
    title: "Luxury City Accommodation",
    city: "Durham",
    street: "Claypath Road",
    category: "Room",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 1,
    description: "Luxury room in the center of Durham",
    dailyRate: 70,
    shared: false,
    createdOn: "02/03/2018"
  }];

    public getRentals(): Observable<Rental[]> {

        return new Observable<Rental[]>((observer) => {        
          observer.next(this.rentals);
          observer.error("Error loading rental data")
        });                  
    }

    public getRenatalById(rentalId): Observable<Rental> { 
   
      return new Observable<Rental>((observer) => {       
        const foundRental = this.rentals.find((rental) => {
          return rental.id == rentalId;
      });       
      observer.next(foundRental);         
    }); 
  }
} 