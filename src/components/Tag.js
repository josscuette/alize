/**
 * Tag Component - Detected from Figma MCP
 * Node ID: 1609:1290
 * A simple tag/badge component with customizable text and styling
 */

class Tag {
  constructor(container, props = {}) {
    this.container = typeof container === 'string' ? document.querySelector(container) : container;
    
    if (!this.container) {
      console.error('Tag: Container not found');
      return;
    }

    // Props with defaults matching Figma detection
    this.text = props.text || 'Tag';
    this.variant = props.variant || 'default'; // default, primary, secondary, success, warning, error
    this.size = props.size || 'sm'; // xs, sm, md, lg
    this.onClick = props.onClick || null;
    
    this.render();
    this.bindEvents();
  }

  render() {
    // Base classes from Figma detection
    const baseClasses = 'border border-solid flex gap-2 items-center justify-center rounded-md font-source font-normal transition-all duration-200 cursor-default select-none';
    
    // Size variants
    const sizeClasses = {
      xs: 'px-1.5 py-0.5 text-xs leading-4',
      sm: 'px-2 py-1 text-sm leading-5',
      md: 'px-3 py-1.5 text-base leading-6',
      lg: 'px-4 py-2 text-lg leading-7'
    };

    // Color variants
    const variantClasses = {
      default: 'bg-slate-50 border-slate-200 text-slate-500',
      primary: 'bg-blue-50 border-blue-300 text-blue-700',
      secondary: 'bg-gray-50 border-gray-300 text-gray-700',
      success: 'bg-green-50 border-green-300 text-green-700',
      warning: 'bg-yellow-50 border-yellow-300 text-yellow-700',
      error: 'bg-red-50 border-red-300 text-red-700'
    };

    const classes = [
      baseClasses,
      sizeClasses[this.size] || sizeClasses.sm,
      variantClasses[this.variant] || variantClasses.default,
      this.onClick ? 'cursor-pointer hover:opacity-80 active:opacity-60' : ''
    ].join(' ');

    // Échappement XSS pour le texte
    const safeText = this.escapeHtml(this.text);

    this.container.innerHTML = `
      <div class="${classes}" data-name="Tag" data-node-id="1609:1290">
        <span class="whitespace-nowrap">${safeText}</span>
      </div>
    `;
  }

  // Méthode pour échapper HTML et prévenir XSS
  escapeHtml(text) {
    if (typeof text !== 'string') return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  bindEvents() {
    if (this.onClick) {
      const tagElement = this.container.querySelector('[data-name="Tag"]');
      if (tagElement) {
        tagElement.addEventListener('click', this.onClick);
      }
    }
  }

  // Public methods to update tag properties
  setText(text) {
    this.text = text;
    this.render();
    this.bindEvents();
  }

  setVariant(variant) {
    this.variant = variant;
    this.render();
    this.bindEvents();
  }

  setSize(size) {
    this.size = size;
    this.render();
    this.bindEvents();
  }

  // Update all properties at once
  updateTag(props) {
    Object.assign(this, props);
    this.render();
    this.bindEvents();
  }
}

// Factory function for easy creation
function createTag(containerSelector, props) {
  return new Tag(containerSelector, props);
}

// Make it globally available
if (typeof window !== 'undefined') {
  window.Tag = Tag;
  window.createTag = createTag;
}
