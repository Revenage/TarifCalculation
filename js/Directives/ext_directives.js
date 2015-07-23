/**
 * Created by roma on 7/23/15.
 */
app.directive('autoTabTo', [function () {
    return {
        restrict: "A",
        link: function (scope, el, attrs) {
            el.bind('keyup', function(e) {
                if (e.which === 13) {
                    var element = document.getElementById(attrs.autoTabTo);
                    if (element)
                        element.focus();
                }
            });
        }
    };
}]);