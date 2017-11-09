window.addEventListener("load", function(){
	// the field uesr change the input
	var userInput;
	
	// the field error message occur
	var errorMessage;
	
	// add onchange event to Question1. when content of a form element have changed, the error message occur or not
	document.forms[0][0].onchange = function(event) {
		userInput = document.forms['survey'][0];
		errorMessage = document.getElementById("error0");
		if (userInput.value.length < 2){
			errorMessage.innerHTML = "At least two characters!";
			userInput.style.background = "#BA324F";
		} else {
			errorMessage.innerHTML = "";
			userInput.style.background = "transparent";
		}
	};
	
	// add onfocus event to Question2. when element gets focus, the error message occur or not
	document.forms[0][1].onfocus = function(event) {
		userInput = document.forms['survey'][1];
		errorMessage = document.getElementById("error1");
		if (userInput.value.length < 2){
			errorMessage.innerHTML = "At least two characters!";
			userInput.style.background = "#BA324F";
		} else {
			errorMessage.innerHTML = "";
			userInput.style.background = "transparent";
		}
	};
	
	// add oninput event to Question3. when element gets user input, the error message occur or not
	document.forms[0][2].oninput = function(event) {
		userInput = document.forms['survey'][2];
		errorMessage = document.getElementById("error2");
		if (isNaN(userInput.value)) {
			errorMessage.innerHTML = "Must enter number!";
			userInput.style.background = "#BA324F";
		} else {
			errorMessage.innerHTML = "";
			userInput.style.background = "transparent";
		}
	};
	
	// add onblur event to Question4. when element loses focus, the error message occur or not
	document.forms[0][3].onblur = function(event) {
		userInput = document.forms['survey'][3];
		errorMessage = document.getElementById("error3");
		if (userInput.value.length <= 0) {
			errorMessage.innerHTML = "Don't leave blank!";
			userInput.style.background = "#BA324F";
		} else {
			errorMessage.innerHTML = "";
			userInput.style.background = "transparent";
		}
	};
	
	// add onblur event to Question5. when element loses focus, the error message occur or not
	document.getElementById("province").onblur = function(event){
		userInput = document.forms['survey'].province;
		errorMessage = document.getElementById("error4");
		if (userInput.value == "no"){
			errorMessage.innerHTML = "Must choose one province!"
			userInput.style.backgroundColor = "#BA324F";
		} else {
			errorMessage.innerHTML = "";
			userInput.style.backgroundColor = "transparent";
		}
    };

	// add onmouseover event to Question6. when mouse is moved into the bounding box of element, the error message occur or not
	document.getElementById("time").onmouseover = function(event){
		errorMessage = document.getElementById("error5");
		// array of elements that named times
		var radios = document.getElementsByName("times");
		// number of the cheched choice 
		var checkedRadiosNumber = 0;
		for (var i = 0; i < radios.length; i++) {
			if (radios[i].checked)
				checkedRadiosNumber++;
		}
		if (checkedRadiosNumber < 1) {
			errorMessage.innerHTML = "Must select one!";
			errorMessage.style.color = "black";
			document.getElementById("time").style.backgroundColor = "#BA324F";
		} else {
			errorMessage.innerHTML = "";
			document.getElementById("time").style.backgroundColor = "transparent";
			checkedRadiosNumber = 0;
		}
	};
	
	// add onmouseout event to Question7. when mouse is moved out of the bounding box of element, the error message occur or not
	document.getElementById("store").onmouseout = function(event) {
		errorMessage = document.getElementById("error6");
		// array of elements that named stores
		var checkBox = document.getElementsByName("stores");
		// number of the cheched choice
		var checkedBoxNumber = 0;
		for (var i = 0; i < checkBox.length; i++) {
			if (checkBox[i].checked)
				checkedBoxNumber++;
		}
		if (checkedBoxNumber < 2){
			errorMessage.innerHTML = "Must select at least two!";
			errorMessage.style.color = "black";
			document.getElementById("store").style.backgroundColor = "#BA324F";
		} else {
			errorMessage.innerHTML = "";
			document.getElementById("store").style.backgroundColor = "transparent";
			checkedBoxNumber = 0;
		}
	};
	
	// add onmouseout event to submit botton. when user click all the field whether or not have error
	document.getElementById("submit").onclick = function(event) {
		errorMessage = document.getElementById("error7");
		// array of elements that named error
		var error = document.getElementsByClassName("error");
		// number of the field have error
		var question = 0;
		question = 0;
		for (var i = 0; i < error.length; i++) {
			if (error[i].innerHTML.length > 0)
				question++;
		}
		if (question > 0)
			errorMessage.innerHTML = "Have error. Please go back and fix it!";
		else
			errorMessage.innerHTML = "Survey submitted successfully!";
		// return false to not 
		return false;
	}; 
});