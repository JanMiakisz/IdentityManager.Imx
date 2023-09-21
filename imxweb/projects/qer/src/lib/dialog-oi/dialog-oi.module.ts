import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogReleasesComponent } from './dialog-releases/dialog-releases.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';



@NgModule({
  declarations: [
    DialogReleasesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DialogReleasesComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class DialogOiModule { }
