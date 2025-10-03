/**
 * Code Connect configuration for Button component
 * This file connects the Figma Button component to our code implementation
 */

import { figma } from '@figma/code-connect';

// Configuration Code Connect pour le composant Button
figma.connect({
  // URL ou node ID du composant dans Figma
  figmaNodeUrl: 'https://www.figma.com/design/YOUR_FILE_KEY/YOUR_FILE_NAME?node-id=1609-1241',
  
  // Chemin vers le composant dans le code
  source: './src/components/Button.js',
  
  // Nom du composant
  component: 'Button',
  
  // Mapping des propriétés Figma vers les props du composant
  props: {
    hierarchy: figma.enum('Hierarchy', {
      'Primary': 'primary',
      'Secondary': 'secondary'
    }),
    text: figma.string('Button Text', 'Button')
  },
  
  // Template de rendu - comment utiliser le composant
  render: ({ hierarchy, text }) => `
    <div id="button-container"></div>
    <script>
      createButton('#button-container', {
        hierarchy: '${hierarchy}',
        text: '${text}',
        onClick: () => console.log('Button clicked: ${text}')
      });
    </script>
  `
});

// Export de la configuration pour référence
export const buttonCodeConnect = {
  figmaNodeId: '1609:1241',
  componentName: 'Button',
  variants: {
    primary: {
      hierarchy: 'primary',
      classes: 'bg-slate-500 hover:bg-slate-600 active:bg-slate-700 text-white'
    },
    secondary: {
      hierarchy: 'secondary', 
      classes: 'bg-slate-200 hover:bg-slate-300 active:bg-slate-400 text-slate-700'
    }
  },
  baseClasses: 'flex gap-2 items-center justify-center px-4 py-1.5 rounded-lg transition-all duration-200 font-source font-normal text-sm leading-5 font-smooth cursor-pointer select-none'
};
