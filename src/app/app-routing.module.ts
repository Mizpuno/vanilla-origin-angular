import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './page-forum/forum.component';
import { LoginComponent } from './page-login/login.component';

const routes: Routes = [
    { path: '', component: ForumComponent },
    { path: 'login', component: LoginComponent } 
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})  
export class AppRoutingModule {}