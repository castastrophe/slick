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
<section class="band" data-band-background="gray">
    <div class="band-container">
        <div class="group" data-layout="2 8 2 nobreak">
            <div class="slider" data-nav-style="arrows">
                <div class="slider-nav" data-slide-id="demo1">
                    <div class="slider-nav-item" data-slide-to="0" data-direction="prev" data-active="false"></div>
                </div>
            </div>
            <div class="switcher">
                <div class="switcher-body" data-slide-id="demo1">
                    <article class="switcher-slide" data-state="current" id="0">
                        <div class="group" data-layout="stacked">
                             <header class="band-header">
                                 <h3 class="band-header-title">Demo</h3>
                                 <h4 class="band-header-headline">Slide #1</h4>
                             </header>
                             <div class="group" data-layout="gallery3">
                                 <div class="card" data-theme="dark">
                                    <header class="card-header">
                                        <h2 class="card-header-headline">This is a Header</h2>
                                     </header>
                                    <div class="card-body">
                                        <div class="generic">
                                            <p>Legam in et aliqua excepteur, non nulla qui noster. Ab aute occaecat.</p>
                                        </div>
                                    </div>
                                    <footer class="card-footer">
                                        <div class="cta">
                                            <a class="cta-link" data-cta-type="secondary" href="">Call to action</a>
                                        </div>
                                    </footer>
                                </div>
                                 <div class="card" data-theme="dark">
                                    <header class="card-header">
                                        <h2 class="card-header-headline">This is a Header</h2>
                                     </header>
                                    <div class="card-body">
                                        <div class="generic">
                                            <p>Legam in et aliqua excepteur, non nulla qui noster. Ab aute occaecat.</p>
                                        </div>
                                    </div>
                                    <footer class="card-footer">
                                        <div class="cta">
                                            <a class="cta-link" data-cta-type="secondary" href="">Call to action</a>
                                        </div>
                                    </footer>
                                </div>
                                 <div class="card" data-theme="dark">
                                    <header class="card-header">
                                        <h2 class="card-header-headline">This is a Header</h2>
                                     </header>
                                    <div class="card-body">
                                        <div class="generic">
                                            <p>Legam in et aliqua excepteur, non nulla qui noster. Ab aute occaecat.</p>
                                        </div>
                                    </div>
                                    <footer class="card-footer">
                                        <div class="cta">
                                            <a class="cta-link" data-cta-type="secondary" href="">Call to action</a>
                                        </div>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="switcher-slide" data-state="next" id="1">
                         <div class="group" data-layout="stacked">
                             <header class="band-header">
                                 <h3 class="band-header-title">Demo</h3>
                                 <h4 class="band-header-headline">Slide #2</h4>
                             </header>
                             <div class="generic">
                                 <p>Culpa iis non esse ullamco, hic nulla reprehenderit iis in dolore culpa id deserunt, nam incididunt efflorescere ea quem commodo cernantur est ubi an dolor deserunt, culpa admodum ut possumus non ubi iudicem graviterque. Qui iis amet minim fugiat, litteris legam te doctrina fidelissimae. Quo quem officia ex noster singulis e nostrud qui lorem si ubi dolore mandaremus sed arbitror ut
                                     culpa offendit et ab est consectetur ab cupidatat quorum ut consequat
                                     distinguantur nam quae ullamco ubi deserunt, iis esse sempiternum.</p>
                             </div>
                             <footer class="cta">
                                 <a class="cta-link" data-cta-type="primary">Learn more</a>
                             </footer>
                        </div>
                    </article>
                    <article class="switcher-slide" data-state="next" id="2">
                         <div class="group" data-layout="stacked">
                             <header class="band-header">
                                 <h3 class="band-header-title">Demo</h3>
                                 <h4 class="band-header-headline">Slide #3</h4>
                             </header>
                             <div class="group" data-layout="4 4">
                                 <div class="group" data-layout="stacked">
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
                                <div class="card" data-justify="justify" data-theme="dark">
                                  <div class="card-body">
                                      <div class="video-embed">
                                          <div class="video-embed-media-container">
                                              <div class="video-embed-iframe-container">
                                                  <iframe frameborder="0" height="315" src="//www.youtube.com/embed/ACi_dRUKE2Y" width="560"></iframe>
                                              </div>
                                          </div>
                                          <section class="video-embed-details">
                                              <header class="video-embed-header">
                                                  <h1 class="video-embed-title">
                                                      <a class="video-embed-title-link" href="#">Red Hat Enterprise Linux 7: Redefining the Enterprise OS</a>
                                                  </h1>
                                                  <p class="video-embed-summary">Hear from Red Hat executives.</p>
                                              </header>
                                          </section>
                                      </div>
                                  </div>
                              </div>
                             </div>
                        </div>
                    </article>

                </div>
            </div>
            <div class="slider" data-nav-style="arrows">
                <div class="slider-nav" data-slide-id="demo1">
                    <div class="slider-nav-item" data-slide-to="1" data-direction="next" data-active="true"></div>
                </div>
            </div>
        </div>
        <div class="generic" data-align="center">
            <p><small>Source: Citation goes here.</small></p>
        </div>
        <footer class="slider" data-nav-style="circles">
            <ul class="slider-nav" data-slide-id="demo1">
                <li class="slider-nav-item" data-slide-to="0" data-active="true">
                    <a class="slider-nav-item-link" title="View 1">1</a>
                </li>
                <li class="slider-nav-item" data-slide-to="1" active="false">
                    <a class="slider-nav-item-link" title="View 2">2</a>
                </li>
                <li class="slider-nav-item" data-slide-to="2" data-active="false">
                    <a class="slider-nav-item-link" title="View 3">3</a>
                </li>
            </ul>
        </footer>
    </div>
</section>
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
