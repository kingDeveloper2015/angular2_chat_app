import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// firebase
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig, firebaseAuthConfig } from './../environments/firebase.config';

// required components
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './shared';

// featured modules
import { SharedModule } from './shared';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { ChannelsModule } from './channels/channels.module';

// services
import { UserService, AuthService, ChannelsService, MessageService, AuthGuard, LogoutResolver, AuthResolver } from './shared';


// router config
const rootRouting = RouterModule.forRoot([      
 ], {useHash: true});

// imported modules
const appModules = [
  SharedModule,
  HomeModule,
  AuthModule,
  ChannelsModule
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
    rootRouting,

    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [
    AuthService, UserService, ChannelsService, MessageService, AuthGuard, LogoutResolver, AuthResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
