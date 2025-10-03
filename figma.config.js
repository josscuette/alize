/**
 * Figma Code Connect Configuration
 * This file tells Code Connect where to find our components and repository
 */

export default {
  // Repository information
  repository: {
    url: "https://github.com/josscuette/alize",
    branch: "main"
  },
  
  // Component directories
  include: [
    "src/components/**/*.figma.js"
  ],
  
  // Exclude patterns
  exclude: [
    "node_modules/**",
    "build/**",
    "*.test.js"
  ],
  
  // Output configuration
  output: {
    format: "json",
    destination: ".figma/code-connect.json"
  }
};
