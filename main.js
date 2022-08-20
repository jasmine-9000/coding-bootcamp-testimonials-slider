// Class definitions
class Entry {
	constructor(imageSRC, author, title, quote) {
		this.imageSRC = imageSRC;
		this.author = author;
		this.title = title;
		this.quote = quote;
	}

}

// Load all entries now.
var Tanya = new Entry("./images/image-tanya.jpg", "Tanya Sinclair", "UX Engineer", 
				"\“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. \”"
				);
var John = new Entry("./images/image-john.jpg", "John Tarkpor", "Junior Front-end Developer", 
				"\“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \""
				);

var Entries = [Tanya, John];
console.log(Entries);

window.addEventListener("load", function() {
	const image = document.querySelector('#mugshot');
	const author = document.querySelector('.author');
	const quote = document.querySelector('.quote');
	const title = document.querySelector('.title');
	
	
	const prev = document.querySelector('.button__left');
	const next = document.querySelector('.button__right');
	
	var i = 0;
	var slide_total = 2;

	next.addEventListener("click", function() {
		console.log("next slide");
		i += 1;
		if( i > (slide_total - 1)) {
			i = 0;
		}
		image.src = Entries[i].imageSRC;
		author.innerText = Entries[i].author;
		title.innerText = Entries[i].title;
		quote.innerText = Entries[i].quote;
	});
	prev.addEventListener("click", function() {
		console.log("previous slide");
		i -= 1;
		if( i < 0) {
			i = (slide_total - 1);
		}
		image.src = Entries[i].imageSRC;
		author.innerText = Entries[i].author;
		title.innerText = Entries[i].title;
		quote.innerText = Entries[i].quote;
	});
	console.log("hello world");
});


