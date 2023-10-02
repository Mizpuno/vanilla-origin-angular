import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  switchCondition = 0;

  onClickAbout = () => this.switchCondition = 0;
  onClickServices = ()  => this.switchCondition = 1;
  onClickContact = () => this.switchCondition = 2;
}
