var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");

console.clear();
//console.log(document.getElementsByTagName("number").onchange);

// Iteration 1.1
function updateSubtot(product) {
	let subtotal;
	let unitPrice = product.querySelector(".pu span").innerHTML;
	let quantity = product.querySelector('.qty input[value][type="number"]').value;
	subtotal = quantity * unitPrice;
	product.querySelector(".subtot span").innerHTML = subtotal;
	console.log(subtotal);
	return subtotal;
}

function calcAll() {
	// Iteration 1.2
	let total = 0;
	document.querySelectorAll(".product").forEach(function(product) {
		total += updateSubtot(product);
	});
	document.querySelector("h2 span").innerHTML = total;
}
$calc.onclick = calcAll;

//  Delete Button

let button = document.querySelector(".btn.btn-delete");
console.log("test " + button);

button.onclick = function() {
	element = document.querySelector("tbody");
	console.log(element.parentNode);
	//console.log("click" + element + element.firstChild);
	element.removeChild(element);
};

//  Add Product
