import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-app-admin',
  templateUrl: './app-admin.component.html',
  styleUrls: ['./app-admin.component.css']
})
export class AppAdminComponent implements OnInit {

  constructor(private socket: Socket) { }

  sendNotification() {
    this.socket.emit('create notification', 'Notification Test');
  }

  ngOnInit() {
  }

}
