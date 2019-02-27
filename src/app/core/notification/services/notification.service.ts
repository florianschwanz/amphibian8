import {Injectable} from '@angular/core';

export declare type Permission = 'denied' | 'granted' | 'default';

/**
 * Handles notifications
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public permission: Permission;

  static isSupported(): boolean {
    return 'Notification' in window;
  }

  constructor() {
    this.permission = NotificationService.isSupported() ? 'default' : 'denied';
  }

  public requestPermission() {
    if (NotificationService.isSupported()) {
      Notification.requestPermission().then((result) => {
        console.log(result);
      });
    }
  }

  /**
   * Displays notification
   * @param title title
   * @param text text
   * @param icon icon name
   */
  public displayNotification(title: string, text: string, icon: string) {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then((reg) => {
        const options = {
          body: text,
          icon: 'assets/icons/' + icon,
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          }
        };

        if (reg) {
          reg.showNotification(title, options);
        } else {
          console.error('Cannot show notification since there is no service worker registered.');
        }
      });
    }
  }
}
