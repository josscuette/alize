/**
 * Code Connect configuration for Card Component
 * GitHub Source: https://github.com/josscuette/alize/blob/main/src/components/Card.js
 */

import { figma } from "@figma/code-connect";

// Card Component Code Connect mapping
figma.connect("https://github.com/josscuette/alize/blob/main/src/components/Card.js", {
  // Card Component (Node ID: 1609:1258)
  figmaNodeUrl: "https://www.figma.com/design/f6Q26RRDgYcHrJkpdSqStm/Aliz%C3%A9-Tailwind-Test?node-id=1609-1258",
  
  props: {
    title: figma.string("Price"),
    description: figma.string("Fix a price for your services"),
    price: figma.string("$45.00"),
    deadlineTitle: figma.string("Deadline"),
    deadlineDescription: figma.string("When we deliver"),
    deadlineValue: figma.string("December 2025"),
    primaryButtonText: figma.string("Subscribe"),
    secondaryButtonText: figma.string("Cancel")
  },
  
  example: ({ title, description, price, deadlineTitle, deadlineDescription, deadlineValue, primaryButtonText, secondaryButtonText }) => `
    // Card Component from GitHub
    const card = createCard('#my-card', {
      title: '${title}',
      description: '${description}',
      price: '${price}',
      deadlineTitle: '${deadlineTitle}',
      deadlineDescription: '${deadlineDescription}',
      deadlineValue: '${deadlineValue}',
      primaryButtonText: '${primaryButtonText}',
      secondaryButtonText: '${secondaryButtonText}',
      onPrimaryClick: () => console.log('Primary clicked!'),
      onSecondaryClick: () => console.log('Secondary clicked!')
    });
  `
});

export default "https://github.com/josscuette/alize/blob/main/src/components/Card.js";