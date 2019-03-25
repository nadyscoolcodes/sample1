import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    
}
export const ROUTES: RouteInfo[] = [

    { path: '/employeelist', title: 'Employeelist',  icon:'person', class: '' },
 //   { path: '/user-profile', title: 'AddEmployee',  icon:'person', class: '' },
    { path: '/attendance', title: 'Attendance', icon:'date_range', class: '' },
    { path: '/leave-tracker', title: 'Leave Tracker', icon:'work_off', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: ''},
   
];

@Component({
  selector: 'app-sidebar',  
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
