var pictures = document.getElementById("photo-grid");
var lightbox = document.getElementById("lightbox");
var mainImage = document.getElementById("main-image");
var hiddenImage = document.getElementById("hidden-image");
var exitButton = document.getElementById("exit-button");
var leftArrow = document.getElementById("left-arrow");
var rightArrow = document.getElementById("right-arrow");

var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var currentPhotoIndex = 0;

document.addEventListener("keydown", GetKey);
exitButton.addEventListener("click", ExitView);
leftArrow.addEventListener("click", GetLeft);
rightArrow.addEventListener("click", GetRight);
hiddenImage.onload = function() { ShowImage(); };

for (var i = 0; i < 345; i++){
	var img = document.createElement("img");
	img.src = "thumbnails/Nathan Echoe Wedding ("+ (i + 1) +").jpg";
	img.className += "thumbnail";
	img.id = i+1;
	img.addEventListener("click", ViewFull);
	
	pictures.appendChild(img);
}

function ExitView () {
	lightbox.style.display = "none";
}

function ViewFull() {
	currentPhotoIndex = parseInt(this.id);
	LoadImage();
}

function LoadImage () {
	mainImage.style.backgroundImage = "url('photos/Nathan Echoe Wedding ("+currentPhotoIndex+").jpg')";
	hiddenImage.src = "photos/Nathan Echoe Wedding ("+currentPhotoIndex+").jpg";
}

function ShowImage() {
	lightbox.style.display = "block";
	
	var resizeRatio = hiddenImage.naturalHeight / (viewportHeight - 20);
	var shownHeight = hiddenImage.naturalHeight / resizeRatio;
	var shownWidth = hiddenImage.naturalWidth / resizeRatio;
	var widthDiff = viewportWidth - shownWidth;
	var widthDiffHalf = widthDiff / 2;
	
	exitButton.style.left = widthDiffHalf + shownWidth + 10 +"px";
	leftArrow.style.left = widthDiffHalf - 75 +"px";
	rightArrow.style.left = widthDiffHalf + shownWidth + 10 +"px";
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