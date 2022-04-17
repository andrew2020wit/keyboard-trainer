import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CharSpanComponent} from './char-span/char-span.component';
import {HomePageComponent} from './home-page/home-page.component';
import {InfoPanelComponent} from './info-panel/info-panel.component';
import {SettingPageComponent} from './setting-page/setting-page.component';
import {TrainerComponent} from './trainer/trainer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TrainerComponent,
    CharSpanComponent,
    InfoPanelComponent,
    SettingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
