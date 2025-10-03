# Alizé Design System

> Un design system vanilla moderne avec Tailwind CSS v4, synchronisé avec Figma via Code Connect et MCP.

## 🎨 Vue d'ensemble

Alizé est un design system vanilla JavaScript qui utilise Tailwind CSS v4 pour créer des composants réutilisables. Le projet est entièrement synchronisé avec Figma grâce à Code Connect et MCP (Model Context Protocol) pour un workflow design-to-code fluide.

## ✨ Fonctionnalités

- **🎯 Components vanilla** : Button, Card, Tag avec variants
- **🎨 Tailwind CSS v4** : Dernière version avec toutes les utilités
- **🔗 Figma Code Connect** : Synchronisation bidirectionnelle design ↔ code
- **🔍 MCP Integration** : Détection automatique des changements Figma
- **🛡️ Sécurisé** : Protection XSS, gestion mémoire, validation des props
- **📱 Responsive** : Design adaptatif avec contraintes Figma respectées
- **⚡ Performance** : Factory functions, event listeners optimisés

## 🚀 Installation

```bash
# Clone le repo
git clone https://github.com/josscuette/alize.git
cd alize

# Install dependencies
npm install

# Build CSS
npm run build

# Serve locally
npm run serve
```

## 📦 Scripts disponibles

```bash
npm run dev          # Watch mode pour développement
npm run build        # Build production
npm run serve        # Serveur local Python
npm run figma-tokens # Extraction tokens Figma (HEX)
```

## 🧩 Composants

### Button Component
```javascript
// Création d'un bouton
const button = createButton('#my-button', {
  hierarchy: 'primary', // 'primary' | 'secondary'
  text: 'Click me',
  onClick: () => console.log('Clicked!')
});

// Mise à jour dynamique
button.setText('New text');
button.setHierarchy('secondary');
```

### Card Component
```javascript
// Création d'une card
const card = createCard('#my-card', {
  title: 'Price',
  description: 'Fix a price for your services',
  price: '$45.00',
  deadlineTitle: 'Deadline',
  deadlineDescription: 'When we deliver',
  deadlineValue: 'December 2025',
  primaryButtonText: 'Subscribe',
  secondaryButtonText: 'Cancel'
});
```

### Tag Component
```javascript
// Création d'un tag
const tag = createTag('#my-tag', {
  text: 'New',
  variant: 'primary', // 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size: 'sm' // 'xs' | 'sm' | 'md' | 'lg'
});
```

## 🎨 Workflow Figma

### Code Connect Setup

1. **Composants mappés** :
   - Button: `1609:1235` (Primary), `1609:1240` (Secondary)
   - Card: `1609:1258`
   - Tag: `1609:1290`

2. **Liens GitHub** dans Code Connect :
   ```
   Button: https://github.com/josscuette/alize/blob/main/src/components/Button.js
   Card: https://github.com/josscuette/alize/blob/main/src/components/Card.js
   Tag: https://github.com/josscuette/alize/blob/main/src/components/Tag.js
   ```

### MCP Detection

Le projet utilise MCP pour détecter automatiquement les changements Figma :
- Détection de structure via `get_code`
- Synchronisation des propriétés Autolayout
- Conversion automatique en classes Tailwind
- Mise à jour des Node IDs

## 🛡️ Sécurité

- **Protection XSS** : Échappement HTML pour tous les props
- **Validation** : Fallbacks sécurisés pour toutes les propriétés
- **Memory management** : Cleanup des event listeners
- **Type safety** : Validation des variants et tailles

## 🎯 Design Tokens

Les tokens sont extraits automatiquement de Tailwind et convertis en format compatible Figma :

```bash
npm run figma-tokens
```

Génère `figma-tokens-hex.json` avec :
- Couleurs en format HEX
- Espacements (spacing)
- Tailles (sizing)
- Typographie

## 📁 Structure

```
alizé/
├── src/
│   ├── components/
│   │   ├── Button.js          # Composant Button
│   │   ├── Button.figma.js    # Code Connect Button
│   │   ├── Card.js            # Composant Card
│   │   ├── Card.figma.js      # Code Connect Card
│   │   ├── Tag.js             # Composant Tag
│   │   └── Tag.figma.js       # Code Connect Tag
│   ├── input.css              # CSS source avec @import tailwindcss
│   └── index.html             # Demo page
├── build/
│   └── output.css             # CSS compilé
├── tailwind.config.js         # Config Tailwind v4
├── package.json               # Dependencies & scripts
└── README.md                  # Documentation
```

## 🌟 Utilisation en production

### Import direct
```html
<script src="./src/components/Button.js"></script>
<script src="./src/components/Card.js"></script>
<script src="./src/components/Tag.js"></script>
<link rel="stylesheet" href="./build/output.css">
```

### Factory functions
```javascript
// Création simple
const button = createButton('#button', { hierarchy: 'primary', text: 'Action' });
const card = createCard('#card', { title: 'Title', price: '$99' });
const tag = createTag('#tag', { text: 'Beta', variant: 'warning' });
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/amazing-feature`)
3. Commit les changes (`git commit -m 'Add amazing feature'`)
4. Push la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📄 License

MIT License - voir le fichier LICENSE pour plus de détails.

## 🔗 Liens utiles

- [Figma Design](https://www.figma.com/design/f6Q26RRDgYcHrJkpdSqStm/Aliz%C3%A9-Tailwind-Test)
- [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4-alpha)
- [Code Connect Documentation](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect)

---

Créé avec ❤️ par [Josselin Cuette](https://github.com/josscuette)