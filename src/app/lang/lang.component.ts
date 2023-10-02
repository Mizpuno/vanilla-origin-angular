import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent {
  
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en')
  }
  changeLanguage(lang: any) {
    this.translate.use(lang.target.value)
  }
}
