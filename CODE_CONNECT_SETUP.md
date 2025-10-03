# Code Connect Setup - Button Component

## 📋 Configuration requise

Pour connecter le composant Button à Figma via Code Connect, suivez ces étapes :

### 1. 🚀 Publication du composant Figma
```
1. Dans Figma, sélectionnez le composant Button (Node ID: 1609:1241)
2. Clic droit → "Publish to library" 
3. Publier dans la librairie de l'équipe
```

### 2. 🔧 Installation Code Connect CLI
```bash
npm install -g @figma/code-connect
```

### 3. 📝 Configuration du mapping
```bash
# Dans le répertoire du projet
figma connect create src/components/Button.figma.js --node-id 1609:1241
```

### 4. 🎯 Commandes Code Connect

#### Publier les connexions
```bash
figma connect publish
```

#### Voir les connexions
```bash
figma connect list
```

#### Tester les connexions
```bash
figma connect preview --node-id 1609:1241
```

## 🎨 Mapping configuré

### Propriétés Figma → Code
- **Hierarchy** (Primary/Secondary) → `hierarchy` prop
- **Button Text** → `text` prop  
- **Node ID** : `1609:1241`

### Classes Tailwind générées
```javascript
// Primary variant
'bg-slate-500 hover:bg-slate-600 active:bg-slate-700 text-white'

// Secondary variant  
'bg-slate-200 hover:bg-slate-300 active:bg-slate-400 text-slate-700'
```

## 🔄 Workflow MCP + Code Connect

1. **Designer** : Créer/modifier le composant dans Figma
2. **Code Connect** : Synchroniser automatiquement les propriétés
3. **MCP** : Capturer la sélection avec `mcp_Figma_Desktop_get_code`
4. **Code** : Générer le composant Tailwind optimisé
5. **Test** : Vérifier le rendu dans le navigateur

## 📁 Structure des fichiers

```
src/components/
├── Button.js              # Composant JavaScript
├── Button.figma.js        # Configuration Code Connect
└── Button.md              # Documentation
```

## 🎯 Prochaines étapes : Modale

Une fois le Button connecté, nous pourrons :
1. Créer un composant Modal dans Figma
2. Utiliser MCP pour capturer la structure
3. Générer le code Tailwind avec nos Button components
4. Connecter via Code Connect pour la synchronisation

## 🔗 Liens utiles

- [Code Connect Documentation](https://www.figma.com/developers/code-connect)
- [Figma MCP Integration](https://www.figma.com/developers/api)
- [Tailwind Component Patterns](https://tailwindui.com/components)
