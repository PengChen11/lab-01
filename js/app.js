//arrow function to get a random number
var randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

//function to change the background color for all elements.
var changeColor = () => {
  $('#a').css('background-color',randomColor);
  $('#b').css('background-color',randomColor);
  $('#c').css('background-color',randomColor);
  $('#d').css('background-color',randomColor);
  $('#e').css('background-color',randomColor);
  $('#f').css('background-color',randomColor);
  $('#g').css('background-color',randomColor);
  $('#h').css('background-color',randomColor);
  $('#i').css('background-color',randomColor);
};

// when page loaded, get random background color for all elements;
$(document).ready(() => changeColor());

// when resize the page, and when break point is triggered, change the backgound color for all elemets.
$(window).resize(() => {
  if ($(window).width() <= 767) {
    changeColor();
    $(window).off('resize'); //once triggered, stop the event.
  }
});



