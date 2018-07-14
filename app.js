let slider = document.getElementById("mySlider");
let output = document.getElementById("slider-value");

output.innerHTML = slider.value; 
slider.oninput = function() {
    output.innerHTML = this.value;
}


function setMain(businessplan) {

	let main_element = "main-" + businessplan;
	let bg_element = businessplan + "-bg";

//background + plan change
	$('#bg-change').removeClass().addClass(bg_element);
	$('#main-business').css("display", "none")
	$('#main-agency').css("display", "none")
	$('#main-personal').css("display", "none")
	$('#'+ main_element).css("display", "block");
//memo change	
	if (main_element == "main-business") {
		document.getElementById("memo-change").innerHTML = "We offer plans for Businesses of all sizes.";
	} else if (main_element == "main-agency") {
		document.getElementById("memo-change").innerHTML = "For Agencies and Consultants working with client sites.";
	} else if (main_element == "main-personal") {
		document.getElementById("memo-change").innerHTML = "For personal projects and sites with low traffic.";
	} 
}