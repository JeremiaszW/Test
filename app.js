


function setMainBusiness() {

	document.getElementById("main-personal").style.display = "none";
	document.getElementById("main-agency").style.display = "none";

	document.getElementById("main-business").style.display = "block";

	document.getElementById("bg-change").classList.add('business-bg');
	document.getElementById("bg-change").classList.remove('personal-bg');
	document.getElementById("bg-change").classList.remove('agency-bg');


}


function setMainPersonal() {

	document.getElementById("main-agency").style.display = "none";
	document.getElementById("main-business").style.display = "none";

	document.getElementById("main-personal").style.display = "block";

	document.getElementById("bg-change").classList.add('personal-bg');
	document.getElementById("bg-change").classList.remove('agency-bg');
	document.getElementById("bg-change").classList.remove('business-bg');

}


function setMainAgency() {

	document.getElementById("main-personal").style.display = "none";
	document.getElementById("main-business").style.display = "none";

	document.getElementById("main-agency").style.display = "block";

	document.getElementById("bg-change").classList.remove('personal-bg');
	document.getElementById("bg-change").classList.add('agency-bg');
	document.getElementById("bg-change").classList.remove('business-bg');

}

let slider = document.getElementById("mySlider");
let output = document.getElementById("slider-value");

output.innerHTML = slider.value; 
slider.oninput = function() {
    output.innerHTML = this.value;
}
