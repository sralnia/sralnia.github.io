var titleSize = 0;
var titleTexts = ["s", "sr", "sra", "sral", "sral", "sraln", "sralni", "sralnia", "sralni", "sraln", "sral", "sra", "sr"];

function changeTitleText() {
	document.getElementsByTagName("title")[0].innerHTML = titleTexts[titleSize++%titleTexts.length];
}

if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", function() {
		setInterval(changeTitleText, 250);
	});
} else if (document.attachEvent) {
	document.attachEvent("onreadystatechange", function() {
		setInterval(changeTitleText, 250);
	});
}