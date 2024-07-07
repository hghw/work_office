import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'market-infomation',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './index.html',
  styleUrl: './index.scss'
})
export class MarketInfomationComponent {
  images = {
    logoPath: "assets/images/logo.png",
    googlePlayPath: "assets/images/google-play.png",
    appStorePath: "assets/images/app-store.png",
    certificationPath: "assets/images/certification.png",
    facebook: "assets/images/facebook.png",
    youtube: "assets/images/youtube.png",
    tiktok: "assets/images/tiktok.png",
    hot: "assets/images/hot.png",
    robot: "assets/images/robot.png",
    laptop: "assets/images/laptop.png",
  }
  title = 'work_office';
}
