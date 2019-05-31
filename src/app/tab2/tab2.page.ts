import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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

  constructor() {}

}
