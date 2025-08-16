import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent {
}
