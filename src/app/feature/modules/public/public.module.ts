import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PrimengModule } from '../primeng/primeng.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PrimengModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
