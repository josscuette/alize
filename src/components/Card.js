/**
 * Card Component - Updated from Figma MCP Detection
 * Features: Responsive width with proper constraints
 * Node ID: 1609:1258
 */

class Card {
  constructor(container, props = {}) {
    this.container = typeof container === 'string' ? document.querySelector(container) : container;
    
    if (!this.container) {
      console.error('Card: Container not found');
      return;
    }

    // Props with defaults matching Figma detection
    this.title = props.title || 'Price';
    this.description = props.description || 'Fix a price for your services';
    this.price = props.price || '$45.00';
    this.deadlineTitle = props.deadlineTitle || 'Deadline';
    this.deadlineDescription = props.deadlineDescription || 'When we deliver';
    this.deadlineValue = props.deadlineValue || 'December 2025';
    this.primaryButtonText = props.primaryButtonText || 'Subscribe';
    this.secondaryButtonText = props.secondaryButtonText || 'Cancel';
    this.onPrimaryClick = props.onPrimaryClick || (() => console.log('Primary button clicked'));
    this.onSecondaryClick = props.onSecondaryClick || (() => console.log('Secondary button clicked'));
    
    this.render();
    this.bindEvents();
  }

  render() {
    // Échappement XSS pour toutes les props
    const safeTitle = this.escapeHtml(this.title);
    const safeDescription = this.escapeHtml(this.description);
    const safePrice = this.escapeHtml(this.price);
    const safeDeadlineTitle = this.escapeHtml(this.deadlineTitle);
    const safeDeadlineDescription = this.escapeHtml(this.deadlineDescription);
    const safeDeadlineValue = this.escapeHtml(this.deadlineValue);
    const safePrimaryButtonText = this.escapeHtml(this.primaryButtonText);
    const safeSecondaryButtonText = this.escapeHtml(this.secondaryButtonText);

    this.container.innerHTML = `
      <!-- Card Container (bg-white restored) -->
      <div class="bg-white border border-slate-200 border-solid flex flex-col gap-6 items-start p-6 rounded-xl w-full font-smooth" data-name="Card" data-node-id="1609:1258">
        
        <!-- Content Container (groups both sections) -->
        <div class="flex flex-col gap-4 items-start w-full" data-node-id="1609:1297">
          
          <!-- Price Section -->
          <div class="flex gap-5 items-center w-full" data-name="Header" data-node-id="1609:1253">
            <!-- Price Text Container -->
            <div class="flex-1 flex flex-col font-source leading-6 text-base" data-name="Text Container" data-node-id="1609:1250">
              <p class="text-slate-800 font-normal w-full" data-node-id="1609:1248">${safeTitle}</p>
              <p class="text-slate-500 font-normal w-full" data-node-id="1609:1249">${safeDescription}</p>
            </div>
            
            <!-- Price Tag -->
            <div class="bg-slate-50 border border-slate-200 border-solid flex gap-2 items-center justify-center px-2 py-1 rounded-md shrink-0" data-node-id="1609:1291">
              <p class="font-source leading-6 text-slate-500 text-base whitespace-nowrap font-normal">${safePrice}</p>
            </div>
          </div>
          
          <!-- Deadline Section -->
          <div class="flex gap-5 items-center w-full" data-name="Header" data-node-id="1609:1274">
            <!-- Deadline Text Container -->
            <div class="flex-1 flex flex-col font-source leading-6 text-base" data-name="Text Container" data-node-id="1609:1275">
              <p class="text-slate-800 font-normal" data-node-id="1609:1276" style="width: min-content">${safeDeadlineTitle}</p>
              <p class="text-slate-500 font-normal whitespace-nowrap" data-node-id="1609:1277">${safeDeadlineDescription}</p>
            </div>
            
            <!-- Deadline Tag -->
            <div class="bg-slate-50 border border-slate-200 border-solid flex gap-2 items-center justify-center px-2 py-1 rounded-md shrink-0" data-node-id="1609:1294">
              <p class="font-source leading-6 text-slate-500 text-base whitespace-nowrap font-normal">${safeDeadlineValue}</p>
            </div>
          </div>
          
        </div>
        
        <!-- Divider Line -->
        <div class="h-0 w-full relative" data-node-id="1609:1254">
          <div class="w-full h-px bg-slate-200"></div>
        </div>
        
        <!-- Button Container -->
        <div class="flex gap-3 items-center justify-end w-full" data-name="Button Container" data-node-id="1609:1247">
          <!-- Secondary Button -->
          <button class="bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 flex gap-2 items-center justify-center px-4 py-1.5 rounded-lg transition-all duration-200 font-source font-normal text-sm leading-5 font-smooth cursor-pointer select-none" data-hierarchy="secondary" data-node-id="1609:1244">
            <span class="whitespace-nowrap">${safeSecondaryButtonText}</span>
          </button>
          
          <!-- Primary Button -->
          <button class="bg-slate-500 hover:bg-slate-600 active:bg-slate-700 text-white flex gap-2 items-center justify-center px-4 py-1.5 rounded-lg transition-all duration-200 font-source font-normal text-sm leading-5 font-smooth cursor-pointer select-none" data-hierarchy="primary" data-node-id="1609:1242">
            <span class="whitespace-nowrap">${safePrimaryButtonText}</span>
          </button>
        </div>
        
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
    // Attach click events to buttons
    const secondaryBtn = this.container.querySelector('button[data-hierarchy="secondary"]');
    const primaryBtn = this.container.querySelector('button[data-hierarchy="primary"]');
    
    if (secondaryBtn) {
      secondaryBtn.addEventListener('click', this.onSecondaryClick);
    }
    
    if (primaryBtn) {
      primaryBtn.addEventListener('click', this.onPrimaryClick);
    }
  }

  // Public methods to update card properties
  setTitle(title) {
    this.title = title;
    this.render();
    this.bindEvents();
  }

  setDescription(description) {
    this.description = description;
    this.render();
    this.bindEvents();
  }

  setPrice(price) {
    this.price = price;
    this.render();
    this.bindEvents();
  }

  setDeadlineTitle(deadlineTitle) {
    this.deadlineTitle = deadlineTitle;
    this.render();
    this.bindEvents();
  }

  setDeadlineDescription(deadlineDescription) {
    this.deadlineDescription = deadlineDescription;
    this.render();
    this.bindEvents();
  }

  setDeadlineValue(deadlineValue) {
    this.deadlineValue = deadlineValue;
    this.render();
    this.bindEvents();
  }

  setPrimaryButtonText(text) {
    this.primaryButtonText = text;
    this.render();
    this.bindEvents();
  }

  setSecondaryButtonText(text) {
    this.secondaryButtonText = text;
    this.render();
    this.bindEvents();
  }

  // Update all properties at once
  updateCard(props) {
    Object.assign(this, props);
    this.render();
    this.bindEvents();
  }
}

// Factory function for easy creation
function createCard(containerSelector, props) {
  return new Card(containerSelector, props);
}

// Make it globally available
if (typeof window !== 'undefined') {
  window.Card = Card;
  window.createCard = createCard;
}
