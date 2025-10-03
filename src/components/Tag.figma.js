/**
 * Code Connect configuration for Tag Component
 * Maps Figma Tag component (1609:1290) to Tag.js
 */

import { figma } from "@figma/code-connect";
import { Tag } from "./Tag.js";

// Main Tag component mapping
figma.connect(Tag, "https://www.figma.com/design/FILE_KEY/FILE_NAME?node-id=1609-1290", {
  props: {
    text: figma.string("Tag"),
    variant: figma.enum("variant", {
      Default: "default",
      Primary: "primary", 
      Secondary: "secondary",
      Success: "success",
      Warning: "warning",
      Error: "error"
    }),
    size: figma.enum("size", {
      XS: "xs",
      SM: "sm",
      MD: "md", 
      LG: "lg"
    }),
  },
  example: (props) => (
    <Tag 
      text={props.text}
      variant={props.variant}
      size={props.size}
    />
  ),
});

// Export for Code Connect
export { Tag };
