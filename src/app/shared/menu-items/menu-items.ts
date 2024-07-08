import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state:'personal', name:'Mtto Personal', type:'link', icon:'supervised_user_circle' },
  { state:'reportes', name:'Reportes', type:'link', icon:'av_timer' }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
