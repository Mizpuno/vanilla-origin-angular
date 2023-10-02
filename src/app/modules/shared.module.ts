import { BrowserModule } from "@angular/platform-browser";
import { FooterComponent } from "../shared/layout/footer/footer.component";
import { NavbarComponent } from "../shared/layout/navbar/navbar.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [BrowserModule, RouterModule],
    declarations: [
        FooterComponent,
        NavbarComponent
    ],
    exports: [
        FooterComponent,
        NavbarComponent
    ]
  })
export class SharedModule { }