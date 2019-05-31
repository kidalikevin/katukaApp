import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  notifications = [
    {
      id: 1,
      message: 'You have a pending asset approval for user <a>Peter Kinuthia</a>, approval was to happen yesterday.',
      created: '20th-09-2018'
    },
    {
      id: 1,
      message: 'You have an early asset approval for user <a>James Brown</a> which due date is <strong><i>30th-09-2018</i></strong>',
      created: '2 Days ago'
    },
    {
      id: 1,
      message: 'Asset account approval for user <a>Tonny Kariuki</a> has been replenished and dispatched',
      created: '1 Day ago'
    }
  ];

  constructor() { }

}
