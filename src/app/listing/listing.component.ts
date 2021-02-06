import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { EnquiryServiceService } from '../enquiry-service.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  listing:{name:string,email:string,phone:string,message:string}[]=[];
  
  constructor(private enquiry:EnquiryServiceService) {
    this.listing=enquiry.getenquires();
   }

  ngOnInit(): void {
  }

}
