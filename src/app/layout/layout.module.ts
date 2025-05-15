import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PrimengModule } from '../feature/modules/primeng/primeng.module';
import { MegaMenuModule } from 'primeng/megamenu';

const components = [
  NavbarComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    ...components,
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule,
    MegaMenuModule
  ],
  exports: [
    ...components
  ]
})
export class LayoutModule { }
