let slider = document.getElementById("mySlider");
let output = document.getElementById("slider-value");

// get request
function requestJson(theUrl) {
    let request = new XMLHttpRequest();
    request.open("GET", "sliderdata.json", false ); 
    request.send();
    return JSON.parse(request.responseText);
}

// shows plans over 400k and hides button
function setMorePlans() {
	$('.more-plans').css("display", "block");
	$('.higher-plans').css("display", "none");
}

//change buttons from red to outlined
function changePlanButtons() {
	$('.changable-button').removeClass("btn-danger").addClass("btn-outline-secondary");
}


function colorPlanButtons(rowNumber) {
	let row_number = rowNumber
	$('.underlined-rows .row').css("background-color", "white");
	changePlanButtons();
	$('.'+row_number).css("background-color", "lightgrey");
	$('.'+row_number+ ' .changable-button').removeClass("btn-outline-secondary").addClass("btn-danger");
}


let sliderData = requestJson("sliderdata.json");

//slider is now json key/value pair that gets displayed
output.innerHTML = sliderData[slider.value]; 
slider.oninput = function() {
    output.innerHTML = sliderData[this.value];
    if (output.innerHTML == sliderData["81"]) {
    	output.innerHTML +="+" // slider displaying 2000000+
    }    
    
    if (this.value != 13) { changePlanButtons(); }
    if (this.value > 60) { setMorePlans(); }

    if (this.value >= 68 ) { colorPlanButtons("row2000k");}
    if (this.value < 68) { colorPlanButtons("row800k"); }
    if (this.value < 61) { colorPlanButtons("row400k"); }
    if (this.value < 34) { colorPlanButtons("row120k"); }
    if (this.value < 20) { colorPlanButtons("row50k"); }
    if (this.value < 15) { colorPlanButtons("row20k"); }
    if (this.value < 6) { colorPlanButtons(); }
}





function setMain(businessplan) {

	let main_element = "main-" + businessplan;
	let bg_element = businessplan + "-bg";

//background + plan change
	$('#bg-change').removeClass().addClass(bg_element);
	$('#main-business').css("display", "none");
	$('#main-agency').css("display", "none");
	$('#main-personal').css("display", "none");
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

