import { html, css, LitElement } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { repeat } from 'lit/directives/repeat.js';

class Slick extends LitElement {
  // Make localization attributes reactive
  @property() dir: string;

  /** Emits a custom event with more convenient defaults. */
  emit(name: string, options?: CustomEventInit) {
    const event = new CustomEvent(name, {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {},
      ...options
    });

    this.dispatchEvent(event);

    return event;
  }
}

@customElement('slick-navigator')
export class SlickNavigator extends Slick {
  static styles = css`
    :host {
      display: flex;
      flex-flow: row nowrap;
      gap: 2em;
      align-items: center;
      justify-content: center;
      margin-end: 1em;
    }

    button {
      transition-property: background 0.2s ease-in 0s, color 0.2s ease-in 0s;
      cursor: pointer;
      background: var(--surface-white, #fff);
      color: var(--text-black, #252527);
      border: 1px solid var(--surface-black, #252527);
      border-radius: 50%;
      aspect-ratio: 1/1;
      width: 2em;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 600;
      text-align: center;
      font-size: 0.9em;
    }

    button[current],
    button:not([current]):hover {
      background-color: var(--surface-black, #252527);
      color: var(--text-white, #fff);
    }
  `;

  @property({ type: String }) variant: 'circle' | 'arrow' | 'text' = 'circle';

  @property({ type: String, attribute: 'slider-id' })
  set sliderId(value: string) {
    const fetchEl = document.getElementById(value) as SlickSlider;
    if (!fetchEl || fetchEl.tagName !== 'SLICK-SLIDER') {
      console.warn(`Could not find a slider element with id ${value}`);
      return;
    }
    this.slider = fetchEl;
  }

  private slider: SlickSlider;

  disconnectedCallback() {
    super.disconnectedCallback();

    if (!this.slider) return;
    this.slider.removeEventListener('keydown', this.handleDocumentKeyDown);
  }

  firstUpdated() {
    if (!this.slider) return;

    /* Attach the event listener to the slider so that it can be triggered when the navigator is focused. */
    this.slider.addEventListener('keydown', this.handleDocumentKeyDown.bind(this));
  }

  /* todo: request re-render active state after slider is done */
  handleDocumentKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      event.stopPropagation();
      this.slider.requestPrevious();
    } else if (event.key === 'ArrowRight') {
      event.stopPropagation();
      this.slider.requestNext();
    }
  }

  handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const index = parseInt(target.getAttribute('slide-id')!);
    this.slider.currentSlide = index;
    this.requestUpdate();
  }

  private renderCircles() {
    if (!this.slider) return html`test`;
    if (!this.slider.slides) return html`foo`;

    return html`${repeat(
      this.slider.slides,
      (slide, index) => html`
        <button label=${slide.label} slide-id=${index} @click=${this.handleClick} ?current=${slide.current}>
          ${slide.label ?? index++}
        </button>
      `
    )}`;
  }

  render() {
    return html`${this.renderCircles()}`;
  }
}

@customElement('slick-slider')
export class SlickSlider extends Slick {
  static styles = css`
    :host {
      display: flex;
      flex-flow: column nowrap;
      gap: 1em;
    }

    slot {
      display: flex;
      flex-flow: row nowrap;
    }

    ::slotted(:not(slick-slide)) {
      display: none;
    }

    ::slotted(*) {
      width: 100%;
    }

    ::slotted([current]) {
      transform: translateX(0);
    }

    ::slotted([previous]) {
      transform: translateX(100%);
    }

    ::slotted([next]) {
      transform: translateX(-100%);
    }
  `;

  @queryAssignedElements({
    selector: 'slick-slide',
    flatten: true
  })
  slides: SlickSlide[];

  @property({ type: String, attribute: 'navigation-style' }) navigationStyle?: SlickNavigator['variant'];

  /**
   * Indicates which slide is current. You can update this attribute to update the current slide.
   * Count starts at 0.
   */
  _currentSlide = 0;
  @property({ type: Number, attribute: 'current-slide', reflect: true })
  get currentSlide() {
    return this._currentSlide;
  }
  set currentSlide(value: number) {
    const oldValue = this._currentSlide;
    if (value === oldValue) return;
    if (value < 0 || value > this.slides.length - 1) {
      console.warn(
        `Slide ${value} is out of bounds. Note that by default, slides are indexed starting with the first slide at 0.`
      );
      return;
    }

    this._currentSlide = value;
    this.updateSlides();
    this.requestUpdate('currentSlide', oldValue);
  }

  @property({ type: String }) height: 'static' | 'variable' = 'static';

  updateSlides() {
    this.slides.forEach((slide, index) => {
      slide.current = index === this.currentSlide;
      slide.previous = index < this.currentSlide;
      slide.next = index > this.currentSlide;
    });
  }

  requestNext() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide += 1;
    } else {
      this.currentSlide = 0;
    }
  }

  requestPrevious() {
    if (this.currentSlide > 0) {
      this.currentSlide -= 1;
    } else {
      this.currentSlide = this.slides.length - 1;
    }
  }

  firstUpdated() {
    this.updateSlides();
  }

  render() {
    return html`
      <slot></slot>
      <slick-navigator variant=${ifDefined(this.navigationStyle)} .slider=${this}></slick-navigator>
    `;
  }
}

@customElement('slick-slide')
export class SlickSlide extends Slick {
  static styles = css``;

  @property({ type: String }) label: string;
  /**
   * Indicates if this slide is active. This attribute is set automatically when the slide is
   * selected by the slider.
   */
  @property({ type: Boolean, reflect: true }) current = false;
  @property({ type: Boolean, reflect: true }) previous = false;
  @property({ type: Boolean, reflect: true }) next = false;

  render() {
    return html`<slot></slot>`;
  }
}
