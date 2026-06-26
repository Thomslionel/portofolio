import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/MenuModels';
import { MenuService } from '../../service/menu-service/menu-service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {


  isMenuOpen = false;
  menus: Menu[] = [];

  constructor(private menuService: MenuService) {

  }

  ngOnInit(): void {
    this.menus = this.menuService.getMenu();
  }

}
