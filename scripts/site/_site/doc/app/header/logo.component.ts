import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a href="/" id="logo">
      <img alt="logo" src="./assets/img/cslogo.svg" />
    </a>
  `,
  styles: [
    `
      #logo strong {
        font-weight: 500;
      }
    `
  ]
})
export class LogoComponent {}
