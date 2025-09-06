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
      alt:'whyUs.items.experienceTitle',
      title: "whyUs.items.experienceTitle",
      desc:  "whyUs.items.experienceDesc"
    },
    {
      icon:'assets/image/why-chooes-us-image/icon-2.png',
      alt:'whyUs.items.transparencyTitle',
      title: "whyUs.items.transparencyTitle",
      desc: "whyUs.items.transparencyDesc"
    },
    {
      icon:'assets/image/why-chooes-us-image/icon-3.png',
      alt:'whyUs.items.supportTitle',
      title: "whyUs.items.supportTitle",
      desc: "whyUs.items.supportDesc"
    },
    {
      icon:'assets/image/why-chooes-us-image/icon-4.png',
      alt:'whyUs.items.costTitle',
      title: "whyUs.items.costTitle",
      desc: "whyUs.items.costDesc"
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

  mainAccordion = [
    {
      title: "whyUs.mainAccordion.experience.title",
      desc: "whyUs.mainAccordion.experience.desc"
    },
    {
      title: "whyUs.mainAccordion.customServices.title",
      desc: "whyUs.mainAccordion.customServices.desc"
    },

    {
      title: "whyUs.mainAccordion.timeCommitment.title",
      desc: "whyUs.mainAccordion.timeCommitment.desc"
    },

    {
      title: "whyUs.mainAccordion.partnership.title",
      desc: "whyUs.mainAccordion.partnership.desc"
    },

    {
      title: "whyUs.mainAccordion.team.title",
      desc: "whyUs.mainAccordion.team.desc"
    },

    {
      title: "whyUs.mainAccordion.agreements.title",
      desc: "whyUs.mainAccordion.agreements.desc"
    },

    {
      title: "whyUs.mainAccordion.internalControl.title",
      desc: "whyUs.mainAccordion.internalControl.desc"
    },

  ];

  servicesAccordion = [
    {
      title: "whyUs.servicesAccordion.systemsDevelopment.title",
      desc: "whyUs.servicesAccordion.systemsDevelopment.desc"
    },
    {
      title: "whyUs.servicesAccordion.strategicPlanning.title",
      desc: "whyUs.servicesAccordion.strategicPlanning.desc"
    },
    {
      title: "whyUs.servicesAccordion.costSystems.title",
      desc: "whyUs.servicesAccordion.costSystems.desc"
    },
    {
      title: "whyUs.servicesAccordion.hrSystems.title",
      desc: "whyUs.servicesAccordion.hrSystems.desc"
    },
    {
      title: "whyUs.servicesAccordion.restructuring.title",
      desc: "whyUs.servicesAccordion.restructuring.desc"
    },
    {
      title: "whyUs.servicesAccordion.marketingStrategies.title",
      desc: "whyUs.servicesAccordion.marketingStrategies.desc"
    },
    {
      title: "whyUs.servicesAccordion.riskManagement.title",
      desc: "whyUs.servicesAccordion.riskManagement.desc"
    },
  ];


   swiperConfig: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
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
      0: {
        slidesPerView: 1,
      }
    }
  };
}
