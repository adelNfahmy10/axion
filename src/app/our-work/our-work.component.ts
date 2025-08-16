import { isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-our-work',
  standalone: true,
  imports: [],
  templateUrl: './our-work.component.html',
  styleUrl: './our-work.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class OurWorkComponent implements OnInit{
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)

  isBrowser = false;

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this._PLATFORM_ID)
  }

  swiperConfig: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
      }
    }
  };

  imageSlider1:any[] = [
    'assets/image/our-work-image/work-1.png',
    'assets/image/our-work-image/work-2.png',
    'assets/image/our-work-image/work-3.png',
    'assets/image/our-work-image/work-4.png',
    'assets/image/our-work-image/work-6.png',
    'assets/image/our-work-image/work-8.png',
  ]

  imageSlider2:any[] = [
    'assets/image/our-work-image/work-5.png',
    'assets/image/our-work-image/work-6.png',
    'assets/image/our-work-image/work-7.png',
    'assets/image/our-work-image/work-8.png',
    'assets/image/our-work-image/work-1.png',
    'assets/image/our-work-image/work-3.png',
  ]
}
