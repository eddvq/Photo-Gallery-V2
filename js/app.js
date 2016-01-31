//Variables
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img class="show">');
var $caption = $('<p class="caption"></p>');
var $title = $('<h3 class="title"></h3>');
var $leftArrow = $("<a href='#'><img src='images/buttons/arrow.png'></a>").addClass('leftArrow');//here
var $rightArrow = $("<a href='#'><img src='images/buttons/arrow.png'></a>").addClass('rightArrow');

var $exit = $("<a href='#'><img src='images/buttons/exit.png' id='buster'></a>");

var image;

$("body").append($overlay);
$overlay.append($leftArrow);
$overlay.append($image);

$overlay.append($rightArrow);

$overlay.append($title);
$overlay.append($caption);
$overlay.append($exit);



//Fills Page with Pics

$(function(){
  //find a way to go through the image bank
  for(var i=0; i < pics.length; i+= 1){
      $fullpic = $('<li><img src="images/thumbnails/'+pics[i]['image']+'" title="'+pics[i]['title']+'" alt="'+pics[i]['caption']+'">')
    //append these newly minted <li>+<im>
    $('#gallery').append($fullpic);8
  }
});

//Overlay Create + Show Gallery with Arros
$('#gallery').on('click','li',function(){
    $overlay.show();
    image = $(this).children('img');
    imageLoader();
    //console.log(image);
    //Show larger image w src, alt, title 
});


//Overlay Cancel 
$exit.on('click', function(){
  $overlay.hide();
});


//Arrow Functionality 
$('.leftArrow').on('click', function(event){
  event.preventDefault();
  image = image.parent().prev().children('img');
  console.log(image);
  imageLoader();
});

$('.rightArrow').on('click', function(event){
  event.preventDefault();
  image = image.parent().next().children('img');
  imageLoader();
});


//Image Loader that puts pic, title and caption

function imageLoader(){
    var imageLocate = image.attr('src').replace('/thumbnails/', '/');
    $image.attr('src', imageLocate);
    var imageTitle = image.attr('title');
    $title.text(imageTitle);
    var imageCaption = image.attr('alt')
    $caption.text(imageCaption);
                      
};

//Search Functionality 

$("#search").on('keyup',function(){
    search=$(this).val().toLocaleLowerCase();
    //if i is zero it's goign to look at the document not li
    for(var i=1; i <= pics.length; i++){
        //this grabs the title from pics
        //you need the minus otherwise its skips the zero object
        title = pics[i-1]['caption'].toLowerCase();
        //this grabs the gallery's li's child
        var list = $('#gallery li:nth-child('+i +')');
        if( title.indexOf(search) >=0 ){
            list.show();
        }else{
            list.hide();
    }
  }
    
});



