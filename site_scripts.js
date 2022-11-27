 //Partner Pictures
 var photos = [];
 var fileNames = [];
 var imageList = [];
 var image;
 var openList = "<li id='partner'>";
 var closeList = "</li>";

 //Loop for partner photos
 for (var i=0; i<6; i++){
     fileNames.push("partner"+(i+1));
     photos.push("<img src+'images/partners/"+fileNames[i]+".png'>");
     image = openList + partner[i] + closeList;
     imageList.push(image);
 }

 //Displaying partner photos
 document.getElementbyID("partners").innerHTML = imageList;

// var link = document.createElement('link');
// document.getElementsByTagName('section')[0].apendChild(link);
// link.rel= 'stylesheet';
// link.type = 'img/css';
// link.href = 'styles.css';