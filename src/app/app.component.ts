import { Component } from '@angular/core';

import { Platform, AlertController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertController: AlertController,
    private toastCtr: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.presentAlertPrompt();
    });
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Login!',
      backdropDismiss: false,
      inputs: [
        {
          name: 'phone_number',
          type: 'number',
          placeholder: '+254 7.. ... ..'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'xxxxxxxxxxxxxx'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'Login',
          handler: () => {
            this.presentToast('Your must login first.', 0);
          }
        }, {
          text: 'Login',
          handler: (data) => {
            console.log('data', data);
            if (data.phone_number.length > 4 && data.password.length > 4) {
              this.presentToast('Welcome and feel home ;)', 1);
            } else {
              this.presentToast('Provide any login credentials.', 0);
            }
          }
        }
      ]
    });
    return await alert.present();
  }

  async presentToast(message, status) {
    const toast = await this.toastCtr.create({
      message,
      duration: 2000
    });
    toast.present();
    if (status === 0) {
      this.presentAlertPrompt();
    }
  }
}
