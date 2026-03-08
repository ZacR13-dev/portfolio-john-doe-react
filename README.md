# Portfolio John Doe - React.js

## 📋 Description

Ce projet est un portfolio professionnel développé avec React.js pour John Doe, développeur web full-stack. Le site présente ses compétences, services, réalisations et permet de le contacter.

## 🚀 Technologies utilisées

- **React.js** (avec hooks useState et useEffect)
- **React Router DOM** (pour la navigation)
- **Bootstrap 5** (framework CSS)
- **Bootstrap Icons** (icônes)
- **API GitHub** (intégration modale)
- **Google Maps** (iframe intégrée)

## 📦 Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- **Node.js** (version 14 ou supérieure)
- **npm** (généralement installé avec Node.js)

## 🔧 Installation

### 1. Clonez le repository
```bash
git clone https://github.com/ZacR13-dev/portfolio-john-doe-react.git
```

### 2. Accédez au dossier du projet
```bash
cd portfolio-john-doe-react
```

### 3. Installez les dépendances
```bash
npm install
```

## ▶️ Lancement du projet

Pour lancer le serveur de développement :
```bash
npm start
```

Le site sera accessible sur `http://localhost:3000`

Le navigateur se rechargera automatiquement à chaque modification du code.

## 🏗️ Build de production

Pour créer une version optimisée pour la production :
```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `build/`.

## 📱 Fonctionnalités

- ✅ **Navigation responsive** avec React Router
- ✅ **Menu hamburger** sur mobile/tablette
- ✅ **Intégration API GitHub** avec modale dynamique
- ✅ **Formulaire de contact** avec validation
- ✅ **Portfolio de réalisations** avec cards interactives
- ✅ **Design responsive** (Mobile, Tablet, Desktop)
- ✅ **Effets hover et transitions CSS**
- ✅ **SEO optimisé** (meta tags, balises sémantiques)
- ✅ **Accordéon Bootstrap** pour les mentions légales

## 📄 Pages

Le site comprend 5 pages principales :

1. **Accueil** (`/`) : Hero section, présentation et compétences avec progress bars
2. **Services** (`/services`) : Présentation des offres (UX Design, Développement Web, SEO)
3. **Réalisations** (`/portfolio`) : Portfolio de 6 projets
4. **Contact** (`/contact`) : Formulaire de contact et Google Maps
5. **Mentions Légales** (`/mentions-legales`) : Informations légales (non indexée)

## 🎨 Charte graphique

- **Police** : Nunito Sans (Google Fonts) - 400 et 600
- **Couleurs** : Palette Bootstrap par défaut
- **Icônes** : Bootstrap Icons
- **Framework CSS** : Bootstrap 5

## 📐 Structure du projet
```
portfolio-john-doe-react/
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── banner.jpg
│   │   ├── john-doe-about.jpg
│   │   └── portfolio/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── GitHubModal.jsx
│   │   ├── ServiceCard.jsx
│   │   └── ProjectCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   └── MentionsLegales.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🌐 Conformité et Validation

- ✅ Code HTML validé W3C
- ✅ Code CSS validé W3C
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Accessibilité (balises sémantiques, attributs ARIA)
- ✅ SEO (meta tags, structure sémantique)

## 👤 Auteur

**Kevin Reis**  
Étudiant - Développeur Web  
Centre Européen de Formation  

**GitHub** : [@ZacR13-dev](https://github.com/ZacR13-dev)

## 📜 Licence

Ce projet est réalisé dans le cadre d'une évaluation académique au Centre Européen de Formation.

## 🙏 Crédits

- **Images** : [Pixabay](https://pixabay.com/) (libres de droits)
- **Favicon** : [Flaticon](https://www.flaticon.com/free-icons/john-doe) - John Doe Icons par Freepik
- **Framework** : [Bootstrap 5](https://getbootstrap.com/)
- **Icônes** : [Bootstrap Icons](https://icons.getbootstrap.com/)

---

**Note** : Ce projet utilise l'API GitHub publique pour la modale de profil. Aucune clé API n'est requise.