# GUIDE COMPLET CLAUDE CODE
## Nouvelle Santé Formation - Construction avec Claude Code

**Version** : 1.0  
**Date** : 4 janvier 2026  
**Projet** : Migration complète Nouvelle Santé Formation  

---

## 📚 TABLE DES MATIÈRES

1. [Introduction - Comment utiliser ce guide](#introduction)
2. [Prérequis et préparation](#prérequis)
3. [Phase 0 : Initialisation du projet](#phase-0)
4. [Phase 1 : Setup & Infrastructure](#phase-1)
5. [Phase 2 : Site vitrine & Landing page](#phase-2)
6. [Phase 3 : Tunnel de vente & Paiement](#phase-3)
7. [Phase 4 : Authentification & Espace membre](#phase-4)
8. [Phase 5 : Plateforme LMS](#phase-5)
9. [Phase 6 : Gamification](#phase-6)
10. [Phase 7 : Forum & Communauté](#phase-7)
11. [Phase 8 : Visioconférence & Calendrier](#phase-8)
12. [Phase 9 : Blog & SEO](#phase-9)
13. [Phase 10 : Dashboard Admin](#phase-10)
14. [Phase 11 : Emails & Automatisations](#phase-11)
15. [Phase 12 : Tests & Optimisation](#phase-12)
16. [Phase 13 : Déploiement](#phase-13)
17. [Annexes & Ressources](#annexes)

---

## INTRODUCTION

### Comment utiliser ce guide

Ce guide est conçu pour être utilisé **étape par étape** avec **Claude Code**. 

#### Structure de chaque section :

```
📋 OBJECTIF : Ce que vous allez construire
⏱️ DURÉE ESTIMÉE : Temps approximatif
🎯 PROMPT POUR CLAUDE CODE : Instructions exactes à copier-coller
✅ VALIDATION : Comment vérifier que ça fonctionne
⚠️ POINTS D'ATTENTION : Pièges à éviter
🔄 ITÉRATION : Si besoin d'ajustements
```

#### Workflow recommandé :

1. **Lire la section** complètement avant de commencer
2. **Copier le prompt** pour Claude Code
3. **Lancer Claude Code** avec le prompt
4. **Tester** le résultat
5. **Valider** avec la checklist fournie
6. **Itérer** si nécessaire
7. **Passer à l'étape suivante**

#### Tips pour maximiser l'efficacité :

✅ **Une étape à la fois** : Ne sautez pas d'étapes  
✅ **Testez régulièrement** : Validez après chaque phase  
✅ **Commitez souvent** : Git commit après chaque fonctionnalité validée  
✅ **Gardez Claude Code ouvert** : Pour des questions/ajustements rapides  
✅ **Documentez vos choix** : Notez les décisions importantes  

---

## PRÉREQUIS

### Outils nécessaires

Avant de commencer, assurez-vous d'avoir :

#### **1. Claude Code installé**
```bash
# Vérifier l'installation
claude --version
```

#### **2. Node.js (v18+)**
```bash
# Vérifier la version
node --version
npm --version
```

#### **3. Git**
```bash
# Vérifier l'installation
git --version
```

#### **4. Un éditeur de code** (VS Code recommandé)
- Extension : ES7+ React/Redux/React-Native snippets
- Extension : Tailwind CSS IntelliSense
- Extension : Prisma

#### **5. PostgreSQL** (local ou distant)
```bash
# Vérifier PostgreSQL
psql --version
```

#### **6. Comptes externes** (à créer si pas encore fait)
- Stripe (mode test) : https://stripe.com
- Compte O2Switch : https://www.o2switch.fr
- GitHub/GitLab pour le repository

### Configuration de votre environnement

#### **Créer le dossier projet**
```bash
mkdir nouvelle-sante-formation
cd nouvelle-sante-formation
```

#### **Initialiser Git**
```bash
git init
git branch -M main
```

#### **Créer repository distant**
- Sur GitHub/GitLab, créez un nouveau repository
- Nommez-le : `nouvelle-sante-formation`

```bash
# Lier au repository distant
git remote add origin https://github.com/VOTRE-USERNAME/nouvelle-sante-formation.git
```

### Structure de travail recommandée

```
nouvelle-sante-formation/
├── docs/                    # Documentation du projet
│   ├── architecture.md
│   ├── api.md
│   └── deployment.md
├── .claude/                 # Notes et historique Claude Code
│   └── session-notes.md
├── README.md
└── [code source à créer]
```

---

## PHASE 0 : INITIALISATION DU PROJET

### 📋 OBJECTIF
Créer la structure de base du projet Next.js avec TypeScript, Tailwind CSS et les configurations essentielles.

### ⏱️ DURÉE ESTIMÉE
30-45 minutes

### 🎯 PROMPT POUR CLAUDE CODE

```
Je veux créer un projet Next.js 14+ pour une plateforme de formation en ligne.

Spécifications :
- Next.js 14+ avec App Router
- TypeScript strict
- Tailwind CSS
- Shadcn/ui pour les composants
- Configuration ESLint + Prettier
- Structure de dossiers organisée pour une application LMS

Crée le projet avec la structure suivante :
- /app : Routes et pages
- /components : Composants réutilisables
  - /ui : Composants shadcn/ui
  - /forms : Composants de formulaires
  - /layout : Header, Footer, Navigation
- /lib : Utilitaires et helpers
- /types : Types TypeScript
- /hooks : Custom React hooks
- /styles : CSS global et Tailwind config

Configure également :
- .gitignore approprié
- README.md avec instructions de setup
- Package.json avec scripts utiles
- tsconfig.json strict
- next.config.js optimisé

Génère tous les fichiers de configuration nécessaires.
```

### ✅ VALIDATION

Après l'exécution, vérifiez :

```bash
# 1. Le projet doit s'installer sans erreur
npm install

# 2. Le serveur de développement doit démarrer
npm run dev

# 3. Ouvrir http://localhost:3000 dans le navigateur
# → Vous devriez voir la page par défaut Next.js

# 4. Vérifier la structure des dossiers
ls -la

# 5. Vérifier que TypeScript fonctionne
npm run build
```

**Checklist :**
- [X] `npm install` réussit sans erreur
- [x] `npm run dev` lance le serveur
- [x] Page accessible sur http://localhost:3000
- [x] Structure de dossiers créée
- [x] TypeScript compile sans erreur
- [x] Tailwind CSS fonctionne (tester avec une classe)

### ⚠️ POINTS D'ATTENTION

- **Si erreur d'installation** : Vérifier la version de Node.js (v18+)
- **Si port 3000 occupé** : Utiliser `PORT=3001 npm run dev`
- **Si problème TypeScript** : Vérifier tsconfig.json

### 🔄 SI BESOIN D'AJUSTEMENTS

Si la structure ne vous convient pas, demandez à Claude Code :

```
Peux-tu réorganiser la structure des dossiers selon cette logique :
[expliquer vos préférences]
```

### 📝 PREMIER COMMIT

```bash
git add .
git commit -m "Initial project setup with Next.js 14, TypeScript, Tailwind"
git push -u origin main
```

---

## PHASE 1 : SETUP & INFRASTRUCTURE

### 📋 OBJECTIF
Configurer la base de données, Prisma ORM, les variables d'environnement et l'architecture de base.

### ⏱️ DURÉE ESTIMÉE
1-2 heures

---

### ÉTAPE 1.1 : Configuration de la base de données

### 🎯 PROMPT POUR CLAUDE CODE

```
Je veux configurer PostgreSQL avec Prisma ORM pour ma plateforme de formation.

Configure :
1. Installation de Prisma et les dépendances nécessaires
2. Initialisation de Prisma
3. Création du fichier .env avec les variables d'environnement
4. Création du schéma Prisma de base avec ces modèles :

Modèles nécessaires :
- User (id, email, name, password, role, createdAt, updatedAt)
- Formation (id, title, description, price, image, createdAt)
- Module (id, title, description, order, formationId, unlockDelay)
- Lesson (id, title, content, videoUrl, order, moduleId, duration)
- Enrollment (id, userId, formationId, enrolledAt, progress)
- LessonProgress (id, userId, lessonId, completed, completedAt)

Crée :
- prisma/schema.prisma avec tous les modèles et relations
- .env.example (template)
- .env.local (pour développement local)
- lib/db.ts (client Prisma singleton)

Ajoute les scripts npm nécessaires pour :
- Générer le client Prisma
- Créer les migrations
- Seed la base de données
```

### ✅ VALIDATION

```bash
# 1. Vérifier que Prisma est installé
npx prisma --version

# 2. Configurer votre DATABASE_URL dans .env.local
# Exemple : DATABASE_URL="postgresql://user:password@localhost:5432/nouvelle_sante_formation"

# 3. Générer le client Prisma
npx prisma generate

# 4. Créer la base de données et les tables
npx prisma db push

# 5. Ouvrir Prisma Studio pour vérifier
npx prisma studio
```

**Checklist :**
- [ ] Prisma installé
- [ ] Schéma créé avec tous les modèles
- [ ] DATABASE_URL configurée
- [ ] Tables créées dans PostgreSQL
- [ ] Prisma Studio accessible
- [ ] Client Prisma généré

### 📝 COMMIT

```bash
git add .
git commit -m "feat: setup Prisma ORM with database schema"
git push
```

---

### ÉTAPE 1.2 : Système d'authentification (NextAuth.js)

### 🎯 PROMPT POUR CLAUDE CODE

```
Je veux implémenter un système d'authentification complet avec NextAuth.js v5 (Auth.js).

Spécifications :
- Authentification par email/password
- Support de plusieurs rôles : STUDENT, ADMIN, COACH
- Session persistante
- Protection des routes
- Récupération de mot de passe

Crée :
1. Installation de NextAuth et dépendances nécessaires
2. Configuration NextAuth dans app/api/auth/[...nextauth]/route.ts
3. Adapter Prisma pour NextAuth (User, Account, Session, VerificationToken)
4. Middleware pour protection des routes
5. Composants :
   - LoginForm (app/components/auth/LoginForm.tsx)
   - RegisterForm (app/components/auth/RegisterForm.tsx)
   - ResetPasswordForm (app/components/auth/ResetPasswordForm.tsx)
6. Pages :
   - /login
   - /register
   - /reset-password
7. Hooks personnalisés :
   - useAuth (hook pour accéder à l'utilisateur connecté)
   - useRequireAuth (hook pour protéger les pages)
8. Utilitaires :
   - Hash de password (bcrypt)
   - Génération de tokens
   - Validation email

Configure les variables d'environnement nécessaires :
- NEXTAUTH_URL
- NEXTAUTH_SECRET
- NEXTAUTH_SESSION_STRATEGY
```

### ✅ VALIDATION

```bash
# 1. Vérifier l'installation
npm list next-auth

# 2. Générer un NEXTAUTH_SECRET
openssl rand -base64 32

# 3. Ajouter dans .env.local :
# NEXTAUTH_URL="http://localhost:3000"
# NEXTAUTH_SECRET="[secret généré]"

# 4. Démarrer le serveur
npm run dev

# 5. Tester l'authentification
# → Aller sur http://localhost:3000/register
# → Créer un compte
# → Se connecter sur http://localhost:3000/login
# → Vérifier la session
```

**Checklist :**
- [ ] NextAuth installé et configuré
- [ ] Pages login/register accessibles
- [ ] Inscription fonctionne (utilisateur créé en BDD)
- [ ] Connexion fonctionne (session active)
- [ ] Déconnexion fonctionne
- [ ] Middleware protège les routes privées
- [ ] Hash des passwords (vérifier en BDD)

### 📝 COMMIT

```bash
git add .
git commit -m "feat: implement NextAuth authentication system"
git push
```

---

### ÉTAPE 1.3 : Design System & Composants de base

### 🎯 PROMPT POUR CLAUDE CODE

```
Je veux créer le design system complet avec Shadcn/ui basé sur la charte graphique de Nouvelle Santé Formation.

Charte graphique :
- Couleur principale : Violet/Mauve (#8B5CF6)
- Couleur secondaire : Rose pâle (#F3E8FF)
- Couleur accent : Violet foncé (#6D28D9)
- Police : Inter (ou système sans-serif)
- Style : Moderne, épuré, professionnel

Tâches :
1. Installer et configurer Shadcn/ui
2. Personnaliser tailwind.config.ts avec la palette de couleurs
3. Créer les composants de base suivants (avec Shadcn/ui) :
   - Button (variantes : primary, secondary, outline, ghost)
   - Card
   - Input
   - Select
   - Checkbox
   - Radio
   - Textarea
   - Badge
   - Alert
   - Modal/Dialog
   - Dropdown Menu
   - Tabs
   - Accordion
   - Progress Bar
   - Avatar
   - Tooltip

4. Créer les composants layout :
   - Header (avec navigation et auth)
   - Footer
   - Sidebar
   - Container (max-width responsive)

5. Créer une page de démo : /design-system
   Pour visualiser tous les composants

Configure également :
- Animations (Framer Motion si nécessaire)
- Icons (Lucide React)
- Typographie responsive
```

### ✅ VALIDATION

```bash
# 1. Démarrer le serveur
npm run dev

# 2. Aller sur http://localhost:3000/design-system
# → Voir tous les composants stylisés

# 3. Vérifier la cohérence visuelle
# → Les couleurs correspondent à la charte
# → Les composants sont responsive
# → Les animations sont fluides
```

**Checklist :**
- [ ] Shadcn/ui installé
- [ ] Tous les composants créés
- [ ] Couleurs personnalisées appliquées
- [ ] Page /design-system accessible
- [ ] Composants responsive (mobile, tablet, desktop)
- [ ] Icons Lucide installés et fonctionnels

### 📝 COMMIT

```bash
git add .
git commit -m "feat: setup design system with Shadcn/ui and custom theme"
git push
```

---

## PHASE 2 : SITE VITRINE & LANDING PAGE

### 📋 OBJECTIF
Créer la landing page complète avec toutes les sections, responsive et optimisée SEO.

### ⏱️ DURÉE ESTIMÉE
4-6 heures

---

### ÉTAPE 2.1 : Structure de la landing page

### 🎯 PROMPT POUR CLAUDE CODE

```
Je veux créer la landing page complète de Nouvelle Santé Formation.

Structure de la page (app/page.tsx) :

1. **Hero Section**
   - Titre principal : "Et si ton expérience te permettait de décrocher un diplôme reconnu par l'État ?"
   - Sous-titre explicatif
   - 2 CTA : "Échanger via le tchat" + "Je passe le test d'éligibilité"
   - Image d'une professionnelle de santé (côté droit)
   - Badge "Formation éligible aux CPF"

2. **Section Programmes** (3 cartes)
   - VAE Aide-Soignant (DEAS)
   - VAE Auxiliaire de Vie (DEAES)
   - Parcours pratique (Hygiène, soins, prévention)
   - Bouton "Voir le programme complet"

3. **Section Éligibilité**
   - Titre : "Cette formation est 100% faite pour toi si :"
   - 3 critères avec checkmarks
   - CTA "Je passe le test d'éligibilité"

4. **Section "Comment ça marche"**
   - Carousel avec 3 étapes
   - Illustration par étape

5. **Section Avantages**
   - Titre : "Tout ce qu'il faut pour réussir !"
   - Liste à puces :
     - Coaching personnalisé
     - Plateforme e-learning
     - Communauté
     - Préparation à l'oral
     - Aide administrative
     - Bonus PSC1, fiches pratiques

6. **Section Parcours détaillés**
   - 3 cartes avec options de financement
   - CPF / Pôle Emploi / Employeur / Paiement 1X, 2X, 3X

7. **Section Témoignages**
   - Carousel avec 2-3 témoignages
   - Photo, nom, citation, étoiles

8. **Section "Qu'est-ce que la VAE"**
   - Explication
   - Vidéo de présentation (intégration YouTube)
   - Accordion FAQ (3 questions principales)

9. **Section Avantages VAE**
   - 2 colonnes : "Les avantages" + "Pour qui ?"

10. **Section Résultats**
    - Taux de satisfaction : 100%
    - Mise à jour octobre 2025

11. **Section Programme détaillé**
    - Exemple de modules (4 cartes)
    - Par parcours

12. **FAQ Section**
    - Accordion avec questions fréquentes

13. **CTA Final**
    - "Tu veux en savoir plus?"
    - Bouton "Échanger via le tchat"

Crée tous les composants nécessaires dans app/components/landing/
Utilise les composants Shadcn/ui
Rends la page 100% responsive
Ajoute les animations de scroll (AOS ou Framer Motion)
```

### ✅ VALIDATION

```bash
# 1. Démarrer le serveur
npm run dev

# 2. Ouvrir http://localhost:3000
# → La landing page doit s'afficher complètement

# 3. Vérifier sur différents devices
# → Desktop : Layout en 2 colonnes où approprié
# → Tablet : Layout adapté
# → Mobile : Tout en 1 colonne, lisible

# 4. Tester les interactions
# → Boutons cliquables
# → Carousel fonctionne
# → Accordion FAQ s'ouvre/ferme
# → Animations de scroll fluides
```

**Checklist :**
- [ ] Toutes les sections présentes
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Images placeholders (à remplacer)
- [ ] CTA fonctionnels (liens actifs)
- [ ] Carousel témoignages fonctionne
- [ ] FAQ accordion fonctionne
- [ ] Animations de scroll
- [ ] Performance : LCP < 2.5s

### 📝 COMMIT

```bash
git add .
git commit -m "feat: create complete landing page with all sections"
git push
```

---

### ÉTAPE 2.2 : Navigation & Footer

### 🎯 PROMPT POUR CLAUDE CODE

```
Je veux créer le Header avec navigation et le Footer du site.

**Header** (app/components/layout/Header.tsx)
- Logo Nouvelle Santé (cliquable → accueil)
- Menu navigation :
  - Plateforme de formation
  - Blog (si connecté admin)
  - Se connecter / Mon espace (si authentifié)
- Responsive : burger menu sur mobile
- Sticky au scroll
- Afficher le nom de l'utilisateur si connecté

**Footer** (app/components/layout/Footer.tsx)
Sections :
1. À propos
2. Formations
   - VAE Aide-Soignant
   - VAE Auxiliaire de Vie
3. Légal
   - Mentions légales
   - CGV
   - CGU
   - Politique de confidentialité
4. Contact
   - Email
   - Réseaux sociaux (Instagram, TikTok)

Bas de page :
- © 2026 Nouvelle Santé Formation
- "Fait avec ❤️ pour nos apprenants"

**Bouton WhatsApp Sticky** (app/components/ui/WhatsAppButton.tsx)
- Icône WhatsApp
- Position : fixed bottom-right
- Lien : https://wa.me/VOTRE_NUMERO
- Tooltip "Nous contacter"
- Animation pulse

Rends tout responsive et accessible (ARIA labels).
```

### ✅ VALIDATION

```bash
# 1. Vérifier Header
# → Logo visible et cliquable
# → Menu navigation fonctionne
# → Responsive : burger menu sur mobile
# → Sticky au scroll

# 2. Vérifier Footer
# → Tous les liens présents
# → Liens actifs (même si pages pas encore créées)
# → Responsive

# 3. Vérifier WhatsApp button
# → Visible en bas à droite
# → Animation pulse
# → Lien WhatsApp fonctionne
```

**Checklist :**
- [ ] Header avec logo et navigation
- [ ] Burger menu mobile
- [ ] Footer complet
- [ ] Tous les liens footer présents
- [ ] WhatsApp button sticky
- [ ] Responsive sur tous devices

### 📝 COMMIT

```bash
git add .
git commit -m "feat: add Header navigation and Footer"
git push
```

---

### ÉTAPE 2.3 : Pages légales

### 🎯 PROMPT POUR CLAUDE CODE

```
Je veux créer les 4 pages légales obligatoires pour un site français.

Crée les pages suivantes avec un contenu générique à personnaliser :

1. **Mentions légales** (/mentions-legales)
   - Éditeur du site (Nouvelle Santé Formation)
   - Hébergeur (O2Switch)
   - Directeur de publication
   - Contact

2. **Conditions Générales de Vente** (/conditions-generales-de-vente)
   - Objet
   - Prix et modalités de paiement
   - Droit de rétractation (14 jours)
   - Responsabilités
   - Propriété intellectuelle
   - Données personnelles
   - Litiges

3. **Conditions Générales d'Utilisation** (/conditions-generales-utilisation)
   - Accès au site
   - Utilisation de la plateforme
   - Compte utilisateur
   - Contenu utilisateur
   - Propriété intellectuelle

4. **Politique de Confidentialité** (/politique-de-confidentialite)
   - Responsable du traitement
   - Données collectées
   - Finalités du traitement
   - Base légale (RGPD)
   - Durée de conservation
   - Droits des utilisateurs
   - Cookies
   - Contact DPO

Utilise un layout propre avec :
- Navigation breadcrumb
- Table des matières
- Contenu structuré (h2, h3, listes)
- Date de dernière mise à jour

Template : app/legal/[slug]/page.tsx
Markdown pour le contenu (ou MDX).
```

### ✅ VALIDATION

```bash
# Vérifier chaque page
# → /mentions-legales
# → /conditions-generales-de-vente
# → /conditions-generales-utilisation
# → /politique-de-confidentialite

# Checklist contenu :
# → Toutes les sections présentes
# → Lisible et structuré
# → Liens footer fonctionnent
```

**Checklist :**
- [ ] 4 pages légales créées
- [ ] Contenu structuré et lisible
- [ ] Breadcrumb navigation
- [ ] Date de mise à jour
- [ ] Liens dans footer actifs
- [ ] Responsive

### 📝 COMMIT

```bash
git add .
git commit -m "feat: add legal pages (mentions, CGV, CGU, privacy policy)"
git push
```

---

## PHASE 3 : TUNNEL DE VENTE & PAIEMENT

### 📋 OBJECTIF
Créer le test d'éligibilité, les pages de paiement et l'intégration Stripe.

### ⏱️ DURÉE ESTIMÉE
6-8 heures

---

### ÉTAPE 3.1 : Test d'éligibilité

### 🎯 PROMPT POUR CLAUDE CODE

```
Je veux créer un test d'éligibilité interactif pour déterminer si les utilisateurs peuvent bénéficier de la VAE.

**Page de départ** : /deviens-aide-soignant-ou-auxiliaire-de-vie

**Logique du test :**
Questions à poser :
1. "As-tu au moins 1 an d'expérience professionnelle dans le domaine de la santé/aide à la personne ?"
   - Oui → continuer
   - Non → rediriger vers "Non éligible"

2. "Es-tu actuellement :"
   - Salarié(e) → continuer
   - Freelance → continuer
   - Bénévole → continuer vers "Éligible sous conditions"
   - Sans emploi → rediriger vers "Non éligible"

3. "As-tu des justificatifs d'activité à fournir ?"
   - Oui → rediriger vers "Éligible à 100%"
   - Non mais je peux les obtenir → rediriger vers "Éligible sous conditions"
   - Non → rediriger vers "Non éligible"

**Pages de résultat :**

1. **/tu-es-eligible** (Éligible à 100%)
   - Message de félicitations
   - Prochaines étapes
   - CTA "Choisir mon parcours" → /page-de-paiement-[type]

2. **/tu-es-eligible-sous-conditions**
   - Message expliquant les conditions
   - Ce qu'il faut faire
   - CTA "Échanger avec un conseiller"
   - CTA secondaire "Choisir mon parcours"

3. **/tu-n-es-pas-eligible**
   - Message empathique
   - Alternatives proposées
   - CTA "Nous contacter"

**Fonctionnalités :**
- Formulaire interactif avec transitions fluides
- Barre de progression
- Validation des réponses
- Animation entre les questions
- Sauvegarde de la réponse (localStorage temporaire)
- Design cohérent avec la charte

Crée tous les composants nécessaires.
```

### ✅ VALIDATION

```bash
# Tester tous les chemins possibles :

# Scénario 1 : Éligible à 100%
# → 1 an d'expérience : Oui
# → Statut : Salarié
# → Justificatifs : Oui
# → Résultat : /tu-es-eligible

# Scénario 2 : Éligible sous conditions
# → 1 an d'expérience : Oui
# → Statut : Salarié
# → Justificatifs : Peut les obtenir
# → Résultat : /tu-es-eligible-sous-conditions

# Scénario 3 : Non éligible
# → 1 an d'expérience : Non
# → Résultat : /tu-n-es-pas-eligible
```

**Checklist :**
- [ ] Page de test accessible
- [ ] Questions s'affichent progressivement
- [ ] Barre de progression fonctionne
- [ ] Redirections correctes selon réponses
- [ ] 3 pages de résultat créées
- [ ] CTA vers pages de paiement
- [ ] Animations fluides
- [ ] Responsive

### 📝 COMMIT

```bash
git add .
git commit -m "feat: create eligibility test with 3 result pages"
git push
```

---

### ÉTAPE 3.2 : Pages de paiement & Intégration Stripe

### 🎯 PROMPT POUR CLAUDE CODE

```
Je veux créer le système de paiement complet avec Stripe.

**Installation :**
- Stripe SDK
- @stripe/stripe-js
- stripe (Node.js)

**Configuration :**
- Variables d'environnement :
  - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  - STRIPE_SECRET_KEY
  - STRIPE_WEBHOOK_SECRET

**Pages de paiement :**

1. **/page-de-paiement-aide-soignant**
2. **/page-de-paiement-auxiliaire-de-vie**

**Formulaire de commande** (même structure pour les 2) :

Sections :
1. Type de client
   - Radio : Particulier / Entreprise

2. Informations personnelles
   - Prénom*
   - Nom de famille*
   - Email*
   - Adresse*
   - Ville*
   - Code postal*
   - Pays (select, défaut: France)

3. Code Promo (optionnel)
   - Input avec bouton "Appliquer"
   - Afficher réduction si valide

4. Sélection du parcours (auto-sélectionné selon page)
   - VAE DEAS (Aide-Soignant)
   - VAE DEAES (Auxiliaire de Vie)

5. Options de paiement (radio buttons)
   - Paiement 1X : 2 400€
   - Paiement 2X : 1 440€/mois (2 fois)
   - Paiement 3X : 960€/mois (3 fois)

6. Bouton CPF
   - "Cliquer ici pour un financement via le CPF 💸"
   - Lien externe (à définir)

7. Paiement par carte
   - Intégration Stripe Elements
   - Champs : Numéro de carte, Date d'expiration, CVC
   - Bouton "Payer maintenant"

**Logique backend :**

1. API Route : /api/checkout
   - Créer Stripe Checkout Session
   - Gérer les codes promo
   - Calculer le montant selon options
   - Gestion des paiements multiples (subscription ou payment_intent)

2. API Route : /api/webhooks/stripe
   - Écouter les événements Stripe :
     - checkout.session.completed
     - payment_intent.succeeded
     - payment_intent.payment_failed
   - Actions :
     - Créer l'utilisateur si nouveau
     - Attribuer la formation
     - Envoyer email de confirmation
     - Créer l'Enrollment en BDD

**Codes promo à gérer :**
- CPF100 : 100% de réduction
- FREE : 100% de réduction
- HAPPYHOUSE50 : 50% de réduction

**Modèle Prisma à ajouter :**
```prisma
model Order {
  id                String   @id @default(cuid())
  userId            String
  user              User     @relation(fields: [userId], references: [id])
  formationId       String
  formation         Formation @relation(fields: [formationId], references: [id])
  amount            Float
  paymentOption     String   // "1X", "2X", "3X"
  promoCode         String?
  stripeSessionId   String   @unique
  status            String   // "pending", "paid", "failed", "refunded"
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
}
```

Crée :
- Pages de paiement (/app/page-de-paiement-[type])
- Composants Stripe Elements
- API routes
- Validation des formulaires (Zod)
- Gestion des erreurs
- Loading states
```

### ✅ VALIDATION

```bash
# 1. Configurer Stripe
# → Créer un compte Stripe (mode test)
# → Copier les clés API dans .env.local

# 2. Installer Stripe CLI pour tester webhooks
stripe login
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# 3. Tester le paiement
# → Aller sur /page-de-paiement-aide-soignant
# → Remplir le formulaire
# → Utiliser carte test Stripe : 4242 4242 4242 4242
# → Date future, CVC : 123

# 4. Vérifier dans Stripe Dashboard
# → Payment Intent créé
# → Webhook reçu

# 5. Vérifier en BDD
# → Order créé
# → Enrollment créé
# → User updated
```

**Checklist :**
- [ ] Stripe SDK installé
- [ ] 2 pages de paiement créées
- [ ] Formulaire complet et validé
- [ ] Codes promo fonctionnent
- [ ] Stripe Checkout Session créé
- [ ] Paiement test réussit
- [ ] Webhooks configurés
- [ ] Données sauvegardées en BDD
- [ ] Gestion des erreurs
- [ ] Loading states

### 📝 COMMIT

```bash
git add .
git commit -m "feat: add payment pages with Stripe integration"
git push
```

---

### ÉTAPE 3.3 : Pages de remerciement

### 🎯 PROMPT POUR CLAUDE CODE

```
Je veux créer les pages de remerciement après paiement.

**Pages :**
1. /merci-pour-ton-paiement-auxiliaire-de-vie
2. /merci-pour-ton-paiement-aide-soignant (même structure)

**Contenu :**

1. Message de confirmation
   - Titre : "Tu y es presque... 🚀"
   - Sous-titre : "Finalise ton paiement et transforme toi aussi tes années d'expérience en diplôme 😍"

2. Ce que tu vas recevoir
   - Un mail de confirmation
   - Tes accès à la plateforme
   - Ton invitation à rejoindre la communauté (qui n'attend plus que toi !)

3. CTA principaux
   - "Rejoins le groupe WhatsApp ici 👇"
   - "Je commence ma formation"

4. Détails de commande (récupérés via URL params ou session)
   - Parcours acheté
   - Montant payé
   - Mode de paiement
   - Numéro de commande

5. Prochaines étapes
   - Ce qui va se passer dans les prochaines heures/jours

**Fonctionnalités :**
- Récupérer les infos de commande (session_id Stripe)
- Afficher les détails de l'achat
- Email automatique déclenché (géré par webhook)
- Protection : accessible uniquement après paiement réussi

Ajoute des confettis ou animation de célébration (react-confetti).
```

### ✅ VALIDATION

```bash
# 1. Simuler un paiement réussi
# → Faire un paiement test
# → Être redirigé vers la page de remerciement

# 2. Vérifier le contenu
# → Message affiché
# → CTA présents et fonctionnels
# → Détails de commande corrects

# 3. Vérifier protection
# → Tenter d'accéder directement sans paiement
# → Rediriger si pas de session valide
```

**Checklist :**
- [ ] 2 pages de remerciement créées
- [ ] Animation de célébration
- [ ] Détails de commande affichés
- [ ] CTA vers WhatsApp fonctionne
- [ ] CTA vers formation fonctionne
- [ ] Protection route (accès restreint)
- [ ] Responsive

### 📝 COMMIT

```bash
git add .
git commit -m "feat: add thank you pages after payment"
git push
```

---

## PHASE 4 : AUTHENTIFICATION & ESPACE MEMBRE

### 📋 OBJECTIF
Créer l'espace membre avec dashboard étudiant et gestion du profil.

### ⏱️ DURÉE ESTIMÉE
6-8 heures

---

### ÉTAPE 4.1 : Dashboard étudiant

### 🎯 PROMPT POUR CLAUDE CODE

```
Je veux créer le dashboard de l'espace membre pour les étudiants.

**Route protégée** : /dashboard

**Layout du dashboard :**
- Sidebar gauche (navigation)
- Contenu principal (zone principale)
- Responsive : sidebar collapsible sur mobile

**Navigation sidebar :**
1. Vue d'ensemble (Dashboard)
2. Mes formations
3. Mon parcours
4. Mes certificats
5. Mes badges
6. Forum
7. Prendre RDV
8. Mon profil
9. Déconnexion

**Page Dashboard principale (/dashboard) :**

Sections :

1. **Bienvenue**
   - "Bonjour {firstName} 👋"
   - Date du jour
   - Citation motivante du jour

2. **Statistiques rapides** (4 cartes)
   - Formations actives
   - Modules complétés
   - Points accumulés
   - Niveau actuel

3. **Progression globale**
   - Barre de progression avec %
   - "Tu as complété X modules sur Y"

4. **Prochains modules** (liste)
   - Afficher 3 prochains modules disponibles
   - Bouton "Continuer" par module
   - Afficher modules verrouillés avec date de déblocage

5. **Activité récente**
   - Derniers modules visionnés
   - Derniers messages forum
   - Derniers badges obtenus

6. **Prochains webinaires**
   - Calendrier des événements à venir
   - Bouton "Rejoindre" si dans moins de 15 min

7. **Mes badges récents**
   - Galerie des 5 derniers badges obtenus

**Composants à créer :**
- DashboardLayout (layout avec sidebar)
- StatsCard (carte statistique)
- ProgressBar (barre de progression)
- ModuleCard (carte module)
- BadgeCard (badge obtenu)
- ActivityFeed (fil d'activité)

**Données à récupérer :**
- Utilisateur connecté (session)
- Enrollments (formations inscrites)
- LessonProgress (progression)
- UserBadges (badges obtenus)
- UserPoints (points)

Utilise Server Components pour les données et Client Components pour l'interactivité.
```

### ✅ VALIDATION

```bash
# 1. Se connecter avec un compte test
# → Accéder à /dashboard

# 2. Vérifier toutes les sections
# → Statistiques affichées
# → Progression visible
# → Modules listés

# 3. Tester navigation sidebar
# → Tous les liens cliquables
# → Sidebar collapsible sur mobile

# 4. Vérifier responsive
# → Mobile : sidebar en burger menu
# → Tablet : sidebar réduite
# → Desktop : sidebar complète
```

**Checklist :**
- [ ] Dashboard accessible après login
- [ ] Toutes les sections présentes
- [ ] Sidebar navigation fonctionne
- [ ] Statistiques réelles (BDD)
- [ ] Progression calculée correctement
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Protection route (redirect si non authentifié)

### 📝 COMMIT

```bash
git add .
git commit -m "feat: create student dashboard with sidebar navigation"
git push
```

---

### ÉTAPE 4.2 : Page Mes Formations

### 🎯 PROMPT POUR CLAUDE CODE

```
Je veux créer la page "Mes formations" dans l'espace membre.

**Route** : /dashboard/formations

**Contenu :**

1. **Liste des formations** (grille de cartes)
   Pour chaque formation :
   - Image de couverture
   - Titre de la formation
   - Description courte
   - Progression (%)
   - Barre de progression visuelle
   - Nombre de modules complétés / total
   - Temps restant d'accès (si limitation)
   - Bouton "Continuer" ou "Commencer"

2. **Filtres** (si plusieurs formations)
   - Toutes
   - En cours
   - Terminées

3. **Vide state**
   - Si aucune formation :
     - Message "Tu n'as pas encore de formation"
     - CTA "Découvrir nos formations"

**Fonctionnalités :**
- Calculer la progression (modules complétés / total modules)
- Afficher le prochain module à faire
- Lien vers la page de la formation (/formation/{id})

**Composants :**
- FormationCard (carte formation avec progression)
- ProgressBar (réutilisable)
- EmptyState (état vide)

**API/Données :**
- Récupérer les Enrollments de l'utilisateur
- Joindre les données Formation
- Calculer progression par formation
```

### ✅ VALIDATION

```bash
# 1. Accéder à /dashboard/formations
# → Liste des formations affichée

# 2. Vérifier les données
# → Progression correcte
# → Modules complétés exact

# 3. Cliquer sur "Continuer"
# → Rediriger vers la page de la formation

# 4. Tester sans formation
# → État vide affiché
```

**Checklist :**
- [ ] Page accessible depuis sidebar
- [ ] Formations listées en cartes
- [ ] Progression affichée correctement
- [ ] Bouton "Continuer" fonctionne
- [ ] État vide si aucune formation
- [ ] Responsive

### 📝 COMMIT

```bash
git add .
git commit -m "feat: add My Formations page with progress tracking"
git push
```

---

### ÉTAPE 4.3 : Page Mon Profil

### 🎯 PROMPT POUR CLAUDE CODE

```
Je veux créer la page de profil utilisateur éditable.

**Route** : /dashboard/profil

**Sections :**

1. **Photo de profil**
   - Avatar actuel (initiales si pas de photo)
   - Bouton "Changer la photo"
   - Upload d'image avec preview
   - Tailles max : 2 Mo, formats : JPG, PNG

2. **Informations personnelles** (formulaire éditable)
   - Prénom*
   - Nom*
   - Email* (non modifiable, afficher message)
   - Téléphone
   - Date de naissance
   - Adresse
   - Code postal
   - Ville
   - Pays

3. **Changement de mot de passe**
   - Ancien mot de passe*
   - Nouveau mot de passe*
   - Confirmer mot de passe*
   - Validation : min 8 caractères, 1 majuscule, 1 chiffre

4. **Préférences**
   - Notifications email (toggle)
   - Langue (select : Français)
   - Fuseau horaire

5. **Danger Zone**
   - Bouton "Supprimer mon compte"
   - Confirmation modal avec texte à taper

**Fonctionnalités :**
- Formulaire avec validation (Zod)
- API route pour update profil : /api/user/profile
- API route pour upload photo : /api/user/avatar
- API route pour changement password : /api/user/password
- API route pour suppression compte : /api/user/delete
- Toast notifications pour succès/erreur
- Auto-save (optionnel) ou bouton "Enregistrer"

**Sécurité :**
- Vérifier ancien mot de passe avant changement
- Hash nouveau mot de passe (bcrypt)
- Confirmation par email pour suppression de compte
- Rate limiting sur les API routes

**Composants :**
- ProfileForm
- AvatarUpload
- PasswordChange
- DeleteAccountModal
```

### ✅ VALIDATION

```bash
# 1. Accéder à /dashboard/profil

# 2. Modifier les informations
# → Changer prénom/nom
# → Cliquer "Enregistrer"
# → Vérifier en BDD que les données sont à jour

# 3. Changer la photo
# → Upload une image
# → Preview affichée
# → Image sauvegardée

# 4. Changer le mot de passe
# → Entrer ancien mot de passe
# → Nouveau mot de passe
# → Confirmer
# → Se déconnecter
# → Reconnecter avec nouveau mot de passe

# 5. Tester suppression compte (attention !)
# → Modal de confirmation s'ouvre
# → Taper le texte requis
# → Compte supprimé
```

**Checklist :**
- [ ] Formulaire profil éditable
- [ ] Upload photo de profil fonctionne
- [ ] Changement mot de passe fonctionne
- [ ] Validation formulaire (Zod)
- [ ] Toast notifications
- [ ] API routes sécurisées
- [ ] Données sauvegardées en BDD
- [ ] Suppression compte avec confirmation

### 📝 COMMIT

```bash
git add .
git commit -m "feat: add editable user profile page"
git push
```

---

## PHASE 5 : PLATEFORME LMS

### 📋 OBJECTIF
Créer la plateforme d'apprentissage avec lecteur vidéo, drip content, progression.

### ⏱️ DURÉE ESTIMÉE
12-16 heures

---

### ÉTAPE 5.1 : Page Formation & Structure

### 🎯 PROMPT POUR CLAUDE CODE

```
Je veux créer la page d'une formation avec tous ses modules et leçons.

**Route dynamique** : /formation/[formationId]

**Layout de la page :**

Sidebar gauche (liste des modules) :
- Liste accordion des modules
- Pour chaque module :
  - Titre du module
  - Icône selon statut (débloqué, verrouillé, complété)
  - Durée estimée du module
  - Liste des leçons (dans accordion)
    - Titre de la leçon
    - Durée
    - Statut (complété ✓, en cours, verrouillé 🔒)
    - Cliquable si débloquée

Contenu principal (zone de lecture) :
- Si aucune leçon sélectionnée :
  - Vue d'ensemble de la formation
  - Description
  - Statistiques (modules, durée totale)
  - Bouton "Commencer" ou "Continuer"

**Logique de drip content :**
Selon le modèle Module :
- `unlockDelay` : nombre de jours avant déblocage
- Calculer date de déblocage : `enrolledAt + unlockDelay jours`
- Si date actuelle >= date de déblocage → module débloqué
- Sinon → afficher countdown ou date de déblocage

**Composants :**
- FormationLayout (layout avec sidebar)
- ModuleSidebar (sidebar avec accordions)
- ModuleAccordion (accordion par module)
- LessonItem (item de leçon)
- FormationOverview (vue d'ensemble)
- LockedBadge (badge verrouillé avec date)

**Fonctionnalités :**
- Scroll automatique vers leçon en cours
- Highlight leçon active
- Indicateurs visuels de progression
- Collapse/expand modules

**Données :**
- Récupérer Formation avec tous les Modules et Lessons
- Récupérer Enrollment (date d'inscription)
- Récupérer LessonProgress pour chaque leçon
- Calculer modules/leçons débloqués

Utilise Prisma pour les queries optimisées (include, orderBy).
```

### ✅ VALIDATION

```bash
# 1. Créer une formation de test en BDD avec modules et leçons

# 2. S'inscrire à la formation (Enrollment)

# 3. Accéder à /formation/[id]
# → Vue d'ensemble affichée
# → Sidebar avec modules

# 4. Vérifier drip content
# → Modules futurs verrouillés
# → Date de déblocage affichée
# → Modules débloqués cliquables

# 5. Cliquer sur une leçon débloquée
# → Charger la leçon dans le contenu principal
```

**Checklist :**
- [ ] Page formation accessible
- [ ] Sidebar avec tous les modules
- [ ] Accordions fonctionnels
- [ ] Drip content calculé correctement
- [ ] Modules verrouillés affichés
- [ ] Dates de déblocage visibles
- [ ] Leçons cliquables si débloquées
- [ ] Responsive

### 📝 COMMIT

```bash
git add .
git commit -m "feat: create formation page with drip content system"
git push
```

---

### ÉTAPE 5.2 : Lecteur vidéo & Page Leçon

### 🎯 PROMPT POUR CLAUDE CODE

```
Je veux créer le lecteur vidéo et la page de leçon.

**Route dynamique** : /formation/[formationId]/lesson/[lessonId]

**Contenu principal (remplace vue d'ensemble) :**

1. **Lecteur vidéo**
   - Utiliser une librairie : Plyr, video.js ou react-player
   - Contrôles complets (play, pause, volume, fullscreen)
   - Vitesse de lecture (0.5x, 1x, 1.25x, 1.5x, 2x)
   - Timeline avec progression
   - Sous-titres (si disponibles)
   - Shortcuts clavier (espace, flèches, M pour mute)

2. **Tracking de progression**
   - Écouter événement `onProgress`
   - Si vidéo regardée à 90% → marquer comme "complétée"
   - Sauvegarder progression en BDD (LessonProgress)
   - Mettre à jour en temps réel (debounce)

3. **Informations de la leçon**
   - Titre de la leçon
   - Description (markdown)
   - Durée
   - Date d'ajout

4. **Ressources téléchargeables**
   - Liste des fichiers PDF, DOCX, etc.
   - Bouton "Télécharger" par fichier
   - Icône selon type de fichier

5. **Section commentaires** (à ajouter Phase 7)
   - Placeholder pour l'instant

6. **Navigation**
   - Bouton "Leçon précédente" (si existe)
   - Bouton "Leçon suivante" (si existe et débloquée)
   - Marquage automatique comme "complétée"

**Modèles Prisma à ajouter :**

```prisma
model Lesson {
  // ... existant
  resources     Resource[]
  comments      Comment[]
}

model Resource {
  id            String   @id @default(cuid())
  lessonId      String
  lesson        Lesson   @relation(fields: [lessonId], references: [id])
  title         String
  fileUrl       String
  fileType      String
  fileSize      Int
  createdAt     DateTime @default(now())
}

model LessonProgress {
  id            String   @id @default(cuid())
  userId        String
  user          User     @relation(fields: [userId], references: [id])
  lessonId      String
  lesson        Lesson   @relation(fields: [lessonId], references: [id])
  completed     Boolean  @default(false)
  completedAt   DateTime?
  watchedSeconds Int     @default(0)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  @@unique([userId, lessonId])
}
```

**API Routes :**
- POST /api/lesson/[id]/progress
  - Mettre à jour la progression
  - Paramètres : watchedSeconds, completed

**Composants :**
- VideoPlayer (lecteur avec tracking)
- LessonContent (contenu de la leçon)
- ResourcesList (ressources téléchargeables)
- NavigationButtons (prev/next)

**Fonctionnalités :**
- Reprendre où on s'est arrêté (utiliser watchedSeconds)
- Débloquer module suivant si tout complété
- Animation de célébration si module terminé
```

### ✅ VALIDATION

```bash
# 1. Accéder à une leçon
# → /formation/[id]/lesson/[lessonId]

# 2. Tester le lecteur vidéo
# → Vidéo se charge
# → Contrôles fonctionnent
# → Vitesse de lecture fonctionne

# 3. Regarder 90% de la vidéo
# → Vérifier en BDD : LessonProgress.completed = true
# → Checkmark ✓ dans la sidebar

# 4. Tester navigation
# → "Leçon suivante" fonctionne
# → Si module terminé → débloquer suivant

# 5. Télécharger une ressource
# → Fichier téléchargé
```

**Checklist :**
- [ ] Lecteur vidéo fonctionne
- [ ] Tracking de progression opérationnel
- [ ] Marquage automatique "complété" à 90%
- [ ] Mise à jour en BDD
- [ ] Ressources téléchargeables
- [ ] Navigation prev/next
- [ ] Reprend où on s'est arrêté

### 📝 COMMIT

```bash
git add .
git commit -m "feat: add video player with progress tracking"
git push
```

---

### ÉTAPE 5.3 : Tableau Mon Parcours

### 🎯 PROMPT POUR CLAUDE CODE

```
Je veux créer la page "Mon Parcours" avec une timeline visuelle de progression.

**Route** : /dashboard/mon-parcours

**Contenu :**

1. **Timeline verticale**
   - Afficher tous les modules de la formation
   - Pour chaque module :
     - Icône (checkmark si complété, horloge si en cours, cadenas si verrouillé)
     - Titre du module
     - Nombre de leçons complétées / total
     - Barre de progression
     - Date de déblocage (si verrouillé)
     - Bouton "Continuer" ou "Commencer" si débloqué

2. **Statistiques globales** (en haut)
   - Progression totale (%)
   - Modules complétés / Total
   - Temps total passé (estimation)
   - Date de début de formation
   - Date estimée de fin

3. **Filtres**
   - Toutes les formations (si plusieurs)
   - Select pour choisir une formation

4. **Célébration**
   - Si formation 100% complétée :
     - Animation de célébration
     - Message de félicitations
     - Bouton "Télécharger mon certificat"

**Composants :**
- ProgressTimeline (timeline)
- TimelineItem (item de module)
- ProgressStats (statistiques)
- CelebrationModal (célébration)

**Fonctionnalités :**
- Calculer progression par module
- Calculer progression globale
- Afficher temps estimé restant
- Animation smooth scroll vers module en cours
```

### ✅ VALIDATION

```bash
# 1. Accéder à /dashboard/mon-parcours

# 2. Vérifier timeline
# → Tous les modules affichés
# → Icônes corrects selon statut
# → Progression affichée

# 3. Compléter un module entier
# → Vérifier que l'icône passe à checkmark
# → Progression mise à jour

# 4. Compléter la formation entière
# → Modal de célébration s'affiche
# → Bouton certificat disponible
```

**Checklist :**
- [ ] Timeline affichée
- [ ] Tous les modules présents
- [ ] Progression calculée correctement
- [ ] Icônes selon statut
- [ ] Dates de déblocage visibles
- [ ] Statistiques globales
- [ ] Célébration si 100%
- [ ] Responsive

### 📝 COMMIT

```bash
git add .
git commit -m "feat: add My Progress timeline page"
git push
```

---

### Suite du guide dans le prochain message...

Voulez-vous que je continue avec :
- Phase 6 : Gamification (badges, points, niveaux)
- Phase 7 : Forum & Communauté
- Phase 8 : Visioconférence & Calendrier
- Phase 9 : Blog & SEO
- Phase 10 : Dashboard Admin
- Phase 11 : Emails & Automatisations
- Phase 12 : Tests & Optimisation
- Phase 13 : Déploiement

Ou préférez-vous commencer à implémenter avec ce qui est déjà fourni ?
