# Slider component

Sliders are navigational components which can be used in conjunction with the band switcher layout to create a carousel effect on your page.

Hosted demos:
- (Traditional carousel slider as a full band)[http://casoncode.com/examples/carousel-slider.html]
- (Carousel-style slider inside a card)[http://casoncode.com/examples/card-slider.html]
- (Button-driven slider as a full band)[http://casoncode.com/examples/text-slider.html]

## Building the slider

Sliders have 3 navigation styles to choose from (they can also be used together):

- `[data-nav-style="arrows"]`  Arrows
- `[data-nav-style="text"]`  Clickable boxes with descriptive text
- `[data-nav-style="circles"]`  Clickable circles with or without text

#### `[data-slide-id]`
- This attribute connects the navigational elements to the corresponding content that it toggles between.
- Any string can go in here as long as it does not contain spaces or periods.
- This appears on the `.slider-nav` and the `.switcher-body` elements and must be identical or the content change will not trigger.

#### `[data-active]`
- This attribute can be either true or false; it indicates which navigational element is styled in the active state (i.e., filled in circle or if a directional arrow is visible).
- Only one navigational element should be set to active in the set.

#### `[data-slide-to]`
- This determines which content item this navigational element will slide to, updated by JS after a selection is made

#### `[data-direction]`
- Specific to arrows, this determines which direction through the content we are navigating.
- Valid values are `prev` and `next`
