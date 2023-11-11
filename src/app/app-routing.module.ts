import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PrivacyComponent} from "./privacy/privacy.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'privacy', component: PrivacyComponent},
    {path: 'privacy.html', component: PrivacyComponent},
    {path: '**', component: HomeComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
