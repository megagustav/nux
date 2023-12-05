function citationStyle() {
	const paragraphs = document.querySelectorAll('.single article .content p');
	
	paragraphs.forEach((paragraph) => {
		var text = paragraph.innerHTML;
		var textParent = document.querySelectorAll('main.single article .content.single.publication');
		text = text.replace(/\(\D{0,99}\d\d\d\d\)/g,'<span class="citation">$&</span>');
		// match '(', then look for 0 to 99 non-digits to avoid matching whole paragraphs, then four digits for the year, and close the bracket again
		console.log(text);
		var textParent = text.parentNode;
		//paragraph.parentNode.replaceChild(text, paragraph);
	});
}

window.onload = citationStyle();