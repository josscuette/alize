/**
 * Code Connect configuration for Tag Component
 * GitHub Source: https://github.com/josscuette/alize/blob/main/src/components/Tag.js
 */

import { figma } from "@figma/code-connect";

// Tag Component
figma.connect("1609:1290", {
  source: "https://github.com/josscuette/alize/blob/main/src/components/Tag.js",
  component: "Tag",
  props: {
    text: figma.string("Tag"),
    variant: figma.enum("Variant", {
      "Default": "default",
      "Primary": "primary", 
      "Secondary": "secondary",
      "Success": "success",
      "Warning": "warning",
      "Error": "error"
    }),
    size: figma.enum("Size", {
      "XS": "xs",
      "SM": "sm",
      "MD": "md", 
      "LG": "lg"
    })
  },
  example: ({ text, variant, size }) => `
// Tag Component from GitHub
const tag = createTag('#my-tag', {
  text: '${text}',
  variant: '${variant || 'default'}',
  size: '${size || 'sm'}',
  onClick: () => console.log('Tag clicked: ${text}')
});`
});