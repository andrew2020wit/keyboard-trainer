import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'settings', component: SettingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
