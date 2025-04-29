import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { CarouselModule } from 'primeng/carousel';
import { MegaMenuModule } from 'primeng/megamenu';
import { DialogModule } from 'primeng/dialog';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
const primengModules =  [
  ButtonModule,
    SkeletonModule,
    ProgressSpinnerModule,
    RippleModule,
    TableModule,
    CarouselModule,
    MegaMenuModule  ,
    DialogModule,
    TieredMenuModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    InputMaskModule,
    ToastModule,
    CheckboxModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule ,
    ...primengModules
  ]
  ,
  exports: [
    ...primengModules
  ]
})
export class PrimengModule { }
