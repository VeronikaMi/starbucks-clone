import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

const LINE_MOVE_STEP: number = 100;
const IMG: string = '../assets/images/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public leftMargin: string = '0%';
  public currentTab: number = 0;
  public starList: number[] = [25, 50, 150, 200, 400];
  public coffeeTabs: { img: string; title: string; text: string }[] = [
    {
      img: `${IMG}coffee1.webp`,
      title: 'Customize your drink',
      text: 'Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.',
    },
    {
      img: `${IMG}coffee2.webp`,
      title: 'Brewed hot coffee, bakery item or hot tea',
      text: 'Pair coffee cake or an almond croissant with your fresh cup of hot brew.',
    },
    {
      img: `${IMG}coffee3.webp`,
      title: 'Handcrafted drink, hot breakfast or parfait',
      text: 'Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.',
    },
    {
      img: `${IMG}coffee4.webp`,
      title: 'Salad, sandwich or protein box',
      text: 'Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.',
    },
    {
      img: `${IMG}coffee5.webp`,
      title: 'Select merchandise or at-home coffee',
      text: 'Take home a signature cup, a bag of coffee or your choice of select coffee accessories.',
    },
  ];
  @ViewChild('nav') nav: ElementRef;
  @ViewChild('rewards') rewards: ElementRef;

  @HostListener('window:scroll', ['$event']) onscroll(event) {
    let offsetHeight = this.nav.nativeElement.clientHeight;
    if (window.innerWidth < 768) {
      if (window.pageYOffset > offsetHeight) {
        this.rewards.nativeElement.classList.add('fixed', 'top-0', 'w-full');
      } else {
        this.rewards.nativeElement.classList.remove('fixed', 'top-0', 'w-full');
      }
    } else if (this.rewards.nativeElement.classList.contains('fixed')) {
      this.rewards.nativeElement.classList.remove('fixed', 'top-0', 'w-full');
    }
    console.log(window);
  }

  public handleTabChange(listItemIndex: number) {
    this.leftMargin = (listItemIndex * LINE_MOVE_STEP).toString() + '%'; //forgot to add percentage
    this.currentTab = listItemIndex;
  }
}
