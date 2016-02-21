# Gridious

Gridious is a simplistic CSS grid framework that is fully responsive and customizable. You can easily add to or edit the existing code to fit your individual project needs. It was created as a simple, bloat-free alternative to Bootstrap, Foundation, and the various other frameworks out there and was modelled off of the grid features I found to be most effective while working with them. In addition, I wanted to create a grid system that I could easily adapt to each project I work on.

## Installation & Setup

All the installation that is required is simply including the compiled CSS file in your document:

```html
<link rel="stylesheet" type="text/css" href="path/to/gridious.css">
```

Gridious will now be available on every page it is included on.
 
## Configuration

There are a number of configuration options you can adjust if you like (or just leave the defaults). They can be found in ```_config.scss```

 Property | Variable Name | Description | Default
 -------- | ------------- | ----------- | -------
 Small Breakpoint | $sm-break | The upper limit of the small screen size | 480px
 Medium Breakpoint | $md-break | The upper limit of the medium screen size | 959px
 Max Width | $max-width | The max width the grid will expand for | 1200px
 Column Number | $column-number | The number of columns per row | 12
 Gutter | $column-padding | The space on either side of each column | 15px

## The Grid

The grid is easy to use and has 3 main screen sizes (unless otherwise edited). They are:

```css
@media only screen and (max-width: 480px) {
	// Small Screen
	// Syntax: sm-col-X where X is an integer between 1 and $column-number
}

@media only screen and (max-width: 481px) and (max-width: 959px) {
	// Medium Screen
	// Syntax: md-col-X where X is an integer between 1 and $column-number
}

@media only screen and (min-width: 960px) {
	// Large Screen
	// Syntax: lg-col-X where X is an integer between 1 and $column-number
}
```

Gridious is mobile-first and you may have different columns for each screen size. If the total number of columns in a row exceeds the max number of columns set (Default: 12), it will wrap below.

```html
<div class="row">
	<div class="sm-col-12 md-col-10 lg-col-6">
		12 columns wide on small (wrap) 
		10 columns wide on medium
		6 columns wide on large
	</div>
	<div class="sm-col-12 md-col-2 lg-col-6">
		12 columns wide on small (wrap)
		2 columns wide on medium
		6 columns wide on large
	</div>
</div>
```

## Utility Classes

There are a couple of utility classes that can be used in conjunction with the grid by adding the classes to elements.

 Name | Description | Usage
 ---- | ----------- | -----
 Full Width | Allows the row to span the entire width, ignoring the max width set in config | .gd-full
 Clearfix | Clearfix hack; fixes floating issues that sometimes occurs | .clearfix
 Hide All Screens | Hides an element on any screen size | .gd-hide
 Hide on Small Only | Hides an element when on small screen | .gd-hide-sm
 Hide on Medium Only | Hides an element when on medium screen | .gd-hide-md
 Hide on Medium & Down | Hides an element when on medium screen or below | .gd-hide-md-down
 Hide on Medium & Up | Hides an element when on medium screen or above | .gd-hide-md-up
 Hide on Large Only | Hides an element when on large screen | .gd-hide-lg
 
 Add additional utility classes of your own in ```_utilities.scss``` if you wish.

## Customization

Gridious is simple to use and edit. It is a barebones CSS framework and, as a result, you can easily customize to fit whatever project you happen to be working on. The files included and their usages are as follows:
 
 File Name | Usage 
 --------- | -----
 _config.scss | Holds all configuration variables
 _grid.scss | Where the grid functionality is stored
 _mixins.scss | Holds mixins used in other files
 _utilities.scss | Holds all utility classes
 _variables.scss | Holds and defines all variables used in other files
 
 If you wish to add another screen size, you can take advantage of the generate-columns mixin:
 
 ```scss
	/ --- Generate Columns ---
	// $size is the column name/size (ex: sm, md, lg)
	@mixin generate-column($size) {
		@for $sizeName from 1 through $columns {
			.#{$size}-col-#{$sizeName} {
				width: (100%/($columns/$sizeName));
			}
		}
	}
 ```
 
 In addition to the mixin, you can also create an type of column you wish as long as the collective widths add to 100%. For example,
 
 ```html
 .col-10 {
	width: 10%;
 }
 
 .col-90 {
	width: 90%;
 }
 
 <div class="row">
	<div class="col-10"></div>
	<div class="col-90"></div>
 </div>
 ```
 
## Contributions

#### Nicolas Gallagher & Jonathan Neal
[Normalize.css](https://github.com/necolas/normalize.css/) : makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

## License

MIT License (Free - see LICENSE.md)