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
import { HeroComponent } from './components/hero/hero.component';
import { CountDowanTimeComponent } from './components/count-dowan-time/count-dowan-time.component';
import { LastMatchResultComponent } from './components/last-match-result/last-match-result.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import { VideoCarouselComponent } from './components/video-carousel/video-carousel.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { StrategicPartnershipsComponent } from './components/strategic-partnerships/strategic-partnerships.component';
import { ReformPartnerComponent } from './components/reform-partner/reform-partner.component';
import { CanonComponent } from './components/canon/canon.component';
import { EdimoStylePerformanceComponent } from './components/edimo-style-performance/edimo-style-performance.component';
import { TalentmapComponent } from './components/talentmap/talentmap.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    HeroComponent,
    CountDowanTimeComponent,
    LastMatchResultComponent,
    NewsCardComponent,
    NextMatchComponent,
    LeagueTableComponent,
    VideoCarouselComponent,
    BlogPostComponent,
    WhoWeAreComponent,
    StrategicPartnershipsComponent,
    ReformPartnerComponent,
    CanonComponent,
    EdimoStylePerformanceComponent,
    TalentmapComponent,
    ContactFormComponent
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
