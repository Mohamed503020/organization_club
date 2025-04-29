import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PrimengModule } from '../feature/modules/primeng/primeng.module';
import { SideNewsItemComponent } from './components/side-news-item/side-news-item.component';
import { NewsCardComponent } from './components/news-card/news-card.component';


const components = [CarouselComponent,SideNewsItemComponent,NewsCardComponent
  ]


@NgModule({
  declarations: [
 ...components,

  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[...components ]
})
export class SharedModule { }
