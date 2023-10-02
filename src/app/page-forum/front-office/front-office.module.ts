import { NgModule } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { LeftContentComponent } from "./left-content/left-content.component";
import { MiddleContentComponent } from "./middle-content/middle-content.component";
import { RightContentComponent } from "./right-content/right-content.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
    imports: [BrowserModule, FormsModule, FontAwesomeModule],
    declarations: [
      HeaderComponent,
      LeftContentComponent,
      MiddleContentComponent,
      RightContentComponent
    ],
    exports: [
      HeaderComponent,
      LeftContentComponent,
      MiddleContentComponent,
      RightContentComponent
    ]
  })
  export class FrontOfficeModule { }