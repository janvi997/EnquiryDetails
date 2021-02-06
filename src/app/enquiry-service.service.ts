import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquiryServiceService {
  his: { name: string ,email:string,phone:string ,message:string}[] = []
  add = (name: string,email:string,phone:string,message:string) => {
    this.his.push({ name,email,phone,message})
    return 1;
  }
  getenquires = () => {
    return this.his;
  }

  constructor() { }
}
