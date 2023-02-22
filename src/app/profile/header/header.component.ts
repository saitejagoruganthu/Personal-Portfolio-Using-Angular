import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

//@ts-ignore
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit {

  @ViewChild('hamclick') navbtn?:ElementRef;
  @ViewChild('navcontent') navcontent?:ElementRef;
  @ViewChild('navwrapper') navwrapper?:ElementRef;

  ngOnInit(): void {
    var navbar:any = document.querySelector('nav.fixed-top')

    window.onscroll = function() {

      // pageYOffset or scrollY
      if (window.pageYOffset > 0) 
      {
        navbar.classList.add('scrolled')
      } 
      else 
      {
        navbar.classList.remove('scrolled')
      }
    }
  }

  ngAfterViewInit(){
    //console.log(this.navbtn);

    
    
  }

  hamClick(event:any):void
  {
    //console.log(event);
    
    //console.log(this.navbtn);
    this.navbtn?.nativeElement.classList.toggle("toggled");
    this.navwrapper?.nativeElement.classList.toggle("wrappertoggle");
    //this.navcontent?.nativeElement.classList.toggle("d-block");

    /* var navitem:any = document.querySelector('.wrappertoggle .nav-item');
    var that = this;
    navitem.addEventListener("click", ()=>{
      that.navbtn?.nativeElement.classList.toggle("toggled");
    }); */
  }

  navItemClick(event:any):void
  {
    console.log(event);
    this.navbtn?.nativeElement.classList.toggle("toggled");
    this.navwrapper?.nativeElement.classList.toggle("wrappertoggle");
  }
}
