//Variables
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img class="show">');
var $caption = $('<p class="caption"></p>');
var $title = $('<h3 class="title"></h3>');
var $leftArrow = $("<a href='#'><img src='images/buttons/arrow.png' id='buster'></a>").addClass('leftArrow');//here
var $rightArrow = $("<a href='#'><img src='images/buttons/arrow.png'></a>").addClass('rightArrow');


var image;


$("body").append($overlay);


$overlay.append($leftArrow);

$overlay.append($image);

$overlay.append($rightArrow);

$overlay.append($title);
$overlay.append($caption);


//Img Loader - Images need to be put into the empty space

$(function(){
  //find a way to go through the image bank
  for(var i=0; i < pics.length; i+= 1){
      $fullpic = $('<li><img src="images/thumbnails/'+pics[i]['image']+'" title="'+pics[i]['title']+'" alt="'+pics[i]['caption']+'">')
    //append these newly minted <li>+<im>
    $('#gallery').append($fullpic);8
  }
});

//Overlay Cancel 
$overlay.on('click', function(){
  $overlay.hide();
});


//Overlay Create + Show pic
$('#gallery').on('click','li',function(){
    $overlay.show();
    image = $(this).children('img');
    imageLoader();
    console.log(image);
    //Show larger image w src, alt, title 
});

//Image Loader

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



