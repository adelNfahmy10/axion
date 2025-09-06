import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  swiperConfig: SwiperOptions = {
    slidesPerView: 8,
    spaceBetween: 20,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    breakpoints: {
      1200: {
        slidesPerView: 8,
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
