/*

    VErtical Timeline - Responsive, jQuery-based vertical timeline generator
    Version 2.0.0
    Ryan Fitzgerald
    http://RyanFitzgerald.ca/
    ---
    Repo: http://github.com/ryanfitzgerald/vertical-timeline
    Issues: http://github.com/ryanfitzgerald/vertical-timeline/issues
    Licensed under MIT Open Source

 */

(function ( $ ) {

    // Check if element is in viewport
    var checkViewport = function(elem) {

        var rect = elem.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    $.fn.verticalTimeline = function(options) {

        // Overide defaults, if any
        var settings = $.extend({
            startSide: 'left',
            alternate: true,
            animate: null,
            theme: null
        }, options);

        // Allow chaining and process each DOM node
        return this.each(function() {

            // Define variables
            $this = $(this); // Store reference to this
            $userContent = $this.children('div'); // user content

            // Add main class
            $this.addClass('vtimeline');

            // Create timeline divs
            $userContent.each(function() {
                // Add wrapping divs to each user div
                $(this).addClass('vtimeline-content')
                       .wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
            });

            // Add timeline icons
            $this.find('.vtimeline-point').each(function() {
                $(this).prepend('<div class="vtimeline-icon"></div>');
            });

            // --- Orientation Setup ---
            // Add appropriate classes for non-alternating
            if (!settings.alternate) {
                $this.addClass('vtimeline-align-'+settings.startSide);
            }

            // --- Alternating Setup ---
            // Add alternating class if set to true
            if (settings.alternate && settings.startSide == 'left') {
                $this.find('.vtimeline-point:odd').each(function() {
                    $(this).addClass('vtimeline-right');
                });
            } else if (settings.alternate && settings.startSide == 'right') {
                $this.find('.vtimeline-point:even').each(function() {
                    $(this).addClass('vtimeline-right');
                });
            }

            // Add dates to the timeline if exists
            $this.find('.vtimeline-content').each(function() {
                var date = $(this).data('vtdate');
                if ($(this).data('vtdate')) { // Prepend if exists
                    $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
                }
            });

            // --- Animation Setup ---
            // Fade the blocks in as they come into viewport
            if (settings.animate == "fade") {

                // Store animation type
                var animateType = settings.animate;

                // Apply animate style to blocks
                $this.find('.vtimeline-block').addClass("vt-"+animateType);

                // Initial check if in viewport
                $this.find('.vtimeline-block.vt-'+animateType).each(function() {
                    if (checkViewport($this[0])) {
                        $(this).removeClass("vt-"+animateType);
                    }
                });

                // Check elements on scroll
                // $(window).on("scroll", function() {
                //     $this.find('.vtimeline-block.vt-'+animateType).each(function() {
                //         if (checkViewport($this[0])) {
                //             $(this).removeClass("vt-"+animateType);
                //         }
                //     });
                // });


            }

        });

    };

}( jQuery ));
