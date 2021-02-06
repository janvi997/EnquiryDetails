import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [ {path:'',component:DetailsComponent},
{path:'listing',component:ListingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
