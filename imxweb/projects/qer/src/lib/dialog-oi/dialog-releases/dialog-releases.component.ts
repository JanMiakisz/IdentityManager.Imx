import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ccc-dialog-releases',
  templateUrl: './dialog-releases.component.html',
  styleUrls: ['./dialog-releases.component.scss']
})
export class DialogReleasesComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialog.closeAll()
  }

}