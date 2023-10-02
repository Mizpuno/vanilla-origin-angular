import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ManagementComponent } from "./management/management.component";
import { ToolsComponent } from "./tools/tools.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
    imports: [BrowserModule, FormsModule, FontAwesomeModule],
    declarations: [
        ManagementComponent, 
        ToolsComponent
    ],
    exports: [
        ManagementComponent,
        ToolsComponent
    ]
})

export class BackOfficeModule {}