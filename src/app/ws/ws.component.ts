import { Component, OnInit } from '@angular/core';
import {WsServiceService} from '../shared/ws-service.service';

@Component({
  selector: 'app-ws',
  templateUrl: './ws.component.html',
  styleUrls: ['./ws.component.css']
})
export class WsComponent implements OnInit {

  constructor(private wsService: WsServiceService) { }
  ngOnInit() {
    this.wsService.createObservableSocket('ws://localhost:8085', 1).subscribe(
      data => console.log(data),
      error1 => console.log(error1),
      () => console.log('流已经结束')
    );
  }

  sendMsg() {
    this.wsService.sendMessage('Message from client to server');
  }

}
