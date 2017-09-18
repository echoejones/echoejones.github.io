var guest_count = document.getElementById("guest-count");

guest_count.addEventListener("input", function(){
	var current_count = guest_count.value;
	for (i = 1; i < 11; i++){
		var guest_name_element = document.getElementById("guest-name" + i).parentElement;
		if (i <= current_count){
			if (guest_name_element.classList.contains("hidden")) {
				guest_name_element.classList.remove("hidden");
			}
		} else {
			if (!guest_name_element.classList.contains("hidden")) {
				guest_name_element.classList.add("hidden");
			}
		}
	}
});