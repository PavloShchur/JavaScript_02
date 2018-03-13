let emailField = document.getElementById("email");
let nameField = document.getElementById("name");
let tourField = document.getElementById("tourID");

emailField.onfocus = function() {
	if ( emailField.value == "your email") {
		emailField.value = "";
	}
};

emailField.onblur = function() {
	if ( emailField.value == "") {
		emailField.value = "your email";
	}
};

nameField.onfocus = function() {
    if ( nameField.value == "your name") {
        nameField.value = "";
    }
};

nameField.onblur = function() {
    if (nameField.value == "") {
        nameField.value = "your name";
    }
};

tourField.onfocus = function() {
    if (tourField.value == "your tour") {
        tourField.value = "";
    }
};

tourField.onblur = function() {
    if (tourField.value == "") {
        tourField.value = "your tour";
    }
};