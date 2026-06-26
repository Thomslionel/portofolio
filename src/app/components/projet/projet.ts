import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projet as ProjetModel } from '../../models/ProjetsModel'; // Renommé localement pour éviter le conflit
import { ProjetService } from '../../service/ProjetService/projet-service';

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projet.html',
  styleUrl: './projet.scss',
})
export class ProjetComponent implements OnInit {
  
  listeProjets: ProjetModel[] = [];

  constructor(private projetService: ProjetService) {}

  ngOnInit(): void {
    this.listeProjets = this.projetService.getAllProjets();
  }
}