console.log( 'js' );

// -- globals -- 
var canCounter = 0;

// -- functions -- 

// when document is ready run this function
function onReady() {
    console.log('ready');
    
    //event listeners
    $('#addCan').on('click', addCan);
    // $('article').on('click', imgClick);
    // $('main').on('mouseover', '.spam-img', imgClick);   
    $('main').on('click', '.delete-button', removeCan);       
}

// called when the delete button is clicked
// logs which can is being removed
function removeCan() {
    // retrieve the can count info from the parent article and log it.
    console.log('removing can number ', $(this).parent().data('counter'));
    $(this).parent().remove();
}

// called when image is moused over
function imgClick() {
    console.log('called imgClick');
    console.log($(this));    
}

// append new can objects to the dom
function addCan() {
    canCounter++; // increment canCounter
    console.log('called addCan', canCounter);
    
    // add data-counter to the can article to keep track of which can this is.
    var $canArticle = $('<article>').data('counter', canCounter);
    
    $canArticle.append($('<h3>', {text: 'SPAM'}));
    $canArticle.append($('<img />', {class: 'spam-img', src:'https://upload.wikimedia.org/wikipedia/commons/0/09/Spam_can.png'}));
    $canArticle.append($('<button>', {class: 'delete-button', text:'delete'}));
    
    $('main').append($canArticle);
}

// call document ready function
$(document).ready(onReady);