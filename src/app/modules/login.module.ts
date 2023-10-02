import { NgModule } from "@angular/core";
import { LoginComponent } from "../page-login/login.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [FontAwesomeModule, RouterModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})

export class LoginModule {}
