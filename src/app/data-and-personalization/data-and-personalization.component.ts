import { Component, OnInit } from '@angular/core';
import { ContentBoxProperties } from "../../../lib/content-box/src/content-box.properties";

@Component({
  selector: 'app-data-and-personalization',
  templateUrl: './data-and-personalization.component.html',
  styleUrls: ['../app.component.css']
})
export class DataAndPersonalizationComponent implements OnInit {
  public content: ContentBoxProperties[];

  constructor() {
      this.content = [
          {
              title: 'Review your privacy settings',
              content: 'Take the Privacy Checkup, a step-by-step guide that helps you choose your privacy settings.',
              ricon: '../../assets/ico/small-privacy-icon.png',
              xlicon: '../../assets/ico/big-privacy-icon.png'
          },
          {
              title: 'Activity controls',
              content: 'You can choose to save your activity for better personalization across Google. Turn on or pause these settings at any time.',
              ricon: '../../assets/ico/small-security-icon.png',
              xlicon: '../../assets/ico/big-security-icon.png'
          },
          {
              title: 'Activity and timeline',
              content: 'You can choose to save your activity for better personalization across Google. Turn on or pause these settings at any time.',
              ricon: '../../assets/ico/small-personalize-icon.png',
              xlicon: '../../assets/ico/big-personal-icon.png',
              link: 'Manage your data & personalization'
          },
          {
              title: 'Things you create and do',
              content: 'Check Google Dashboard to see a summary of your services and the data saved in your account',
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
