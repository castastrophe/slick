var slider = {
    switcher: {
        body:   ".switcher-body",
        slide:  ".switcher-slide"
    },
    nav: {
        styles: [ "arrows", "text", "circles" ],
        parent: ".slider-nav",
        item:   ".slider-nav-item"
    },
    attr: {
        state:     "data-state",     // Valid values: prev, next, current
        direction: "data-direction", // Valid values: prev, next
        active:    "data-active",    // Valid values: true/false
        to:        "data-slide-to",  // ID of slide to switch to
        id:        "data-slide-id",  // ID of slide, used for slide-to attr
        height:    "data-height",    // Valid value: variable
        style:     "data-nav-style"  // Valid values: circles, arrows, text
    },
    getID:  function( $el ) {
        return $el.attr( this.attr.id );
    },
    isVaryHeight:   function( $parent ) {
        return $parent.has( this.switcher.slide ).attr( this.attr.height ) == "variable";
    },
    isCurrent:  function( $slide ) {
        return $slide.attr( this.attr.state ) == "current";
    },
    getAllContent:  function( $items ) {
        return $items.map( function( i ) {
            return this.id.toString();
        } ).get();
    },
    // Set parent height based on tallest child element
    setParentHeight:    function() {
        var context = this,
            $slide, $parent, $body, // element
            id, // string
            max, height, // number
            is_variable, is_current; //boolean
        $( context.nav.parent ).each( function( i, val ) {
            id      = context.getID( $( val ) );
            $parent = $( "[" + context.attr.id + "='" + id + "']" );
            max     = 0;
            $parent.children( context.switcher.slide ).each( function( j, slides ) {
                $slide      = $( slides );
                $body       = $parent.has( context.switcher.slide );
                height      = $slide.height();
                is_variable = context.isVaryHeight( $slide.parent( context.switcher.body ) );
                is_current  = context.isCurrent( $slide );
                if ( !is_variable ) {
                    max = ( height > max ) ? height : max;
                    $body.css( "min-height", max + "px" );
                } else {
                    if ( is_current ) {
                        $body.css( "min-height", height + "px" );
                    }
                }
            } );
        } );
    },
    go:  function( id, to ) {
        var context   = this,
            // elements
            $parts   = $( "[" + context.attr.id + "='" + id +  "']" ),
            $content = $parts.find( context.switcher.slide ),
            $current = $parts.find( "#" + to ),
            $items, $arrow,
            // strings
            contentIDs = context.getAllContent( $content ),
            direction, newID,
            loc, iterate, limit, // numbers
            active, boolean, // booleans
            styles = {}; // object
        // Load up all available navigation by style into object
        $.each( context.nav.styles, function( i, style ) {
            styles[ style ] = $parts.parent( "[" + context.attr.style + "='" + style + "']" );
        } );

        // Update navigation styles
        $.each( [ styles.circles, styles.text ], function( i, nav ) {
            $items = $( nav ).find( context.nav.item );
            $items.each( function( j, item ) {
                active = $( item ).attr( context.attr.to ) == to ? "true" : "false";
                $( item ).attr( context.attr.active, active );
            } );
        } );
        styles.arrows.each( function( i, nav ) {
            // Get next switcher id and assign to the slide-to attr
            loc       = $.inArray( to.toString(), contentIDs );
            $arrow    = $( nav ).find( context.nav.item );
            direction = $arrow.attr( context.attr.direction );
            console.log( loc );
            if ( loc > -1 ) {
                if ( direction == "prev" ) {
                    iterate = loc - 1;
                    limit   = 0;
                    active  = iterate >= limit;
                } else {
                    console.log( contentIDs );
                    iterate = loc + 1;
                    limit   = contentIDs.length;
                    active  = iterate < limit;
                }
                newID = ( active ) ? contentIDs[ iterate ] : contentIDs[ limit ];
                /* Update arrow data and hide or show arrows
                    depending on content available next or prev */
                $arrow.attr( context.attr.to, newID ).attr( context.attr.active, active );
            } else {
                throw "slider[71]: Content does not exist in switcher.";
            }
        } );

        // Update the content switcher
        $current.attr( context.attr.state, "current" );
        $current.prevAll().each( function( i, prev ) {
            $( prev ).attr( context.attr.state, "prev" );
        } );
        $current.nextAll().each( function( i, next ) {
            $( next ).attr( context.attr.state, "next" );
        } );

        context.setParentHeight();
    }
};

$( document ).ready( function() { slider.setParentHeight(); } );

$( window ).resize( function() { slider.setParentHeight(); } );

$( slider.nav.item ).click( function() {
    var $el     = $( this ),
        $parent = $el.parent( slider.nav.parent );
    slider.go(
        $parent.attr( slider.attr.id ),
        $el.attr( slider.attr.to )
    );
} );
