/**
 * Code Connect configuration for Button Component
 * GitHub Source: https://github.com/josscuette/alize/blob/main/src/components/Button.js
 */

import { figma } from "@figma/code-connect";

// Button Component - Primary variant
figma.connect("1609:1235", {
  source: "https://github.com/josscuette/alize/blob/main/src/components/Button.js",
  component: "Button",
  variant: {
    "Hierarchy": "Primary"
  },
  props: {
    text: figma.string("Button")
  },
  example: ({ text }) => `
// Button Component from GitHub
const button = createButton('#my-button', {
  hierarchy: 'primary',
  text: '${text}',
  onClick: () => console.log('Primary button clicked!')
});`
});

// Button Component - Secondary variant  
figma.connect("1609:1240", {
  source: "https://github.com/josscuette/alize/blob/main/src/components/Button.js", 
  component: "Button",
  variant: {
    "Hierarchy": "Secondary"
  },
  props: {
    text: figma.string("Button")
  },
  example: ({ text }) => `
// Button Component from GitHub
const button = createButton('#my-button', {
  hierarchy: 'secondary', 
  text: '${text}',
  onClick: () => console.log('Secondary button clicked!')
});`
});