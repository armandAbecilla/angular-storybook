import { Component, input } from '@angular/core';
import { ProfileBanner } from 'src/app/models/banners.model';

@Component({
  selector: 'app-profile-banner',
  imports: [],
  templateUrl: './profile-banner.component.html',
  styles: ``,
})
export class ProfileBannerComponent {
  data = input.required<ProfileBanner>();
}
