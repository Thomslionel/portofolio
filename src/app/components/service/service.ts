import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  imageOrIcon: string;
  isImage: boolean; // Permet de savoir si on affiche une balise <img> ou une icône <i>
  titre: string;
  description: string;
  techs: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.html',
  styleUrl: './service.scss'
})
export class ServicesComponent {
  
  listeServices: Service[] = [
    {
      imageOrIcon: 'fa-solid fa-server', // Ou 'assets/img/backend.png'
      isImage: false,
      titre: 'Architecture Backend',
      description: "Conception d'architectures logicielles robustes, évolutives et hautement sécurisées pour des systèmes d'envergure. Développement d'APIs critiques, gestion fine des flux financiers et optimisation des performances de bases de données relationnelles complexes sous contraintes de charge.",
      techs: ['Spring Boot', 'PostgreSQL', 'SOLID']
    },
    {
      imageOrIcon: 'fa-solid fa-brain', // Ou 'assets/img/ia.png'
      isImage: false,
      titre: 'Ingénierie IA & Data',
      description: "Intégration de l'intelligence artificielle au cœur des processus métiers. Conception de prompts directeurs et spécialisation de LLMs adaptés au contexte culturel et fonctionnel. Développement d'agents conversationnels contextuels et de solutions de vision par ordinateur pour la reconnaissance d'objets.",
      techs: ['LLMs', 'YOLOv8', 'Python']
    },
    {
      imageOrIcon: 'fa-solid fa-mobile-screen-button', // Ou 'assets/img/mobile.png'
      isImage: false,
      titre: 'Développement Mobile',
      description: "Création d'applications mobiles multiplateformes intuitives et fluides. Maîtrise complète du cycle de vie applicatif, de la conception UI/UX réactive à la logique métier robuste, incluant la géolocalisation en temps réel et la synchronisation de données instantanée.",
      techs: ['Flutter', 'Firebase', 'Clean Arch']
    },
    {
      imageOrIcon: 'fa-solid fa-cubes', // Ou 'assets/img/devops.png'
      isImage: false,
      titre: 'DevOps & Automatisation',
      description: "Containerisation systématique des environnements techniques pour garantir une portabilité et une isolation parfaites entre développement et production. Conception de pipelines de déploiement et automatisation des tâches complexes d'extraction, de transformation et de chiffrement de données.",
      techs: ['Docker', 'Talend', 'Bash']
    }
  ];
}