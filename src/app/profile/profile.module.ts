import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { SwiperCubeComponent } from './swiper-cube/swiper-cube.component';
import { SwiperModule } from 'swiper/angular';
import { SplitPipe } from './split.pipe';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
//import { ProfileService } from './profile.service';

@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    TypewriterComponent,
    SwiperCubeComponent,
    SplitPipe,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    NgxPaginationModule
  ],

  //custom
  //providers:[ProfileService],
  exports:[
    ProfileComponent
  ]
})
export class ProfileModule { }
