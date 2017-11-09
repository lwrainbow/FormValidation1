# Form Validation 1
<p>Create and validate a form in JavaScript without submitting it to a server while experimenting with different events.</p>
<p><a href="http://lianxiao.dev.fast.sheridanc.on.ca/portfolio/FormValidation1/index.html">See it</a></p>
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
document.forms[0][0].onchange = function(event) {};
</pre>
<P>Add onfocus event to Question2. when element gets focus, the error message occur or not</P>
<pre>
document.forms[0][1].onfocus = function(event) {};
</pre>
<P>Add oninput event to Question3. when element gets user input, the error message occur or not</P>
<pre>
document.forms[0][2].oninput = function(event) {};
</pre>
<P>Add onblur event to Question4. when element loses focus, the error message occur or not</P>
<pre>
document.forms[0][3].onblur = function(event) {};
</pre>
<P>Add onmouseover event to Question6. when mouse is moved into the bounding box of element, the error message occur or not</P>
<pre>
document.getElementById("time").onmouseover = function(event){};
</pre>
<P>Add onmouseout event to Question7. when mouse is moved out of the bounding box of element, the error message occur or not</P>
<pre>
document.getElementById("store").onmouseout = function(event) {};
</pre>
