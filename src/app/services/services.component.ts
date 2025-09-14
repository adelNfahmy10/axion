import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  servicesLimit = 6; // البداية 6 عناصر

  showMore() {
    this.servicesLimit += 6; // كل مرة يزود 6 عناصر
  }

  services:any = [
    {
      id: 1,
      image: '../../assets/image/service-image/Financing-icon.png',
      title: "services.items.financingTitle",
      list: "services.items.financingDesc",
    },
    {
      id: 2,
      image: '../../assets/image/service-image/Restriction-icon.png',
      title: "services.items.bookkeepingTitle",
      list: "services.items.bookkeepingDesc",
    },
    {
      id: 3,
      image: '../../assets/image/service-image/Consultations-icon.png',
      title: "services.items.taxTitle",
      list: "services.items.taxDesc",
    },
    {
      id: 4,
      image: '../../assets/image/service-image/Management-icon.png',
      title: "services.items.payrollTitle",
      list: "services.items.payrollDesc",
    },
    {
      id: 5,
      image: '../../assets/image/service-image/Merger-icon.png',
      title: "services.items.mergersTitle",
      list: "services.items.mergersDesc",
    },
    {
      id: 6,
      image: '../../assets/image/service-image/restructuring-icon.png',
      title: "services.items.restructuringTitle",
      list: "services.items.restructuringDesc",
    },
    {
      id: 7,
      image: '../../assets/image/service-image/professional-consulting-icon.png',
      title: "services.items.consultingTitle",
      list: "services.items.consultingDesc",
    },
    {
      id: 8,
      image: '../../assets/image/service-image/financial-reports-icon.png',
      title: "services.items.reportingTitle",
      list: "services.items.reportingDesc",
    },
    {
      id: 9,
      image: '../../assets/image/service-image/Costaccounting-icon.png',
      title: "services.items.costAccountingTitle",
      list: "services.items.costAccountingDesc",
    },
    {
      id: 10,
      image: '../../assets/image/service-image/traning-icon.png',
      title: "services.items.trainingTitle",
      list: "services.items.trainingDesc",
    },
    {
      id: 11,
      image: '../../assets/image/service-image/riskassessment-icon.png',
      title: "services.items.riskAssessmentTitle",
      list: "services.items.riskAssessmentDesc",
    },
    {
      id: 12,
      image: '../../assets/image/service-image/Franchise-icon.png',
      title: "services.items.franchiseTitle",
      list: "services.items.franchiseDesc",
    },
    {
      id: 13,
      image: '../../assets/image/service-image/Technical-software-icon.png',
      title: "services.items.techConsultingTitle",
      list: "services.items.techConsultingDesc",
    },
    {
      id: 14,
      image: '../../assets/image/service-image/ux-icon.png',
      title: "services.items.uxConsultingTitle",
      list: "services.items.uxConsultingDesc",
    },
    {
      id: 15,
      image: '../../assets/image/service-image/data-analysis-icon.png',
      title: "services.items.dataAnalysisTitle",
      list: "services.items.dataAnalysisDesc",
    },
    {
      id: 16,
      image: '../../assets/image/service-image/iso-icon.png',
      title: "services.items.isoTitle",
      list: "services.items.isoDesc",
    },
    {
      id: 17,
      image: '../../assets/image/service-image/Contractor-icon.png',
      title: "services.items.contractorsTitle",
      list: "services.items.contractorsDesc",
    },
    {
      id: 18,
      image: '../../assets/image/service-image/icon-9.png',
      title: "services.items.governanceTitle",
      list: "services.items.governanceDesc",
    },
    {
      id: 19,
      image: '../../assets/image/service-image/Feasibility-icon.png',
      title: "services.items.feasibilityTitle",
      list: "services.items.feasibilityDesc",
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
