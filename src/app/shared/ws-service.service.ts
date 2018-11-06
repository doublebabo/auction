import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WsServiceService implements OnInit{

  constructor() { }

  ws: WebSocket;
  ngOnInit(): void {
  }

  createObservableSocket(url: string, id: number) {
    this.ws = new WebSocket(url);
    return new Observable<string>(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error();
        this.ws.onclose = (event) => observer.complete();
        this.ws.onopen = (event) => this.sendMessage({productId: id});
      }
    );
  }

  sendMessage(msg: any) {
    this.ws.send(JSON.stringify(msg));
  }
}
