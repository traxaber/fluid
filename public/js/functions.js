// sets new prompt, taken from prompts list, and resets variables
function newPrompt() {
	last = "newPrompt";
	var rand = Math.floor(Math.random() * prompts.length);
	promptArr = prompts[rand].split(' ');

	promptDiv.style.textAlign = "left";
	reset();
}

// sets new prompt, taken from top n words in english variable
function topen(n) {
	var bank = eval("top" + n.toString());
	last = "top" + n.toString();

	promptArr = [];
	for (i=0;i<49;i++){
		promptArr.push(bank[Math.floor(Math.random() * bank.length)]);
	}
	promptArr.push(bank[Math.floor(Math.random() * bank.length)]);

	promptDiv.style.textAlign = "justify";
	reset();
}

// redo button
function redo(){
	if (last == "top100") topen(100);
	else if (last == "top1000") topen(1000);
	else newPrompt();
}

// reset necessary prompt variables
function reset(){
	promptDiv.innerHTML = "";
	for (var i=0; i<promptArr.length; i++){
		promptDiv.innerHTML += "<span>" + promptArr[i] + " </span>";
	}

	curr = 0;
	first = true;
	done = false;
	perfect = true;
	accRight = 0, accWrong = 0;
		promptDiv.parentElement.style.background = getComputedStyle(document.body).getPropertyValue("--base-2");
	promptDiv.childNodes[0].style.color = getComputedStyle(document.body).getPropertyValue("--current-word");
	input.style.background = getComputedStyle(document.body).getPropertyValue("--base-2");
	wpmSpan.innerHTML = "?";
	accSpan.innerHTML = "?";
	completed = "";
	input.value = "";
	input.focus();
}

// open and close hamburger menu
function toggleMenu(){
	if (popup.style.display === "none") {
			popup.style.display = "block";
		} else {
			popup.style.display = "none";
		}
}

// set theme
function setTheme(){
	const theme = dark === "true" ? "dark" : "light";
	darkMode.checked = dark === "true";

	document.body.setAttribute("data-theme", theme);

	promptDiv.parentElement.style.background = getComputedStyle(document.body).getPropertyValue("--base-2");
	input.style.background = getComputedStyle(document.body).getPropertyValue("--base-2");
	if(!epilepsy){
		promptDiv.childNodes[0].style.color = getComputedStyle(document.body).getPropertyValue("--current-word");
	}
}

