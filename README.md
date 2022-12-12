# Slider component

Sliders are navigational components which can be used in conjunction with the band switcher layout to create a carousel effect on your page.

### Traditional carousel slider as a full band

<img width="1021" alt="Screenshot 2022-12-11 at 10 14 35 PM" src="https://user-images.githubusercontent.com/1840295/206953053-407e638e-614a-49fd-a142-5ea3abad71b2.png">

### Carousel-style slider inside a card

<img width="1346" alt="Screenshot 2022-12-11 at 10 12 35 PM" src="https://user-images.githubusercontent.com/1840295/206952909-37fad477-1c6e-42ee-9df8-82432c33ca5c.png">

### Button-driven slider as a full band

<img width="1346" alt="Screenshot 2022-12-11 at 10 13 47 PM" src="https://user-images.githubusercontent.com/1840295/206952996-fa43ac04-f1e7-410a-91b0-3386a19c40ef.png">

[Click here to view the demos](http://bit.ly/slick-codepen)

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
