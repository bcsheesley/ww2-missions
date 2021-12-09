// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var idCardFront = document.getElementById("idCardFront");
var missions = document.getElementById("missions");
var dec5a = document.getElementById("dec5a");
var dec5b = document.getElementById("dec5b");
var dec30 = document.getElementById("dec30");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

idCardFront.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

missions.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

dec05a.onclick = function(){
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
}

dec05b.onclick = function(){
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
}

dec30.onclick = function(){
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
}
	
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
	modal.style.display = "none";
}
modal.onclick = function() { 
	modal.style.display = "none";
}