import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServerComponent} from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './alerts/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component';
import {FormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ButtonsComponent } from './buttons/buttons.component';
import {ManageServersComponent} from './manage-servers/manage-servers.component';
import { CockpitComponent } from './manage-servers/cockpit/cockpit.component';
import { ServerElementComponent } from './manage-servers/server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './game-control/even/even.component';
import { OddComponent } from './game-control/odd/odd.component';
import { NumbersComponent } from './numbers/numbers.component';
import {BasicHighlightDirective} from './numbers/directives/basic-highlight/basic-highlight.directive';
import { HighlightDirective } from './numbers/directives/highlight/highlight.directive';
import { UnlessDirective } from './numbers/directives/unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UserComponent,
    ButtonsComponent,
    ManageServersComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    NumbersComponent,
    BasicHighlightDirective,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
