import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.primengConfig.zIndex = {
          modal: 1100,
          overlay: 1000,
          menu: 1000,
          tooltip: 1100 
      };
      this.primengConfig.csp.set({nonce: '...'});
    }
  title = 'exxplora';
}
