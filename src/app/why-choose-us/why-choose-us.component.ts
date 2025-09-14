import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class WhyChooseUsComponent {
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
}
