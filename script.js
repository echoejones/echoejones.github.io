var pictures = document.getElementById("photo-grid");
var lightbox = document.getElementById("lightbox");
var mainImage = document.getElementById("main-image");
var exitButton = document.getElementById("exit-button");
var leftArrow = document.getElementById("left-arrow");
var rightArrow = document.getElementById("right-arrow");

var currentPhotoIndex = 0;
var lightBoxMode = true;
var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

document.addEventListener("keydown", GetKey);
document.addEventListener("click", GetClick);
exitButton.addEventListener("click", ExitView);
leftArrow.addEventListener("click", GetLeft);
rightArrow.addEventListener("click", GetRight);

for (var i = 0; i < 345; i++){
	var img = document.createElement("img");
	img.src = "thumbnails/Nathan Echoe Wedding ("+ (i + 1) +").jpg";
	img.className += "thumbnail";
	img.id = i+1;
	img.addEventListener("click", ViewFull);
	
	pictures.appendChild(img);
}

function ExitView () {
	lightBoxMode = false;
	lightbox.style.display = "none";
}

function ViewFull() {
	currentPhotoIndex = parseInt(this.id);
	lightbox.style.display = "block";
	LoadImage();
}

function LoadImage() {
	mainImage.style.backgroundImage = "url('photos/Nathan Echoe Wedding ("+currentPhotoIndex+").jpg')";
	lightBoxMode = true;
}

function GetLeft() {
	currentPhotoIndex--;
	if(currentPhotoIndex <= 0){
		currentPhotoIndex = 345;
	}
	LoadImage();
}

function GetRight() {
	currentPhotoIndex++;
	if(currentPhotoIndex > 345){
		currentPhotoIndex = 1;
	}
	LoadImage();
}

function GetKey(e) {
	if(e.keyCode == 27){
		ExitView();
	}
}

function GetClick(e) {
	if(lightBoxMode){
		if(e.clientX > (viewportWidth/2) + (viewportWidth * 0.33)) {
			GetRight();
		}
		else if (e.clientX < (viewportWidth/2) - (viewportWidth * 0.33)) {
			GetLeft();
		}
	}	
}
