import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css']
})
export class ManageServersComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just some content'}];

  onServerAdded(serverData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(serverData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.name,
      content: serverData.content
    });
  }

  onChangeFirst(){
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }
}
