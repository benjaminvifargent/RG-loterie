# 🎾 Application Loterie Roland-Garros (BNP Paribas)

Bienvenue dans l'application de loterie officielle pour l'édition 2026 de Roland-Garros, en partenariat avec BNP Paribas. Cette application permet aux utilisateurs de s'inscrire pour tenter de gagner des places pour le tournoi mythique de la Porte d'Auteuil.

## ✨ Caractéristiques principales

- **Interface Utilisateur Premium** : Un design éditorial sophistiqué baptisé "The Clay & Court Experience", optimisé pour une utilisation sur tablette.
- **Système d'Inscription** : Formulaire complet avec validation des champs pour collecter les coordonnées des participants.
- **Dashboard Administrateur** :
    - Gestion du stock journalier de places (distribution intelligente entre 12h et 17h).
    - Visualisation en temps réel des inscriptions.
    - Exportation des données au format CSV pour un suivi externe.
    - Purge sécurisée des données.
- **Mécanisme de Gain (Digicode)** : Un système interactif de digicode pour révéler les résultats de manière ludique.
- **Algorithme de Probabilité** : Distribution dynamique des gains basée sur le temps et le stock restant.

## 🎨 Design & Esthétique

L'application suit une charte graphique "Grand Slam Editorial" :
- **Palette de couleurs** : Orange "Terre Battue" (`#a03c04`), Vert "Forêt" (`#0f6d39`) et Gris "Ardoise" (`#416261`).
- **Typographie** : Plus Jakarta Sans pour les titres et Manrope pour le contenu.
- **Philosophie** : Absence de lignes de séparation strictes, utilisation de la profondeur par les nuances de couleurs (Material Design 3) et glassmorphisme.

## 🛠️ Stack Technique

- **Frontend** : HTML5, CSS3 (Vanilla + Tailwind CSS pour la structure), JavaScript (ES6+).
- **Backend** : Node.js avec le framework Express.
- **Base de données** : Stockage local simple via un fichier `data.json`.
- **Dépendances** : `express`, `body-parser`, `cors`.

## 🚀 Installation et Démarrage

### Prérequis
- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- npm (installé avec Node.js)

### Installation
1. Clonez ou téléchargez le projet.
2. Installez les dépendances :
   ```bash
   npm install
   ```

### Démarrage
Lancez le serveur avec la commande suivante :
```bash
npm start
```
L'application sera accessible localement sur `http://localhost:3000`.

## 📂 Structure du Projet

- `server.js` : Point d'entrée du serveur Express et gestion de l'API.
- `accueil.html` : Page d'atterrissage élégante.
- `inscription.html` : Formulaire de participation.
- `digicode.html` : Interface de révélation des résultats.
- `admin.html` : Panneau de contrôle administratif.
- `data.json` : Stockage des inscriptions et de la configuration (généré automatiquement au premier lancement).
- `DESIGN.md` : Guide détaillé du système de design.

---
*© 2026 Vif-Argent - La Fourmi*
