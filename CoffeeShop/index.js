
document.addEventListener('DOMContentLoaded', function () {
    let favoriteIcon = document.getElementById("favorite");
    let favoriteList = document.getElementById("favoriteList");

    favoriteIcon.addEventListener("click", toggleFavoriteList);

    function toggleFavoriteList() {
        if (favoriteList.style.display === "none") {
            favoriteList.style.display = "block";
        } else {
            favoriteList.style.display = "none";
        }
    }

    let heartIcons = document.querySelectorAll('.bxs-heart');

    heartIcons.forEach(function (heartIcon) {
        heartIcon.addEventListener("click", toggleFavorite);
    });

    function toggleFavorite(event) {
        let productCard = event.target.closest('.menu_card');
        let productName = productCard.querySelector('h2').innerText;
        let existingProduct = [...favoriteList.children].find(child => child.querySelector('p').innerText === productName);

        if (existingProduct) {
       
            favoriteList.removeChild(existingProduct);
        } else {
           
            addToFavorites(productCard);
        }
    }

    function addToFavorites(productCard) {
        let productName = productCard.querySelector('h2').innerText;
        let productPrice = productCard.querySelector('h3').innerText;
        let productImageSrc = productCard.querySelector('.menu_image img').src;

        let productInFavorite = document.createElement("div");
        productInFavorite.innerHTML = `
            <div>
                <img src="${productImageSrc}" alt="${productName}">
                <p>${productName}</p>
                <p>${productPrice}</p>
            </div>
        `;

        favoriteList.appendChild(productInFavorite);
    }
});
document.addEventListener('DOMContentLoaded', function () {


    let cartIcon = document.getElementById("cart");
    let cartList = document.getElementById("cartList");
    let totalPriceDisplay = document.getElementById("totalPriceDisplay");
    let totalAmount = 0;

    cartIcon.addEventListener("click", toggleCartList);

    function toggleCartList() {
        if (cartList.style.display === "none") {
            cartList.style.display = "block";
        } else {
            cartList.style.display = "none";
        }
    }

    let cartIcons = document.querySelectorAll('.bxs-cart');

    cartIcons.forEach(function (cartIcon) {
        cartIcon.addEventListener("click", toggleCart);
    });

    function toggleCart(event) {
        let productCard = event.target.closest('.menu_card');
        let productName = productCard.querySelector('h2').innerText;
        let productPrice = parseFloat(productCard.querySelector('h3').innerText.replace('$', ''));

        let existingProduct = [...cartList.children].find(child => child.querySelector('p').innerText === productName);

        if (existingProduct) {

            let quantityElement = existingProduct.querySelector('.quantity');
            let quantity = parseInt(quantityElement.innerText);
            quantityElement.innerText = quantity + 1;
        } else {
       
            addToCart(productCard, productName, productPrice);
        }


        updateTotalPrice();
    }

    function addToCart(productCard, productName, productPrice) {
        let productImageSrc = productCard.querySelector('.menu_image img').src;

        let productInCart = document.createElement("div");
        productInCart.className= "buyCart"
        productInCart.innerHTML = `
            <div>
                <img src="${productImageSrc}" alt="${productName}">
                <p>${productName}</p>
                <p>${productPrice.toFixed(2)}</p>
                <p class="quantity">1</p>
            </div>
        `;


        cartList.appendChild(productInCart);
    }

    function updateTotalPrice() {
        totalAmount = 0;

        [...cartList.children].forEach(product => {
            let price = parseFloat(product.querySelector('p:nth-child(3)').innerText);
            let quantity = parseInt(product.querySelector('.quantity').innerText);
            totalAmount += price * quantity;
        });

      
        totalPriceDisplay.innerText = ` $${totalAmount.toFixed(2)}`;
    }
});


//SERVICE
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

}

signupBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");

}


document.addEventListener('DOMContentLoaded', function () {
    let cartIcon = document.getElementById("cart");
    let cartList = document.getElementById("cartList");

    cartIcon.addEventListener("click", openCartPage);

    function openCartPage() {
        let cartItems = [...cartList.getElementsByClassName("buyCart")];

   
        let newPageHTML = "<html><head><title>Shopping Cart</title></head><body><h1>Shopping Cart</h1><ul>";

        cartItems.forEach(item => {
            let itemName = item.querySelector('p:nth-child(2)').innerText;
            let itemPrice = item.querySelector('p:nth-child(3)').innerText;
            newPageHTML += `<li>${itemName} - ${itemPrice}</li>`;
        });
    }
    })
       
 
           


        