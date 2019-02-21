# FormValidation
FormValidation using JQuery

Form validation is a way for you to tell the user what kind of input is required in each field, and allows you to notify the user when the input is incorrect. There are many ways to do form validation, but in this assignment, by using JQuery, you will write a plugin that displays information/error messages besides the fields. 

Requirements

The code files for form validation are validate.html, validate.css and validate.js. You will only modify validate.js.

The validations are as follows:

•	The username field must contain only alphabetical or numeric characters.
•	The password field should be at least six characters long.

•	The email field should be a valid email address (abc@def.xyz). Everything is alphanumeric, except “@”. There can be any number of characters before and after “@” and there will be three characters after dot. 

When the page is fully loaded, you should insert a <span> notification element immediately after each form field. The notification elements should initially be hidden.

When the field is currently being edited, the notification element’s text should be infoMessage, its class should be “info”, and it should be visible.
When the field is not being edited:

•	If the field is empty, the notification element should be hidden.

•	If the field is non-empty and the form field validates, the notification element’s text should be “OK”, its class should be “ok”, and it should be visible.

•	If the field is non-empty and the form field does not validate, the notification element’s text should be “Error”, its class should be “error”, and it should be visible.

Hints
You should use the form events functions to detect when a form field gains or loses focus. You should not use mouse and keyboard events such as click or keydown: there are multiple ways to give a form field focus, and it is difficult to detect all of them reliably using mouse and keyboard events. Span elements can be added using element creation and DOM insertion.

