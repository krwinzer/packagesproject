var _ = require('lodash');
var wine = 'I like red wine';
var h4heading = document.querySelector('h4');
h4heading.textContent =  _.replace(wine, 'red', 'white');

var $ = require('jquery');
$('h4').css('color', 'white');
