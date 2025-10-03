/**
 * Button Component - Alizé Design System
 * 
 * Composant bouton avec variantes Primary et Secondary
 * Synchronisé avec Figma via Code Connect
 */

class Button {
  constructor(container, options = {}) {
    this.container = container;
    this.hierarchy = options.hierarchy || 'primary';
    this.text = options.text || 'Button';
    this.onClick = options.onClick || (() => {});
    this.buttonElement = null; // Référence pour cleanup
    
    this.render();
    this.bindEvents();
  }

  render() {
    const baseClasses = 'flex gap-2 items-center justify-center px-4 py-1.5 rounded-lg transition-all duration-200 font-source font-normal text-sm leading-5 font-smooth cursor-pointer select-none';
    
    const variants = {
      primary: 'bg-slate-500 hover:bg-slate-600 active:bg-slate-700 text-white',
      secondary: 'bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700'
    };

    // Validation avec fallback sécurisé
    const safeHierarchy = variants[this.hierarchy] ? this.hierarchy : 'primary';
    const classes = `${baseClasses} ${variants[safeHierarchy]}`;
    
    // Échappement XSS pour le texte
    const safeText = this.escapeHtml(this.text);
    
    this.container.innerHTML = `
      <button class="${classes}" data-hierarchy="${safeHierarchy}">
        <span class="whitespace-nowrap">${safeText}</span>
      </button>
    `;
  }

  // Méthode pour échapper HTML et prévenir XSS
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  bindEvents() {
    // Cleanup ancien event listener
    if (this.buttonElement && this.onClick) {
      this.buttonElement.removeEventListener('click', this.onClick);
    }
    
    // Nouvelle référence
    this.buttonElement = this.container.querySelector('button');
    if (this.buttonElement) {
      this.buttonElement.addEventListener('click', this.onClick);
    }
  }

  // Méthodes publiques pour changer les propriétés
  setHierarchy(hierarchy) {
    this.hierarchy = hierarchy;
    this.render();
    this.bindEvents();
  }

  setText(text) {
    this.text = text;
    this.render();
    this.bindEvents();
  }

  setOnClick(callback) {
    // Retirer l'ancien event listener
    if (this.buttonElement && this.onClick) {
      this.buttonElement.removeEventListener('click', this.onClick);
    }
    
    // Mettre à jour la référence
    this.onClick = callback;
    
    // Re-bind avec le nouveau callback
    if (this.buttonElement) {
      this.buttonElement.addEventListener('click', this.onClick);
    }
  }
}

// Factory function pour créer des boutons facilement
window.createButton = function(selector, options = {}) {
  const container = document.querySelector(selector);
  if (!container) {
    console.error(`Button container not found: ${selector}`);
    return null;
  }
  return new Button(container, options);
};

// Export pour modules ES6 si utilisé
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Button;
}
