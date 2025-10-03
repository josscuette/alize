/**
 * Code Connect configuration for Card Component
 * GitHub Source: https://github.com/josscuette/alize/blob/main/src/components/Card.js
 */

import { figma } from "@figma/code-connect";

// Card Component
figma.connect("1609:1258", {
  source: "https://github.com/josscuette/alize/blob/main/src/components/Card.js",
  component: "Card",
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
});`
});