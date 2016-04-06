'use strict'
require(__dirname + '/../../bower_components/angular/angular.js')
angular.module('app', [])
.controller('AnimalController', function() {
    this.delete = function() {
      this.text = null;
    },
      this.animals = [
        {
          type: 'horse',
          age: 5,
          says: 'neigh'
        },
        {
          type: 'monkey',
          age: 2,
          says: 'ooh ahh'
        },
        {
          type: 'dog',
          age: 3,
          says: 'woof'
        }
      ],
      this.text = ' '
  });
