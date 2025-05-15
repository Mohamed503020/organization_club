import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch: "full"},
  {path : "home", component:HomeComponent},
  {path : "about-us", component:AboutUsComponent},
  {path:"contact-us",component:ContactUsComponent}
];

// background-color: rgba(32, 73, 54, 0.6);
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
