import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-home',
  templateUrl: './index.component.html',
  encapsulation: ViewEncapsulation.None

})
export class IndexComponent implements OnInit {

  tournamentList: any = [
    { src: 'https://tournamentedition.com/assets/images/object1.png', title: 'IPL 2020' },
    { src: 'https://tournamentedition.com/assets/images/object1.png', title: 'WC 2020' },
    { src: 'https://tournamentedition.com/assets/images/object1.png', title: 'Tournament' },
    { src: 'https://tournamentedition.com/assets/images/object1.png', title: 'test' },
    { src: 'https://tournamentedition.com/assets/images/object1.png', title: 'IPL 2022' },
    { src: 'https://tournamentedition.com/assets/images/object1.png', title: 'IPL 2020' },
    { src: 'https://tournamentedition.com/assets/images/object1.png', title: 'IPL 2020' },
    { src: 'https://tournamentedition.com/assets/images/object1.png', title: 'IPL 2020' },
    { src: 'https://tournamentedition.com/assets/images/object1.png', title: 'IPL 2020' }
  ]


  // Trusted By

  trusted: any = [
    { logosrc: '/assets/img/GameACon_logo.png', logotitle: 'GameACon', logosource: 'http://www.gameacon.com/' },
    { logosrc: '/assets/img/CalixTechNews.png', logotitle: 'CalixTechNews', logosource: 'http://calixtechnews.com/' },
    { logosrc: '/assets/img/pag.png', logotitle: 'Play-All-Gaming', logosource: 'https://twitter.com/playallgaming' },
    { logosrc: '/assets/img/honor_Console_logo.png', logotitle: 'Honor Console', logosource: 'https://twitter.com/ForHonorConsole' },
    { logosrc: '/assets/img/dynamik_focus_logo.png', logotitle: 'Dynamik Focus', logosource: 'https://twitter.com/dynamikfocus' },
    { logosrc: '/assets/img/galaxies_of-gaming_sm.png', logotitle: 'Galaxies Of Gaming', logosource: 'http://twingalaxiesarcade.com/' }
  ]
  slideConfig2 = { 'slidesToShow': 5, 'slidesToScroll': 5, 'dots': false, 'arrows': false };
  slideConfig = { 'slidesToShow': 4, 'slidesToScroll': 4, 'dots': false, 'arrows': false };


  imagesSlider = {
    speed:300,
    slidesToShow:1,
    slidesToScroll:1,
    cssEase:'linear',
    fade:true,
    autoplay: false,
    draggable:true,
    prevArrow:'.client-feedback .prev-arrow',
    nextArrow:'.client-feedback .next-arrow',
    asNavFor:".thumbs",
  };
  thumbnailsSlider = {
    speed:300,
    slidesToShow:4,
    slidesToScroll:1,
    cssEase:'linear',
    autoplay: false,
    centerMode:true,
    draggable:false,
    focusOnSelect:true,
    asNavFor:".feedback",
    prevArrow:'.client-thumbnails .prev-arrow',
    nextArrow:'.client-thumbnails .next-arrow',
  };

  constructor() { }

  ngOnInit() {

    $(document).foundation();
  }


    openTab(evt:any, cityName:any) {
  //   let i, x, tablink;

  //   x = document.getElementsByClassName('section_login');
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = 'none';
  //   }

  //   tablink = document.getElementsByClassName('tablink');
  //   for (i = 0; i < tablink.length; i++) {
  //     tablink[i].className = tablink[i].className.replace(' active-tab', '');
  //   }

  //   document.getElementById('cityName').style.display = 'block';
  //   evt.currentTarget.className += ' active-tab';
   }
}
