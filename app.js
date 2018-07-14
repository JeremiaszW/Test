let slider = document.getElementById("mySlider");
let output = document.getElementById("slider-value");

// get request
function requestJson(theUrl) {
    let request = new XMLHttpRequest();
    request.open("GET", "sliderdata.json", false ); 
    request.send();
    return JSON.parse(request.responseText);
}

let sliderData = requestJson("sliderdata.json");
//slider is now json key/value pair
output.innerHTML = sliderData[slider.value]; 
slider.oninput = function() {
    output.innerHTML = sliderData[this.value];
    if (output.innerHTML == sliderData["81"]) {
    	output.innerHTML +="+" // slider displaying 2000000+
    }    
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


