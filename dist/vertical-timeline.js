'use strict';

/*!
    Title: Vertical-Timeline
    Version: 2.0.0
    Last Change: 04/30/17
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/vertical-timeline
    Issues: https://github.com/RyanFitzgerald/vertical-timeline/issues
	LICENSE: MIT
*/

(function ($) {

    // Check viewport
    var inViewport = function inViewport(ele) {
        // Get viewport distances
        var viewport = {
            top: $(window).scrollTop(),
            left: $(window).scrollLeft(),
            right: $(window).scrollLeft() + $(window).width(),
            bottom: $(window).scrollTop() + $(window).height()
        };

        // Get element bounds
        var bounds = ele.offset();
        bounds.right = bounds.left + ele.outerWidth();
        bounds.bottom = bounds.top + ele.outerHeight();

        // Compare and return
        return !(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom);
    };

    $.fn.verticalTimeline = function (options) {

        // Overide defaults, if any
        var settings = $.extend({
            startLeft: true,
            alternate: true,
            animate: false,
            arrows: true
        }, options);

        // Allow chaining and process each DOM node
        return this.each(function () {
            // Store user content
            var $userContent = $(this).children('div');

            // Add main class
            $(this).addClass('vtimeline');

            // Create required content divs
            $userContent.each(function () {
                $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
            });

            // Add timeline icons
            $(this).find('.vtimeline-point').each(function () {
                $(this).prepend('<div class="vtimeline-icon"></div>');
                // If there is a provided icon, add it
                if ($(this).find('[data-vticon=true]').length) {
                    var $icon = $(this).find('[data-vticon=true]').html();
                    $(this).find('.vtimeline-icon').append($icon);
                    $(this).find('[data-vticon=true]').remove();
                }
            });

            // Setup orientation and alternation
            if (!settings.alternate) {
                $(this).find('.vtimeline-block').addClass('vtimeline-' + settings.startSide);
            } else {
                if (settings.startLeft) {
                    $(this).find('.vtimeline-point:odd').each(function () {
                        $(this).find('.vtimeline-block').addClass('vtimeline-right');
                    });
                } else {
                    $(this).find('.vtimeline-point:even').each(function () {
                        $(this).find('.vtimeline-block').addClass('vtimeline-right');
                    });
                }
            }

            // Add animation style if provided
            if (settings.animate) {
                $(this).find('.vtimeline-block').each(function () {
                    var _this = this;

                    $(this).addClass('vt-animate-' + settings.animate);
                    if (inViewport($(this))) {
                        $(this).removeClass('vt-animate-' + settings.animate);
                    }
                    $(window).on('scroll', function () {
                        if (inViewport($(_this))) {
                            $(_this).removeClass('vt-animate-' + settings.animate);
                        }
                    });
                });
            }

            // Add dates to the timeline if exists
            $(this).find('.vtimeline-content').each(function () {
                var date = $(this).data('vtdate');
                var side = $(this).data('vtside');
                // Add date if provided
                if (date) {
                    $(this).parent().prepend('<span class="vtimeline-date">' + date + '</span>');
                }

                // Add side override if given
                if (side) {
                    $(this).parent().removeClass('vtimeline-right');
                    $(this).parent().addClass('vtimeline-' + side);
                }
            });

            // Remove arrows if set
            if (!settings.arrows) {
                $(this).find('.vtimeline-block').addClass('vt-noarrows');
            }
        });
    };
})(jQuery);