import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobBestComponent } from './parials/jobs-best';
import { MarketInfomationComponent } from './parials/market-infomation';
import { BlogsComponent } from './parials/blogs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobBestComponent, MarketInfomationComponent, BlogsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
