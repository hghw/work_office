import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
  }
  title = 'work_office';
}
