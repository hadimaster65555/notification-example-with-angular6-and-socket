import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { AppAdminComponent } from './app-admin/app-admin.component';
import { AppUserComponent } from './app-user/app-user.component';
 import { RouterModule, Routes } from '@angular/router';

const config: SocketIoConfig = { url: 'http://localhost:8000', options: {} };
const appRoutes: Routes = [
  { path: 'user', component: AppUserComponent },
  { path: 'admin', component: AppAdminComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppAdminComponent,
    AppUserComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
