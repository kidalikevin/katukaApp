import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {

  @Input() value: string;

  softwareEngineer = [
    {
      id: 1,
      asset: 'Laptop',
      cycle: '24 Months'
    },
    {
      id: 2,
      asset: 'Laptop Bag',
      cycle: '24 Months'
    },
    {
      id: 3,
      asset: 'Sales-force Account',
      cycle: '12 Months'
    },
    {
      id: 3,
      asset: 'G-Mail Account',
      cycle: '--'
    }
  ];


  workMan = [
    {
      id: 1,
      asset: 'Gloves',
      cycle: '24 Months'
    },
    {
      id: 2,
      asset: 'Overall',
      cycle: '24 Months'
    },
    {
      id: 3,
      asset: 'T-Shirt',
      cycle: '12 Months'
    },
    {
      id: 4,
      asset: 'Boots',
      cycle: '12 Months'
    },
    {
      id: 4,
      asset: 'G-Mail Account',
      cycle: '--'
    }
  ];

  salesRep = [
    {
      id: 1,
      asset: 'Phone',
      cycle: '24 Months'
    },
    {
      id: 2,
      asset: 'Diary',
      cycle: '--'
    },
    {
      id: 3,
      asset: 'T-Shirt',
      cycle: '12 Months'
    },
    {
      id: 4,
      asset: 'Sales-force Account',
      cycle: '--'
    },
    {
      id: 5,
      asset: 'G-Mail Account',
      cycle: '--'
    }
  ];

  constructor(public modal: ModalController) {}

  ngOnInit() {}

  closeModal() {
    this.modal.dismiss();
  }

}

