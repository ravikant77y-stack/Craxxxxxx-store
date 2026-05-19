let cart = [];

function addToCart(name, price) {
cart.push({ name, price });
alert(name + " added to cart");
updateCart();
}

function updateCart() {
let cartDiv = document.getElementById("cart");

if (!cartDiv) return;

let total = 0;

cartDiv.innerHTML = "<h2>Cart</h2>";

cart.forEach(item => {
cartDiv.innerHTML += `
<p>${item.name} - ₹${item.price}</p>
`;
total += item.price;
});

cartDiv.innerHTML += `<h3>Total: ₹${total}</h3>`;
}

function searchProducts() {
let input = document.getElementById("searchInput").value.toLowerCase();

let products = document.querySelectorAll(".product");

products.forEach(product => {
let text = product.innerText.toLowerCase();

product.style.display =
text.includes(input)
? "block"
: "none";
});
}

function filterCategory(category) {

let sections =
document.querySelectorAll(".category-section");

sections.forEach(section => {

if (category === "all") {
section.style.display = "block";
}
else {
section.style.display =
section.classList.contains(category)
? "block"
: "none";
}

});
}

function sendWhatsApp() {

let name =
document.getElementById("name").value;

let phone =
document.getElementById("phone").value;

let address =
document.getElementById("address").value;

if (cart.length === 0) {
alert("Cart is empty");
return;
}

let message =
`New Order:%0A%0A`;

cart.forEach(item => {
message +=
`${item.name} - ₹${item.price}%0A`;
});

let total = cart.reduce(
(sum, item) => sum + item.price,
0
);

message +=
`%0ATotal: ₹${total}%0A%0A`;

message +=
`Customer Name: ${name}%0A`;

message +=
`Phone: ${phone}%0A`;

message +=
`Address: ${address}`;

let whatsappNumber =
"919930328353";

let url =
`https://wa.me/${whatsappNumber}?text=${message}`;

window.open(url, "_blank");
}
