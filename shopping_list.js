document.addEventListener("DOMContentLoaded", function() {
        displayShoppingList();
});

// function HamburgerMenu() {
//     const mylinks = document.querySelector(".navigation-links");
//     if (mylinks.style.display === "block") {
//         mylinks.style.display = "none";
//     } else {
//         mylinks.style.display = "block";
//     }
// }

// function showLoadingSpinner() {
//     document.querySelector('.loading-overlay').style.display = 'block';
// }

// function hideLoadingSpinner() {
//     document.querySelector('.loading-overlay').style.display = 'none';
// }

function displayShoppingList() {
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
    const cartContainer = document.querySelector('.cart_container');
    const cartTotalPrice = cartContainer.querySelector('.cart__item-total-price');

    cartContainer.innerHTML = ''; 

    if (shoppingList && shoppingList.length > 0) {
        shoppingList.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart__container-item');
            cartItem.innerHTML = `
                <div class="cart__container-info">
                    <div class="cart__item-header">
                        <h2 class="cart__header-text">${item.name}</h2>
                        <button class="cart__item-header-button" onclick="removeItem(${index})">Remove</button>
                    </div>
                    <div class="cart__item-image">
                    <img src=${item.url} alt=""/>
                    </div>
                    <div class="cart__item-total">
                    <button class="minus-btn">-</button>
                    <input type="text" class="quantity-input" value="1" readonly>
                    <button class="plus-btn">+</button>
                    <span class="cart__item-total-price">${item.price}</span>
                </div>
                
                </div>
            `;
            cartContainer.appendChild(cartItem);

        });
    } else {
        const emptyCartMessage = document.createElement('div');
        emptyCartMessage.textContent = 'Your shopping cart is empty';
        cartContainer.appendChild(emptyCartMessage);
    }

}


function removeItem(index) {
    let shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
    shoppingList.splice(index, 1); 
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList)); 
    displayShoppingList(); 
}

const removeButton = document.querySelector('.cart__item-header-button');
// Получаем элементы из DOM
const burgerIcon = document.querySelector('.burger-icon');
const headerLists = document.querySelectorAll('.header__list');



burgerIcon.addEventListener('click', function() {
    const screenWidth = window.innerWidth;
    const isListVisible = headerLists[0].style.display === 'block';
    
    if (screenWidth < 400 && !isListVisible) {
        headerLists.forEach(list => {
            list.style.display = 'block';
        });
    } else {

        headerLists.forEach(list => {
            list.style.display = 'none';
        });
    }
});

document.querySelector('.cart_container').addEventListener('click', function(event) {
    if (event.target.classList.contains('plus-btn')) {
        incrementQuantity(event);
    } else if (event.target.classList.contains('minus-btn')) {
        decrementQuantity(event);
    }
});


function incrementQuantity(event) {
    const item = event.target.closest('.cart__container-item');
    const input = item.querySelector('.quantity-input');
    let currentValue = parseInt(input.value);
    input.value = currentValue + 1;
}

function decrementQuantity(event) {
    const item = event.target.closest('.cart__container-item');
    const input = item.querySelector('.quantity-input');
    let currentValue = parseInt(input.value);
    if (currentValue > 0) {
        input.value = currentValue - 1;
    }
}