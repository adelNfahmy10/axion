import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class WhyChooseUsComponent {
  whyItems = [
    {
      icon:'assets/image/why-chooes-us-image/icon-1.png',
      alt:'whyUs.items.tailoredTitle',
      title: "whyUs.items.tailoredTitle",
      desc:  "whyUs.items.tailoredDesc"
    },
    {
      icon:'assets/image/why-chooes-us-image/icon-2.png',
      alt:'whyUs.items.creativeTitle',
      title: "whyUs.items.creativeTitle",
      desc: "whyUs.items.creativeDesc"
    },
    {
      icon:'assets/image/why-chooes-us-image/icon-3.png',
      alt:'whyUs.items.performanceTitle',
      title: "whyUs.items.performanceTitle",
      desc: "whyUs.items.performanceDesc"
    },
    {
      icon:'assets/image/why-chooes-us-image/icon-4.png',
      alt:'whyUs.items.ecosystemTitle',
      title: "whyUs.items.ecosystemTitle",
      desc: "whyUs.items.ecosystemDesc"
    },
    {
      icon:'assets/image/why-chooes-us-image/icon-5.png',
      alt:'whyUs.items.specializationTitle',
      title: "whyUs.items.specializationTitle",
      desc: "whyUs.items.specializationDesc"
    },
    {
      icon:'assets/image/why-chooes-us-image/icon-6.png',
      alt:'whyUs.items.riskTitle',
      title: "whyUs.items.riskTitle",
      desc: "whyUs.items.riskDesc"
    }
  ];

  swiperConfig: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      }
    }
  };
}
