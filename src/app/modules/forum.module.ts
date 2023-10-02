import { NgModule } from "@angular/core";
import { FrontOfficeModule } from "../page-forum/front-office/front-office.module";
import { ForumComponent } from "../page-forum/forum.component";
import { SharedModule } from "./shared.module";
import { CommonModule } from "@angular/common";
import { BackOfficeModule } from "../page-forum/back-office/back-office.module";

@NgModule({
    imports: [
      FrontOfficeModule,
      BackOfficeModule, 
      SharedModule, 
      CommonModule
    ], 
    declarations: [ForumComponent],
    exports: [ForumComponent]
  })
export class ForumModule { }