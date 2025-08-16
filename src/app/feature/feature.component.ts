import { isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureComponent implements OnInit{
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)

  isBrowser = false;

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this._PLATFORM_ID);
  }

  features = [
    {
      id: 1,
      image: 'assets/image/feature-image/social-icon.png',
      title: 'Social Media Excellence',
      description: 'We manage your social presence with creative content, consistent branding, and active engagement to grow your audience.'
    },
    {
      id: 2,
      image: 'assets/image/feature-image/motion-icon.png',
      title: 'Motion Graphics & Video',
      description: 'Deliver your message with dynamic, engaging motion videos that capture attention and boost your brand.'
    },
    {
      id: 3,
      image: 'assets/image/feature-image/graphic-icon.png',
      title: 'Creative Graphic Design',
      description: 'From eye-catching visuals to compelling brand identity, our designs speak your message loud and clear.'
    },
    {
      id: 4,
      image: 'assets/image/feature-image/web-icon.png',
      title: 'Modern Website Development',
      description: 'Fast, secure, and responsive websites built with the latest technologies to reflect your vision.'
    },
    {
      id: 5,
      image: 'assets/image/feature-image/e-commerce-icon.png',
      title: 'E-Commerce Solutions',
      description: 'Custom online stores that convert visitors into loyal customers — smooth, scalable, and easy to manage.'
    },
    {
      id: 6,
      image: 'assets/image/feature-image/digital-icon.png',
      title: 'Digital Advertising Campaigns',
      description: 'Targeted ad strategies to maximize your reach and return on investment across all major platforms.'
    },
    {
      id: 7,
      image: 'assets/image/feature-image/seo-icon.png',
      title: 'SEO Optimization',
      description: 'Rank higher on search engines and increase visibility with data-driven SEO strategies.'
    },
    {
      id: 8,
      image: 'assets/image/feature-image/branding-icon.png',
      title: 'Branding & Identity Design',
      description: 'Build a strong, recognizable brand with logos, colors, and visuals that stand out.'
    },
    {
      id: 9,
      image: 'assets/image/feature-image/technical-icon.png',
      title: 'Technical Support & Maintenance',
      description: 'Continuous technical support to ensure your website and platforms run smoothly 24/7.'
    }
  ];
}
