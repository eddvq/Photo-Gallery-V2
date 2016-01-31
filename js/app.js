//Variables
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p class="caption"></p>');
var $title = $('<h3 class="title"></h3>');

var image;


$("body").append($overlay);
$overlay.append($image);
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

    for(var i=1; i <= pics.length; i++){
        title = pics[i-1]['caption'].toLowerCase();
        console.log(title);
        var list = $('#gallery li:nth-child('+i +')');
        console.log(list);
        if( title.indexOf(search) >=0 ){
            list.show();
        }else{
            list.hide();
    }
  }
    
});



