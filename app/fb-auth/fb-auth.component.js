'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('fbAuth').
  component('fbAuth', {
    templateUrl: 'fb-auth/fb-auth.template.html',
    controller: ['$routeParams', 'Phone',
      function fbAuthController() {
        var self = this;
        
        // more code
      }
    ]
  });
