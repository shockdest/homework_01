 // Modal beállítása JS-el
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const form = document.getElementById('form');
const email = document.getElementById('email');
const message1 = document.getElementById('message');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const cname = document.getElementById('cname');
const employees = document.getElementById('employees');
// const radio1 = document.getElementById('yes');
// const radio2 = document.getElementById('no');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
  const emailValue = email.value.trim();
  const message1Value = message1.value.trim();
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const cnameValue = cname.value.trim();
  const employeesValue = employees.value.trim();
  const phonenumberValue = phonenumber.value.trim();
  // const radio1Value = radio1.value.trim();
  // const radio2Value = radio2.value.trim();

	if(emailValue === '') {
		setErrorFor(email, 'Please enter your email address');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Please enter a valid email address');
	} else {
		setSuccessFor(email);
	}

  if(message1Value === '') {
		setErrorFor(message1, 'Please enter a message or question');
	} else {
		setSuccessFor(message1);
	}
	
	
	if(fnameValue === '') {
		setErrorFor(fname, 'Please enter your first name');
	} else {
		setSuccessFor(fname);
	}

  if(lnameValue === '') {
		setErrorFor(lname, 'Please enter your last name');
	} else {
		setSuccessFor(lname);
	}
	
	if(cnameValue === '') {
		setErrorFor(cname, 'Please enter your company name');
	} else{
		setSuccessFor(cname);
	}
  if(employeesValue === "noselect") {
		setErrorFor(employees, 'Please select number of employees');
	} else{
		setSuccessFor(employees);
	}

  if(phonenumberValue === '') {
		setErrorFor(phonenumber, 'Please enter a valid phone number');
	} else{
		setSuccessFor(phonenumber);
	}
	/* if(radio1Value.checked = true) {
		setErrorFor(radio1, 'yes?');
	} else{
		setSuccessFor(radio1);
	}
	if(radio2Value.checked = false) {
		setErrorFor(radio2, 'no?');
	} else{
		setSuccessFor(radio2);
	}
	*/

}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
  // formControl.style.color= 'red';
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
