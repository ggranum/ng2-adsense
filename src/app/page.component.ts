import { Component, HostBinding } from '@angular/core';

/**
 * Uses global values
 */
@Component({
  selector: 'ng2-page-1',
  template: `
  <p class="text-center">Current View: {{title}}</p>
  <ng2-adsense></ng2-adsense>
  <ng2-adsense></ng2-adsense>
  `,
})
export class PageComponent {
  title = 'Page 1';
}


@Component({
  selector: 'ng2-page-2',
  template: `
  <p class="text-center">Current View: {{title}}</p>
  <ng2-adsense [adClient]="'ca-pub-7640562161899788'" [adSlot]="2930227358"></ng2-adsense>
  <ng2-adsense></ng2-adsense>
  `,
})
export class OtherPageComponent extends PageComponent {
  title = 'Page 2';
}
