/**
 * Code Connect configuration for Card Component
 * Maps Figma Card component (1609:1258) to Card.js
 */

import { figma } from "@figma/code-connect";
import { Card } from "./Card.js";

// Main Card component mapping
figma.connect(Card, "https://www.figma.com/design/FILE_KEY/FILE_NAME?node-id=1609-1258", {
  props: {
    title: figma.string("Text Container > Price"),
    description: figma.string("Text Container > Fix a price for your services"),  
    price: figma.string("Price Container > $45.00"),
    primaryButtonText: figma.string("Button Container > Button[Primary]"),
    secondaryButtonText: figma.string("Button Container > Button[Secondary]"),
  },
  example: (props) => (
    <Card 
      title={props.title}
      description={props.description}
      price={props.price}
      primaryButtonText={props.primaryButtonText}
      secondaryButtonText={props.secondaryButtonText}
    />
  ),
});

// Export for Code Connect
export { Card };
