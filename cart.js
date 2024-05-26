let addbut = document.querySelectorAll(".card__add")
let cardname = document.querySelectorAll(".card__title")
let photos = document.querySelectorAll(".photo")

Cart.get()
let Carts = JSON.parse(localStorage.getItem("data"))
let products = document.querySelector(".prod_cont")

for (let i = 0; i < addbut.length; i++) {
    addbut[i].addEventListener("click", function() {
              //document.location.replace('cart.html');
              let object = {
                name: cardname[i].innerHTML,
                photo: photos[i].src
              }
              Cart.create(object)
              console.log(products.innerHTML)
              /*for (let j = 0; j < Carts.length; j++) {
                 products.innerHTML += `<div class="product">
                 <img src="${Carts[j].photo}" class="cart_img">
                 <span>${Carts[j].name}</span>
              </div>`
                 
              }*/
               
              
    })
}
 
 
 
 

