import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../profile.service';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Keyboard,
  Swiper,
  EffectCube,
  Autoplay
} from 'swiper/core';
import { AutoplayOptions } from 'swiper/types';

// install Swiper modules
SwiperCore.use([Navigation, Pagination,EffectCube,Keyboard,Autoplay]);

@Component({
  selector: 'app-swiper-cube',
  templateUrl: './swiper-cube.component.html',
  styleUrls: ['./swiper-cube.component.scss']
})
export class SwiperCubeComponent implements OnInit {

  cvUrl: any
  constructor(private profileService:ProfileService) { }

  ngOnInit() {

    this.cvUrl =  this.profileService.resumeurl
  }

 /*  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  } */

  autoplayobj:AutoplayOptions = {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  }

}
