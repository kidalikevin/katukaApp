import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmployeePage } from '../modals/employee/employee.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users = [
    {
      id: 1,
      avatar: 'assets/avatars/avatar1.png',
      name: 'Katupa Litwachi',
      asset: 'Software Developer'
    },
    {
      id: 2,
      avatar: 'assets/avatars/avatar2.png',
      name: 'Catherine K. Kawira',
      asset: 'Human Resource'
    },
    {
      id: 3,
      avatar: 'assets/avatars/avatar3.png',
      name: 'James Brown',
      asset: 'Sales Representative'
    },
    {
      id: 4,
      avatar: 'assets/avatars/avatar4.png',
      name: 'Calvin Manhattan',
      asset: 'Sales Representative'
    },
    {
      id: 5,
      avatar: 'assets/avatars/avatar5.png',
      name: 'James Carlipha',
      asset: 'Human Resources M.'
    },
    {
      id: 6,
      avatar: 'assets/avatars/avatar5.png',
      name: 'Tonny Karuki',
      asset: 'Office Messenger'
    },
    {
      id: 7,
      avatar: 'assets/avatars/avatar5.png',
      name: 'Peter J. Marcos',
      asset: 'Office Messenger'
    },
    {
      id: 8,
      avatar: 'assets/avatars/avatar5.png',
      name: 'Arnold Atieno',
      asset: 'Software Developer'
    },
    {
      id: 9,
      avatar: 'assets/avatars/avatar5.png',
      name: 'Peter Valeki',
      asset: 'Electrician Personel'
    },
    {
      id: 10,
      avatar: 'assets/avatars/avatar5.png',
      name: 'Fahari Haliima',
      asset: 'Software Developer'
    },
    {
      id: 11,
      avatar: 'assets/avatars/avatar4.png',
      name: 'Petroda Carlif',
      asset: 'Software Developer'
    }
  ];

  constructor(public modalCtrl: ModalController) { }

  async openModal(user: any) {
    const modal = await this.modalCtrl.create({
      component: EmployeePage,
      componentProps: { value: user.name }
    });
    return await modal.present();
  }

}
