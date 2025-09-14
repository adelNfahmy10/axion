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
  background:string = '#fff';
  navlinkColor:string = "#0C4C93"
  lastScrollTop = 0;
  isNavbarVisible = true;

  constructor(){
    this._TranslateService.use(this.lang);
  }

  @HostListener('window:scroll') onScroll(){
    const scrollPosition = window.scrollY;

    // this.background = scrollPosition > 80 ? '#0C4C93' : '#fff';
    // this.navlinkColor = scrollPosition > 80 ? '#fff' : '#0C4C93';

    // if (scrollPosition > this.lastScrollTop && scrollPosition > 250) {
    //   this.navbarTop = '-100px';
    // } else {
    //   this.navbarTop = '0';
    // }


    this.lastScrollTop = Math.max(scrollPosition, 0);
  }

  sections = [
    { id: 'home', name: 'navbar.home' },
    { id: 'about', name: 'navbar.about' },
    { id: 'services', name: 'navbar.services' },
    { id: 'why-us', name: 'navbar.whyUs' },
    { id: 'clients', name: 'navbar.clients' },
    { id: 'contact-us', name: 'navbar.contact-us' },
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
