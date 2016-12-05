import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// required components
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './shared';

// featured modules
import { HomeModule } from './home/home.module';

// router config
const rootRouting = RouterModule.forRoot([], {useHash: true});

// imported modules
const appModules = [
  HomeModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    appModules,
    rootRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
