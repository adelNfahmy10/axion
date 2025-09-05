import { isPlatformBrowser, NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { TranslateDirective, TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgStyle, NgClass, TranslateModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent{
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)
  private readonly _TranslateService = inject(TranslateService)

  navbarWidth:string = '100%'
  navbarTop:string = '0'
  background:string = 'transparent'
  boxShadow:string = ''
  lastScrollTop = 0;
  isNavbarVisible = true;

  constructor(){
    this._TranslateService.use(this.lang);
  }

  @HostListener('window:scroll') onScroll(){
    const scrollPosition = window.scrollY;

    this.background = scrollPosition > 250 ? '#0c0c0cff' : 'transparent';

    this.boxShadow = scrollPosition > 250 ? '0 5px 5px #ffffffa1' : '';


    if (scrollPosition > this.lastScrollTop && scrollPosition > 250) {
      this.navbarTop = '-100px';
    } else {
      this.navbarTop = '0';
    }


    this.lastScrollTop = Math.max(scrollPosition, 0);
  }

  sections = [
    { id: 'home', name: 'navbar.home' },
    { id: 'about', name: 'navbar.about' },
    { id: 'why-us', name: 'navbar.whyUs' },
    { id: 'feature', name: 'navbar.features' },
    { id: 'our-work', name: 'navbar.ourWork' },
    { id: 'partners', name: 'navbar.partners' },
  ];
  activeLink: string = 'home';

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.setActiveLink(sectionId);
    }
  }

  setActiveLink(sectionId: string) {
    this.activeLink = sectionId;
  }

  ngAfterViewInit() {
    if(isPlatformBrowser(this._PLATFORM_ID)){
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeLink = entry.target.id;
            }
          });
        },
        { threshold: 0.5 }
      );

      this.sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.observe(element);
      });
    }
  }

  // Translation Code
  lang: string =  'en';
  switchLang() {
    this.lang = this.lang === 'en' ? 'ar' : 'en';
    this._TranslateService.use(this.lang);
    const htmlTag = document.documentElement;
    if (this.lang === 'en') { htmlTag.setAttribute('dir', 'ltr');
      htmlTag.setAttribute('lang', 'en');
    } else { htmlTag.setAttribute('dir', 'rtl');
      htmlTag.setAttribute('lang', 'ar');
    }
  }
}
