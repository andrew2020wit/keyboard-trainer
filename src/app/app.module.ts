import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TrainerComponent } from './trainer/trainer.component';
import { CharSpanComponent } from './char-span/char-span.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';

const materialModules = [MatToolbarModule, MatInputModule];
@NgModule({
  declarations: [AppComponent, HomePageComponent, TrainerComponent, CharSpanComponent, InfoPanelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ...materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
