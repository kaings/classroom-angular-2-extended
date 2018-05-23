import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: { name: string, type: string, content: string }[] = [
    {
    name: 'server1',
    type: 'Server',
    content: 'server1 content'
    },
    {
      name: 'server2',
      type: 'Blueprint',
      content: 'server2 content'
    }
  ];

  onElementDelete (id: number) {
    this.servers.splice(id, 1);
  }

  onServerAdd (serverData: {sName: string, sContent: string}) {
    this.servers.push(
      {
        name: serverData.sName,
        type: 'Server',
        content: serverData.sContent
      }
    );
  }

  onBlueprintAdd (blueprintData: {sName: string, sContent: string}) {
    this.servers.push(
      {
        name: blueprintData.sName,
        type: 'Blueprint',
        content: blueprintData.sContent
      }
    );
  }
}
