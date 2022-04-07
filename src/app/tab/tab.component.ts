import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent implements OnInit {
  @Input() coffeeTabs: { img: string; title: string; text: string }[];
  @Input() currentTab: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
