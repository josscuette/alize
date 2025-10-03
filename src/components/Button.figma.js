/**
 * Code Connect configuration for Button Component
 * GitHub Source: https://github.com/josscuette/alize/blob/main/src/components/Button.js
 */

import { figma } from "@figma/code-connect";

// Button Component Code Connect mapping
figma.connect("https://github.com/josscuette/alize/blob/main/src/components/Button.js", {
  // Primary Button (Node ID: 1609:1235)
  figmaNodeUrl: "https://www.figma.com/design/f6Q26RRDgYcHrJkpdSqStm/Aliz%C3%A9-Tailwind-Test?node-id=1609-1235",
  
  props: {
    hierarchy: figma.enum("Hierarchy", {
      Primary: "primary",
      Secondary: "secondary"
    }),
    text: figma.string("Button")
  },
  
  example: ({ hierarchy, text }) => `
    // Button Component from GitHub
    const button = createButton('#my-button', {
      hierarchy: '${hierarchy}',
      text: '${text}',
      onClick: () => console.log('Button clicked!')
    });
  `
});

// Secondary Button mapping
figma.connect("https://github.com/josscuette/alize/blob/main/src/components/Button.js", {
  // Secondary Button (Node ID: 1609:1240) 
  figmaNodeUrl: "https://www.figma.com/design/f6Q26RRDgYcHrJkpdSqStm/Aliz%C3%A9-Tailwind-Test?node-id=1609-1240",
  
  props: {
    hierarchy: figma.enum("Hierarchy", {
      Primary: "primary", 
      Secondary: "secondary"
    }),
    text: figma.string("Button")
  },
  
  example: ({ hierarchy, text }) => `
    // Button Component from GitHub
    const button = createButton('#my-button', {
      hierarchy: '${hierarchy}',
      text: '${text}',
      onClick: () => console.log('Button clicked!')
    });
  `
});

export default "https://github.com/josscuette/alize/blob/main/src/components/Button.js";