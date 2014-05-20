angular.module('AngularIsomer', [])
    .directive('isomer',function() {
    return {
        restrict: 'EA',
        template: '<canvas></canvas>',
        scope: {
            ngShapes: '='
        },
        transclude: false,
        replace: true,
        link: function($scope, element, attrs, controller) {
            $scope.$watch('ngShapes', function(newShapes, oldShapes) {
                var canvas = element[0];
                var ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                var iso = new Isomer(canvas);
                newShapes.forEach(function(shape) {
                    if (shape.colour)
                        iso.add(shape.shape, shape.colour);
                    else iso.add(shape);
                });
            }, true);
        }
    };
})
