import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent {
  whyItems = [
    {
      icon:'assets/image/why-chooes-us-image/tailored-digital-icon.png',
      alt:'Tailored Digital Solutions',
      title: "Tailored Digital Solutions",
      desc: "Everything we build is customized to fit your business needs — no templates, just strategy."
    },
    {
      icon:'assets/image/why-chooes-us-image/creative-design-icon.png',
      alt:'Creative Design Expertise',
      title: "Creative Design Expertise",
      desc: "From branding to social media visuals, our designs are made to impress and convert."
    },
    {
      icon:'assets/image/why-chooes-us-image/performance-first-icon.png',
      alt:'Performance-First Development',
      title: "Performance-First Development",
      desc: "We develop websites and apps that load fast, work smoothly, and scale with your business."
    },
    {
      icon:'assets/image/why-chooes-us-image/complete-marketing-icon.png',
      alt:'Complete Marketing Ecosystem',
      title: "Complete Marketing Ecosystem",
      desc: "SEO, social media, content — we connect it all under one plan to maximize impact."
    }
  ];
}
