import { Injectable } from '@angular/core';
import { Menu } from '../../models/MenuModels';


@Injectable({
  providedIn: 'root',
})
export class MenuService {


  collectionMenu : Menu[] = [
    new Menu('home', 'Home').copy(),
    new Menu('a-propos', 'A-propos').copy(),
    new Menu('services', 'Services').copy(),
    // new Menu('skills', 'Competences').copy(),
    new Menu('projets', 'Projets').copy(),
    new Menu('contact', 'Contact').copy()
  ];

  constructor() {}

  getMenu(): Menu[] {
    return this.collectionMenu;
  }
}