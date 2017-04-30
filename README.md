# Vertical Timeline

Vertical Timeline is a responsive, jQuery-based generator that builds a timeline based on user input. It comes with a number of customization options out of the box such as displaying dates, alternating toggle, animation, and choosing which side it starts on. It comes with little to no styling other than what it required, so it can be styled to suite your specific needs. I originally created a timeline for my personal website, however I have since found a number of possible reuse options for it, so I decided to create this simple plugin.

The website for this plugin can be found [here](http://ryanfitzgerald.github.io/vertical-timeline/), which has the demo.

## Installation & Setup

All the installation that is required is simply including the compiled CSS and JS file in your document (minified or not) and then initializing it.

Top of page:
```html
<link rel="stylesheet" type="text/css" href="path/to/vertical-timeline.css">
```

Bottom of page:
```html
<script src="path/to/vertical-timeline.min.js"></script>
```

Finally, initialize it:
```javascript
$('#someIDorClass').verticalTimeline();
```

## How to Use

Timeline has a few options that can be customized to suite your specific needs. The included options that can be utilized are:

Name | Description | Default
---- | ----------- | -------
startLeft | Choose whether or not it starts on the left (false = right side) | true
alternate | Choose whether or not the points alternate sides | true
animate | Choose whether or not points fade in as they appear in viewport (options: "fade", "slide") | false
arrows | Choose whether or not the content arrows show | true

## Example Usage

Another example usage of timeline using it's available options is as follows:

```javascript
$('#myID').verticalTimeline({
    startLeft: false,
    alternate: true,
    animate: "fade",
    arrows: false
});
```

## Adding Dates

Dates can easily be added by utilizing data attributes. In order to have dates show up, the following data attribute is used:

```html
<div id="myTimeline">
    <div data-vtdate="February 2016">
        My Content 1
    </div>
    <div data-vtdate="March 2016">
        My Content 2
    </div>
    <div data-vtdate="April 2016">
        My Content 3
    </div>
</div>
```

Every time that data attribute is used, that date will be displayed.

## Override Side

If you want, you can override the side that the content block shows up on by default. By adding the override, it will ignore whatever alternation or start side the other elements use. This can be done as follows:

```html
<div id="myTimeline">
    <div data-vtside="left">
        My Content 1
    </div>
    <div>
        My Content 2
    </div>
    <div>
        My Content 3
    </div>
</div>
```

## Modifying Styles

All elements use classes so their styles can be easily overwritten. You can add styles for any of the following elements:

Name | Description | Class Used
---- | ----------- | -------
Timelime Wrapper | This wraps the entire timeline | .vtimeline
Timeline Point | This wraps the entirety of each point on the timeline | .vtimeline-point
Timeline Icon | This is the icon associated with each point | .vtimeline-icon
Timeline Block | This holds the date and content for each point | .vtimeline-block
Timeline Date | This holds the date, if provided | .vtimeline-date
Timeline Content | This holds the actual content of each point | .vtimeline-content

## Adding Icons

You can optionally add an icon inside of the circle corresponding to each timeline point. To do this, create a div inside of your content and give it the data attribute `data-vticon="true"`. Anything inside this div will get placed inside `.vtimeline-icon` of the corresponding element. You can use this to easily associate SVG icons, font-awesome icons, etc. with every point or only certain points. An example usage is as follows:

```html
<div id="myTimeline">
    <div>
        <div data-vticon="true">
            <img src="some/icon/here.png">
        </div>
    </div>
    <div>
        My Content 2
    </div>
    <div>
        My Content 3
    </div>
</div>
```

## Special Mention

#### [CodyHouse.co](https://codyhouse.co/)

Provided initial idea for the layout of the timeline from a published tutorial

## License

MIT License (Free - see LICENSE.md)
