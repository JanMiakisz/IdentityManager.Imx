import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterFeatureComponent } from './newsletter-feature/newsletter-feature.component';



@NgModule({
  declarations: [
    NewsletterFeatureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsletterFeatureComponent
  ]
})
export class NewsletterModule { }
