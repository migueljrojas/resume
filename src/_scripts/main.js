// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Experience = require('../_modules/experience/experience');

$(function() {
  new Experience(); // Activate Experience modules logic
});
