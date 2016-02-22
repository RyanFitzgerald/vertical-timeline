/*

    Timeline - Responsive, jQuery-based timeline
    Version 1.0.0
    Ryan Fitzgerald
    http://RyanFitzgerald.ca/
    ---
    Repo: http://github.com/ryanfitzgerald/timeline
    Issues: http://github.com/ryanfitzgerald/timeline/issues
    Licensed under MIT Open Source

 */

 (function ( $ ) {


    var checkViewport = function(elem) {
        if (typeof jQuery === "function" && elem instanceof jQuery) {
            elem = elem[0];
        }

        var rect = elem.getBoundingClientRect();

        return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    $.fn.timeline = function(options) {

        // Overide defaults, if any
        var settings = $.extend({
            startSide: 'left',
            alternate: true,
            showDate: true,
            animate: true
        }, options);

        // Allow chaining and process each DOM node
        return this.each(function() {

            // Define variables
            $wrapper = $(this); // Main wrapping classes
            $userContent = $(this).children('div'); // user created divs

            // Add wrapper class
            $wrapper.addClass('timeline-wrap');

            // Create timeline divs
            $userContent.each(function() {
                // Add wrapping divs to each user div
                $(this).addClass('timeline-content')
                       .wrap('<div class="timeline-point"><div class="timeline-block"></div></div>');
            });

            // Add timeline icon
            $('.timeline-point').each(function() {
                $(this).prepend('<div class="timeline-icon"></div>');
            });

            // --- Orientation Setup ---
            // Add appropriate classes for non-alternating
            if (!settings.alternate) {
                $wrapper.addClass('timeline-wrap-'+settings.startSide);
            }

            // --- Alternating Setup ---
            // Add alternating class if set to true
            if (settings.alternate && settings.startSide == 'left') {
                $('.timeline-point:odd').each(function() {
                    $(this).addClass('timeline-right');
                });
            } else if (settings.alternate && settings.startSide == 'right') {
                $('.timeline-point:even').each(function() {
                    $(this).addClass('timeline-right');
                });
            }

            // --- Show date Setup ---
            // Add dates to the timeline if exists
            if (settings.showDate) {
                $('.timeline-content').each(function() {
                    var date = $(this).data('date');
                    if ($(this).data('date')) { // Prepend if exists
                        $(this).parent().prepend('<span class="timeline-date">'+date+'</span>');
                    }
                });
            }

            // --- Animation Setup ---
            // Fade the blocks in as they come into viewport
            if (settings.animate) {
                // Hide them initially
                $('.timeline-block').fadeTo(0, 0);

                // Initial check if in viewport
                $('.timeline-block').each(function() {
                    if (checkViewport($(this))) {
                        $(this).fadeTo(300,1);
                    }
                });

                // Check again on scroll
                $(window).scroll(function() {
                    $('.timeline-block').each(function() {
                        if (checkViewport($(this))) {
                            $(this).fadeTo(300,1);
                        }
                    });
                });

            }

        });

    };

}( jQuery ));
