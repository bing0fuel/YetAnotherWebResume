'use strict';

/** Boring Plain Web Resume **/

var bpwr = angular.module('bpwrApp', []);

bpwr.controller('ResumeController', ['$scope',
    function($scope) {

        /* Configure your information here */
        var Page = {
            'name': 'Your Name',
            'subtitle': 'A quick one-liner here about yourself',
        };

        $scope.Page = Page;
    }
]);
