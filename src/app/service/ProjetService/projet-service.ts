import { Injectable } from '@angular/core';
import { Projet } from '../../models/ProjetsModel';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {

  // Initialisation du tableau avec tes réalisations concrètes
  private projets: Projet[] = [
    new Projet(
      'Blood Alert',
      '/img/BloodAlert.png',
      "Application mobile d'urgence transfusionnelle développée avec Flutter, Spring boot, Angular et Firebase. Elle permet d'allerter en temps réel et de contacter rapidement les donneurs de sang compatibles en cas de besoin critique."
    ),
    new Projet(
      'E-Contravention',
      '/img/e_contravension.png',
      "Développement d'une solution numérique en Node.js dédiée à la digitalisation, à la gestion et au suivi en temps réel des infractions et des contraventions, optimisant le traitement des données et la transparence des procédures."
    ),
    new Projet(
      'Password Generator',
      '/img/password.png',
      "Développement d'une application sécurisée dédiée à la génération de mots de passe robustes."
    ),
    new Projet(
      'Automatisation des postes de peages',
      '/img/peage.png',
      "Conception et développement d'un système d'envergure nationale pour la gestion automatisée des péages. Implémentation de modules complexes de comptabilité financière, de calcul dynamique d’itinéraires et de génération automatique de tickets sous Spring Boot, adossés à une architecture conteneurisée avec Docker et une sécurisation stricte des accès par rôles (RBAC)."
    ),

    new Projet(
      "Burkin's Soalma ",
      '/img/Story.png',
      "Ce projet est une application interactive qui utilise l'intelligence artificielle pour générer des contes burkinabè uniques et captivants, inspirés du riche patrimoine culturel du Burkina Faso. L'application combine des technologies modernes comme Streamlit, Mistral AI, et Retrieval-Augmented Generation (RAG) pour offrir une expérience utilisateur immersive."
    )
  ];


  getAllProjets(): Projet[] {
    return this.projets.map(projet => projet.copy());
  }
}