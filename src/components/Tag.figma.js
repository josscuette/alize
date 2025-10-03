/**
 * Code Connect configuration for Tag Component
 * GitHub Source: https://github.com/josscuette/alize/blob/main/src/components/Tag.js
 */

import { figma } from "@figma/code-connect";

// Tag Component Code Connect mapping
figma.connect("https://github.com/josscuette/alize/blob/main/src/components/Tag.js", {
  // Tag Component (Node ID: 1609:1290)
  figmaNodeUrl: "https://www.figma.com/design/f6Q26RRDgYcHrJkpdSqStm/Aliz%C3%A9-Tailwind-Test?node-id=1609-1290",
  
  props: {
    text: figma.string("Tag"),
    variant: figma.enum("Variant", {
      Default: "default",
      Primary: "primary",
      Secondary: "secondary", 
      Success: "success",
      Warning: "warning",
      Error: "error"
    }),
    size: figma.enum("Size", {
      XS: "xs",
      SM: "sm", 
      MD: "md",
      LG: "lg"
    })
  },
  
  example: ({ text, variant, size }) => `
    // Tag Component from GitHub
    const tag = createTag('#my-tag', {
      text: '${text}',
      variant: '${variant || 'default'}',
      size: '${size || 'sm'}',
      onClick: () => console.log('Tag clicked: ${text}')
    });
  `
});

export default "https://github.com/josscuette/alize/blob/main/src/components/Tag.js";