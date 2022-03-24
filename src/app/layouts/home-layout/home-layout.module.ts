import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeLayoutRoutes } from './home-layout.routing';

import { IndexComponent } from 'src/app/home/index/index.component';
import { TermsComponent } from 'src/app/home/terms/terms.component';
import { PrivacyComponent } from 'src/app/home/privacy/privacy.component';
import { FeaturesComponent } from 'src/app/home/features/features.component';
import { ContactUsComponent } from 'src/app/home/contactus/contactus.component';
import { AboutUsComponent } from 'src/app/home/aboutus/aboutus.component';
import { SiteMapComponent } from 'src/app/home/sitemap/sitemap.component';
import { FaqComponent } from 'src/app/home/faq/faq.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DynamicScriptLoaderService } from 'src/app/common/services/dynamic-script-load-service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule
  ],
  declarations: [
    IndexComponent,
    TermsComponent,
    PrivacyComponent,
    FeaturesComponent,
    ContactUsComponent,
    AboutUsComponent,
    FaqComponent,
    SiteMapComponent
  ],
  exports: [
  ],
  providers: [
    DynamicScriptLoaderService
  ]
})

export class HomeLayoutModule {}
