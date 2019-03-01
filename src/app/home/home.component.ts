import {Component, OnInit} from '@angular/core';
import {ContentBoxProperties} from "../../../lib/content-box/src/content-box.properties";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})
export class HomeComponent implements OnInit {
    public content: ContentBoxProperties[];

    constructor(

    ) {
    this.content = [
      {
        title: 'Review your privacy settings',
        content: 'Take the Privacy Checkup, a step-by-step guide that helps you choose your privacy settings.',
        ricon: '../../assets/ico/small-privacy-icon.png',
        xlicon: '../../assets/ico/big-privacy-icon.png',
        link: 'Get Started'
      },
      {
        title: 'Security issues found',
        content: 'Protect your account now by resolving these issues.',
        ricon: '../../assets/ico/small-security-icon.png',
        xlicon: '../../assets/ico/big-security-icon.png',
        link: 'Secure Account'
      },
      {
        title: 'Make Google yours',
        content: 'See the data in your Google Account and choose what activity is saved to personalize your Google experience',
        ricon: '../../assets/ico/small-personalize-icon.png',
        xlicon: '../../assets/ico/big-personal-icon.png',
        link: 'Manage your data & personalization'
      },
      {
        title: 'Account storage',
        content: 'Your account storage is shared across Google services, like Gmail and Photos.',
        ricon: '../../assets/ico/small-account-icon.png',
        xlicon: '../../assets/ico/big-account-icon.png',
        link: 'Manage storage'
      }
    ];
  }

  getProperties(index: number): ContentBoxProperties {
      return this.content[index];
  }

  ngOnInit() {

  }
}
