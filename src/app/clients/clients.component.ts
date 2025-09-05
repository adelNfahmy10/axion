import { isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientsComponent {
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)

  isBrowser = false;

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this._PLATFORM_ID)
  }

  swiperConfig: SwiperOptions = {
    slidesPerView: 9,
    spaceBetween: 20,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    breakpoints: {
      1200: {
        slidesPerView: 9,
      },
      768: {
        slidesPerView: 6,
      },
      0: {
        slidesPerView: 3,
      }
    }
  };
}
