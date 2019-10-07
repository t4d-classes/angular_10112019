import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationMessage = '';
  notificationType = 'Info';
  showNotification = false;

  showInfoNotification(value: string) {
    this.notificationMessage = value;
    this.notificationType = 'Info';
    this.showNotification = true;
    setTimeout(() => {
      this.hideNotification();
    }, 3000);
  }

  showErrorNotification(value: string) {
    this.notificationMessage = value;
    this.notificationType = 'Error';
    this.showNotification = true;
    setTimeout(() => {
      this.hideNotification();
    }, 3000);
  }

  hideNotification() {
    this.showNotification = false;
  }

  get notificationClass() {
    return this.notificationType === 'Error' ? 'show-error' : 'show-info';
  }

  get notificationState() {
    return this.showNotification ? 'show' : 'hide';
  }

}
