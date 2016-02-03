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

    $.fn.timeline = function(options) {

        // Overide defaults, if any
        var settings = $.extend({
            startSide: 'left',
            alternate: true,
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
                $(this).addClass('timeline-user')
                        .wrap('<div class="timeline-point"><div class="timeline-content"></div></div>');
            });

            // Add timeline icon
            $('.timeline-point').each(function() {
                $(this).prepend('<div class="timeline-icon"></div>');
            });

            // --- Orientation Setup ---
            // Add appropriate classes for non-alternating
            if (!settings.alternate) {
                var side = settings.startSide;
                $wrapper.addClass('timeline-wrap-'+side);
                $('.timeline-point').each(function() {
                    $(this).addClass('timeline-'+side);
                    $(this).children('.timeline-icon').addClass('timeline-icon-'+side);
                    $(this).children('.timeline-content').addClass('timeline-content-'+side);
                });
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

        });

    };

}( jQuery ));
