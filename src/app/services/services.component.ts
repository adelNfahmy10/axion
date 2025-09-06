import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ServicesComponent{
  services = [
    {
      image:'../../assets/image/service-image/Financing-icon.png',
      title: "services.items.financingTitle",
    },
    {
      image:'../../assets/image/service-image/Restriction-icon.png',
      title: "services.items.bookkeepingTitle",
    },
    {
      image:'../../assets/image/service-image/Consultations-icon.png',
      title: "services.items.taxTitle",
    },
    {
      image:'../../assets/image/service-image/Management-icon.png',
      title: "services.items.payrollTitle",
    },
    {
      image:'../../assets/image/service-image/Merger-icon.png',
      title: "services.items.mergersTitle",
    },
    {
      image:'../../assets/image/service-image/restructuring-icon.png',
      title: "services.items.restructuringTitle",
    },
    {
      image:'../../assets/image/service-image/professional-consulting-icon.png',
      title: "services.items.consultingTitle",
    },
    {
      image:'../../assets/image/service-image/financial-reports-icon.png',
      title: "services.items.reportingTitle",
    },
    {
      image:'../../assets/image/service-image/Costaccounting-icon.png',
      title: "services.items.costAccountingTitle",
    },
    {
      image:'../../assets/image/service-image/traning-icon.png',
      title: "services.items.trainingTitle",
    },
    {
      image:'../../assets/image/service-image/riskassessment-icon.png',
      title: "services.items.riskAssessmentTitle",
    },
    {
      image:'../../assets/image/service-image/Franchise-icon.png',
      title: "services.items.franchiseTitle",
    },
    {
      image:'../../assets/image/service-image/Technical-software-icon.png',
      title: "services.items.techConsultingTitle",
    },
    {
      image:'../../assets/image/service-image/ux-icon.png',
      title: "services.items.uxConsultingTitle",
    },
    {
      image:'../../assets/image/service-image/data-analysis-icon.png',
      title: "services.items.dataAnalysisTitle",
    },
    {
      image:'../../assets/image/service-image/iso-icon.png',
      title: "services.items.isoTitle",
    },
    {
      image:'../../assets/image/service-image/Contractor-icon.png',
      title: "services.items.contractorsTitle",
    },
    {
      image:'../../assets/image/service-image/icon-9.png',
      title: "services.items.governanceTitle",
    },
    {
      image:'../../assets/image/service-image/Feasibility-icon.png',
      title: "services.items.feasibilityTitle",
    },
  ];


  swiperConfig: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 20,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
      }
    }
  };

}
