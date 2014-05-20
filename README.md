AngularIsomer
=============

Angular JS directives for Isomer <a href="http://jdan.github.io/isomer/">http://jdan.github.io/isomer/</a>

This directive allows you to bind a canvas to an array of isomer shapes, by passing the array into the "ng-shapes" attribute. You can use "isomer" as either an element or attribute on a canvas, for example:

```html
<canvas isomer width="500" height="500" ng-shapes="shapes"></canvas>
<!-- or -->
<isomer width="500" height="500" ng-shapes="shapes"></isomer>
```

ng-shapes can either be an array of shapes, or of objects containing a "shape" and "colour":

```javascript
var shapes = [Isomer.Shape.Prism(Isomer.Point.ORIGIN, 1, 1, 1)];
// or
shapes = [{shape: Isomer.Shape.Prism(Isomer.Point.ORIGIN, 1, 1, 1), colour = new Isomer.Color(255,0,0)}];
```

<i>Note: the directive deep watches the ng-shapes array.</i>
