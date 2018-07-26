import { Component } from '@angular/core';
import { FragmentationData } from './services/fragmentationData';

import '../style/app.scss';
import '../style/font.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  trackTypes = [    
    {
      name: 'Обычный трек',
      id: "object"
    },
    {
      name: "По скорости",
      id: "speed"
    },
    {
      name: "Сенсоры",
      id: "needSens"
    },    
  ]
  fragmentations: Array<any>;
  selectedFragmentation;
  selectedTrack;
  constructor(private fragmentationData: FragmentationData) {
    
    this.fragmentationData.get().then((fragmentations: Array<any>) => {
      this.fragmentations = fragmentations;
      this.selectedFragmentation = this.fragmentationData.getFragmentationById("1");
      this.selectedTrack = this.trackTypes[0];

    });

  }
  selectFragmentation(item) {
    this.selectedFragmentation = item;
  }
  selectTrackType(item) {
    this.selectedTrack = item;
  }
}
