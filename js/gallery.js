
function upDate(previewPic){
  var imageDiv = document.getElementById('image');
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

  
	

function unDo(){
  var imageDiv = document.getElementById('image');
  imageDiv.innerHTML = "Hover over and image below to display here.";
  imageDiv.style.backgroundImage = "url('')";
}


function addTabIndex() {
  const images = document.querySelectorAll('.preview');
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('tabIndex', 0);
    console.log(`Tabindex added to image ${i+1}`);
  }
}