import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movierulz';

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,) {
    this.matIconRegistry.addSvgIcon('left_arrow', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/left_arrow.svg'));
    this.matIconRegistry.addSvgIcon('right_arrow', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/right_arrow.svg'));
    this.matIconRegistry.addSvgIcon('menu', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/menu.svg'));
    this.matIconRegistry.addSvgIcon('no_data', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/no_data.svg'));
  }
}
