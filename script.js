var pictures = document.getElementById("photo-grid");

for (var i = 0; i < 345; i++){
	var img = document.createElement("img");
	img.src = "thumbnails/Nathan Echoe Wedding ("+ (i + 1) +").jpg";
	img.className += "thumbnail";
	
	pictures.appendChild(img);
}