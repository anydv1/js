  JAvaScript

// get the heading from the first article
const firstH2 = document.querySelector('.sensations');
// get its parent, the current article
const currentArticle = firstH2.parentNode;
console.log(currentArticle); // <article id="article-1">
// get the next sibling node of this parent
let nextNode = currentArticle.nextSibling;
while (nextNode && nextNode.nodeType !== 1) {
  // while there is a next sibling node and it is not an
  // element node, skip to the next sibling node
  nextNode = nextNode.nextSibling;
}
if (nextNode) {
  // if there is next sibling node and it is
  // the element node, then log it
  console.log(nextNode); // <article id="article-2">
  // get the first element child node of the nextArticle node
  const secondH2 = nextNode.children[0];
  console.log(secondH2.textContent); // 'How to grow Bonsai'
}

function Human(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}

var person1 = new Human("Virat", "Kohli");
console.log(Human.prototype)
console.log('letssee',person1)