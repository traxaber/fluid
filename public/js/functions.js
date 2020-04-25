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
    promptDiv.parentElement.style.background = getComputedStyle(root).getPropertyValue("--base-2");
	promptDiv.childNodes[0].style.color = getComputedStyle(root).getPropertyValue("--current-word");
	input.style.background = getComputedStyle(root).getPropertyValue("--base-2");
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
	if(dark == "true"){
		darkMode.checked = true;
		root.style.setProperty("--base-1", getComputedStyle(root).getPropertyValue("--dark-1"));
		root.style.setProperty("--base-2", getComputedStyle(root).getPropertyValue("--dark-2"));
		root.style.setProperty("--base-3", getComputedStyle(root).getPropertyValue("--dark-3"));
		root.style.setProperty("--text", getComputedStyle(root).getPropertyValue("--white-1"));
		root.style.setProperty("--complete-bg", getComputedStyle(root).getPropertyValue("--dark-green-tint"));
		root.style.setProperty("--perfect", getComputedStyle(root).getPropertyValue("--gold"));
	} else {
		darkMode.checked = false;
		root.style.setProperty("--base-1", getComputedStyle(root).getPropertyValue("--light-1"));
		root.style.setProperty("--base-2", getComputedStyle(root).getPropertyValue("--light-2"));
		root.style.setProperty("--base-3", getComputedStyle(root).getPropertyValue("--light-3"));
		root.style.setProperty("--text", getComputedStyle(root).getPropertyValue("--black-1"));
		root.style.setProperty("--complete-bg", getComputedStyle(root).getPropertyValue("--light-green-tint"));
		root.style.setProperty("--perfect", getComputedStyle(root).getPropertyValue("--purple"));
	}
	promptDiv.parentElement.style.background = getComputedStyle(root).getPropertyValue("--base-2");
	input.style.background = getComputedStyle(root).getPropertyValue("--base-2");
	if(!epilepsy){
		promptDiv.childNodes[0].style.color = getComputedStyle(root).getPropertyValue("--current-word");
	}
}

