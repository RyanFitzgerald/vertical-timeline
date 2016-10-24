# Vertical Timeline

Vertical Timeline is a responsive, jQuery-based generator that builds a timeline based on user input. It comes with a number of customization options out of the box such as displaying dates, alternating toggle, animation, and choosing which side it starts on. It comes with little to no styling other than what it required, so it can be styled to suite your specific needs. I originally created a timeline for my personal website, however I have since found a number of possible reuse options for it, so I decided to create this simple plugin.

The website for this plugin can be found [here](http://ryanfitzgerald.github.io/vertical-timeline/), which includes docs and a demo.

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
$('#someIDorClass').timeline();
```

## How to Use

Timeline has a few options that can be customized to suite your specific needs. The included options that can be utilized are:

Name | Description | Default
---- | ----------- | -------
startSide | Choose which side the first timelint point starts on | left
alternate | Choose whether or not the points alternate sides | true
animate | Choose whether or not points fade in as they appear in viewport (options: "fade") | null

## Example Usage

Another example usage of timeline using it's available options is as follows:

```javascript
$('#myID').timeline({
    startSide: 'left',
    alternate: true,
    animate: "fade"
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
...

Every time that data attribute is used, that date will be displayed.

## Modifying Styles

The styles can be modified fairly easily in the SASS file. All default colurs are set as variables at the top of the file.

## Contributions

#### [CodyHouse.co](https://codyhouse.co/)

Provided initial idea for the layout of the timeline from a published tutorial

## License

MIT License (Free - see LICENSE.md)
