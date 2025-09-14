import { NgClass, NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe, NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent {
  whyItems = [
    {
      icon:'assets/image/why-chooes-us-image/icon-1.png',
      alt:'whyUs.items.experienceTitle',
      title: "whyUs.items.experienceTitle",
      desc: "whyUs.items.experienceDesc"
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

}
