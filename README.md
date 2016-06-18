# Slider component

Sliders are navigational components which can be used in conjunction with the band switcher layout to create a carousel effect on your page.

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

```full_toggle
```

```full_toggle
<section class="band" data-band-background="black" data-theme="dark">
    <div class="band-container">
        <header class="slider" data-nav-style="text">
            <ul class="slider-nav" data-slide-id="demo2">
                <li class="slider-nav-item" data-slide-to="slide1" data-active="true">
                    <a class="slider-nav-item-link" title="Content 1">Option 1</a>
                </li>
                <li class="slider-nav-item" data-slide-to="slide2" active="false">
                    <a class="slider-nav-item-link" title="Content 2">Option 2</a>
                </li>
                <li class="slider-nav-item" data-slide-to="slide3" data-active="false">
                    <a class="slider-nav-item-link" title="Content 3">Option 3</a>
                </li>
            </ul>
        </header>
        <div class="switcher">
            <div class="switcher-body" data-slide-id="demo2">
                    <article class="switcher-slide" data-state="current" id="slide1">
                         <div class="group" data-layout="stacked">
                             <header class="band-header">
                                 <h3 class="band-header-title">Demo</h3>
                                 <h4 class="band-header-headline">Slide #1</h4>
                             </header>
                             <div class="generic">
                                 <p>Culpa iis non esse ullamco, hic nulla reprehenderit iis in dolore culpa id deserunt, nam incididunt efflorescere ea quem commodo cernantur est ubi an dolor deserunt, culpa admodum ut possumus non ubi iudicem graviterque. Qui iis amet
                                     minim fugiat, litteris legam te doctrina fidelissimae. Quo quem officia ex
                                     noster singulis e nostrud qui lorem si ubi dolore mandaremus sed arbitror ut
                                     culpa offendit et ab est consectetur ab cupidatat quorum ut consequat
                                     distinguantur nam quae ullamco ubi deserunt, iis esse sempiternum.</p>
                             </div>
                             <footer class="cta">
                                 <a class="cta-link" data-cta-type="primary">Learn more</a>
                             </footer>
                        </div>
                    </article>
                    <article class="switcher-slide" data-state="next" id="slide2">
                         <div class="group" data-layout="stacked">
                             <header class="band-header">
                                 <h3 class="band-header-title">Demo</h3>
                                 <h4 class="band-header-headline">Slide #2</h4>
                             </header>
                             <div class="generic">
                                 <p>Culpa iis non esse ullamco, hic nulla reprehenderit iis in dolore culpa id
                                     deserunt, nam incididunt efflorescere ea quem commodo cernantur est ubi an dolor
                                     deserunt, culpa admodum ut possumus non ubi iudicem graviterque. Qui iis amet
                                     minim fugiat, litteris legam te doctrina fidelissimae. Quo quem officia ex
                                     noster singulis e nostrud qui lorem si ubi dolore mandaremus sed arbitror ut
                                     culpa offendit et ab est consectetur ab cupidatat quorum ut consequat
                                     distinguantur nam quae ullamco ubi deserunt, iis esse sempiternum.</p>
                             </div>
                             <footer class="cta">
                                 <a class="cta-link" data-cta-type="primary">Learn more</a>
                             </footer>
                        </div>
                    </article>
                    <article class="switcher-slide" data-state="next" id="slide3">
                         <div class="group" data-layout="stacked">
                             <header class="band-header">
                                 <h3 class="band-header-title">Demo</h3>
                                 <h4 class="band-header-headline">Slide #3</h4>
                             </header>
                             <div class="generic">
                                 <p>Culpa iis non esse ullamco, hic nulla reprehenderit iis in dolore culpa id
                                     deserunt, nam incididunt efflorescere ea quem commodo cernantur est ubi an dolor
                                     deserunt, culpa admodum ut possumus non ubi iudicem graviterque. Qui iis amet
                                     minim fugiat, litteris legam te doctrina fidelissimae. Quo quem officia ex
                                     noster singulis e nostrud qui lorem si ubi dolore mandaremus sed arbitror ut
                                     culpa offendit et ab est consectetur ab cupidatat quorum ut consequat
                                     distinguantur nam quae ullamco ubi deserunt, iis esse sempiternum.</p>
                             </div>
                             <footer class="cta">
                                 <a class="cta-link" data-cta-type="primary">Learn more</a>
                             </footer>
                        </div>
                    </article>

            </div>
        </div>
    </div>
</section>
```
