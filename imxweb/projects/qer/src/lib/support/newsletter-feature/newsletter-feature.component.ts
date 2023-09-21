import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'ccc-newsletter-feature',
  templateUrl: './newsletter-feature.component.html',
  styleUrls: ['./newsletter-feature.component.scss']
})
export class NewsletterFeatureComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialog.closeAll()
  }

}
