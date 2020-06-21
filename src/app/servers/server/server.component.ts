import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .Offline{
    color: #555555;
  }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'rgba(1,255,0,0.51)' : 'rgba(255, 7, 0, 0.51)';
  }
}
