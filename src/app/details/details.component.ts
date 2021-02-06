import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnquiryServiceService } from '../enquiry-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details = this.fb.group({
    name: ["", [Validators.required,Validators.pattern("^[a-zA-Z ]{2,30}$")]],
    email:["",[Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    phone:["",[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    message: ["", [Validators.required]]

  })

  constructor(private router: Router, private fb: FormBuilder, private enquiry: EnquiryServiceService) {

  }

  //onuserNameChange(event: any) {
  //this.username = event.target.value
  //}
  //onpassChange(event: any) {
  //this.password = event.target.value
  //}
  ngOnInit(): void {
  }
  detail() {
    if (this. details.valid == false) {
      alert("invalid form")
    }
    else {
      const name = this.details.value.name
      const email = this.details.value.email
      const phone = this.details.value.phone
      const message = this.details.value.message
      const userinfo = this.enquiry.add(name, email, phone, message);
      if (userinfo == 1) {
        alert("submit the details successfully");

        this.router.navigateByUrl("/listing");
      }

    }
  }


}
