//Img Loader - Images need to be put into the empty space

$(function(){
  //find a way to go through the image bank
  for(var i=0; i < pics.length; i+= 1){
      $fullpic = $('<li><img src="images/thumbnails/'+pics[i]['image']+'" title="'+pics[i]['title']+'" alt="'+pics[i]['caption']+'">')
    //append these newly minted <li>+<im>
    $('#gallery').append($fullpic);
  }
});

/*Things I noted: you forgot to close the image tag, and that <li> closes itself. 
pics refers to the image bank set up, and the i decides which image object is going to be chosen. Ex. pics[6]['image'], is going to select the sixth object in the array and return the image attribute. */