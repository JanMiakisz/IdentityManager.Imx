import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterFeatureComponent } from './newsletter-feature/newsletter-feature.component';
import { InstructionsFeatureComponent } from './instructions-feature/instructions-feature.component';
import { CoecomponentsFeatureComponent } from './coecomponents-feature/coecomponents-feature.component';



@NgModule({
  declarations: [
    NewsletterFeatureComponent,
    InstructionsFeatureComponent,
    CoecomponentsFeatureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsletterFeatureComponent,
    InstructionsFeatureComponent,
    CoecomponentsFeatureComponent
  ]
})
export class SupportModule { }
