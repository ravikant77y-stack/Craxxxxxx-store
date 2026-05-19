function addToCart(name,price){
alert(name + " added to cart");
}

function searchProducts(){
let input=document.getElementById("searchInput").value.toLowerCase();
let products=document.querySelectorAll(".product");

products.forEach(product=>{
let text=product.innerText.toLowerCase();
product.style.display=text.includes(input)?"block":"none";
});
}

function filterCategory(category){
let sections=document.querySelectorAll(".category-section");

sections.forEach(section=>{
if(category==="all"){
section.style.display="block";
}else{
section.style.display=section.classList.contains(category)?"block":"none";
}
});
}

function sendWhatsApp(){
alert("WhatsApp order feature placeholder");
}
