# Form Validation 1
<p>Create and validate a form in JavaScript without submitting it to a server while experimenting with different events.</p>
<p><a href="http://lianxiao.dev.fast.sheridanc.on.ca/xiaoyu/FormValidation1/index.html">See it</a></p>
There has:
<ul>
  <li>A css file which contains all of my style code</li>
  <li>An html file that the user will interact with</li>
  <li>A js file that contains my javascript code</li>
</ul>

<p>This survey ask the user:</p>
<ul>
    <li>Their First name and last name (two separate fields). They must enter in at least two characters for each field.</li>
    <li>Their age in a text field. This must be a number.</li>
    <li>Their street address. Must not be blank.</li>
    <li>Their province from a drop down list.</li>
    <li>A question using radio buttons (one must be selected).</li>
    <li>A question using multiple check boxes (at least TWO must be selected).</li>
</ul>
<p>If the user makes an error on any of the above fields, the text box/field should turn red, and an error message should be displayed in words. E.g., “Age must be a number between…”. Once the error has been fixed, these error messages disappear without having to click on the submit button.</p>
<h2>About error message</h2>
<ul>
    <li>All fields should be checked for errors as soon as the user goes onto the next question</li>
    <li>If the user hits submit while there are still errors, they should be told to go back and fix it. If all of the data is valid, display the message “Survey submitted successfully!”</li>
</ul>
<h2>Different event</h2>
<p>Add onchange event to Question1. when content of a form element have changed, the error message occur or not</p>
<pre>
document.forms[0][0].onchange = function (event) {
  userInput = document.forms['survey'][0];
  errorMessage = document.getElementById("error0");
  if (userInput.value.length < 2) {
    errorMessage.innerHTML = "At least two characters!";
    userInput.style.background = "darkred";
  } else {
    errorMessage.innerHTML = "";
    userInput.style.background = "transparent";
  }
};
</pre>
<P>Add onfocus event to Question2. when element gets focus, the error message occur or not</P>
<pre>
document.forms[0][1].onfocus = function (event) {
  userInput = document.forms['survey'][1];
  errorMessage = document.getElementById("error1");
  if (userInput.value.length < 2) {
    errorMessage.innerHTML = "At least two characters!";
    userInput.style.background = "darkred";
  } else {
    errorMessage.innerHTML = "";
    userInput.style.background = "transparent";
  }
};
</pre>
<P>Add oninput event to Question3. when element gets user input, the error message occur or not</P>
<pre>
document.forms[0][2].oninput = function (event) {
  userInput = document.forms['survey'][2];
  errorMessage = document.getElementById("error2");
  if (isNaN(userInput.value)) {
    errorMessage.innerHTML = "Must enter number!";
    userInput.style.background = "darkred";
  } else {
    errorMessage.innerHTML = "";
    userInput.style.background = "transparent";
  }
};
</pre>
<P>Add onblur event to Question4. when element loses focus, the error message occur or not</P>
<pre>
document.forms[0][3].onblur = function (event) {
  userInput = document.forms['survey'][3];
  errorMessage = document.getElementById("error3");
  if (userInput.value.length <= 0) {
    errorMessage.innerHTML = "Don't leave blank!";
    userInput.style.background = "darkred";
  } else {
    errorMessage.innerHTML = "";
    userInput.style.background = "transparent";
  }
};
</pre>
<P>Add onblur event to Question5. when element loses focus, the error message occur or not</P>
<pre>
document.getElementById("province").onblur = function (event) {
  userInput = document.forms['survey'].province;
  errorMessage = document.getElementById("error4");
  if (userInput.value == "no") {
    errorMessage.innerHTML = "Must choose one province!"
    userInput.style.backgroundColor = "darkred";
  } else {
    errorMessage.innerHTML = "";
    userInput.style.backgroundColor = "transparent";
  }
};
</pre>
<P>Add onmouseover event to Question6. when mouse is moved into the bounding box of element, the error message occur or not</P>
<pre>
document.getElementById("time").onmouseover = function (event) {
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
    document.getElementById("time").style.backgroundColor = "darkred";
  } else {
    errorMessage.innerHTML = "";
    document.getElementById("time").style.backgroundColor = "transparent";
    checkedRadiosNumber = 0;
  }
};
</pre>
<P>Add onmouseout event to Question7. when mouse is moved out of the bounding box of element, the error message occur or not</P>
<pre>
document.getElementById("store").onmouseout = function (event) {
  errorMessage = document.getElementById("error6");
  // array of elements that named stores
  var checkBox = document.getElementsByName("stores");
  // number of the cheched choice
  var checkedBoxNumber = 0;
  for (var i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked)
      checkedBoxNumber++;
  }
  if (checkedBoxNumber < 2) {
    errorMessage.innerHTML = "Must select at least two!";
    document.getElementById("store").style.backgroundColor = "darkred";
  } else {
    errorMessage.innerHTML = "";
    document.getElementById("store").style.backgroundColor = "transparent";
    checkedBoxNumber = 0;
  }
};
</pre>
