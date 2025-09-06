import { Component, inject } from '@angular/core';
import { AboutComponent } from "../../about/about.component";
import { NavbarComponent } from "../../navbar/navbar.component";
import { HomeComponent } from "../../home/home.component";
import { FooterComponent } from "../../footer/footer.component";
import { WhyChooseUsComponent } from "../../why-choose-us/why-choose-us.component";
import { ClientsComponent } from "../../clients/clients.component";
import { ServicesComponent } from "../../services/services.component";

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [AboutComponent, NavbarComponent, HomeComponent, FooterComponent, WhyChooseUsComponent, ServicesComponent, ClientsComponent],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.scss'
})
export class BlankComponent {
}
