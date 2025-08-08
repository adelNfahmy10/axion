import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-all-logo',
  standalone: true,
  imports: [],
  templateUrl: './all-logo.component.html',
  styleUrl: './all-logo.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AllLogoComponent {
  swiperConfig: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  }
};
}
