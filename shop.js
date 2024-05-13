document.addEventListener("DOMContentLoaded", function () {
    showLoadingSpinner();
    setTimeout(hideLoadingSpinner, 2500);

    const buyButtons = document.querySelectorAll('.chocolate-card-footer button');

    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.chocolate-card');
            const name = card.querySelector(".name").textContent;
            console.log(name)
            const url = card.querySelector('.chocloate-card-body img').src;
            console.log(url);
            const price = card.querySelector('.price').textContent;
            console.log(price)

            const chocolate = {
                name: name,
                url: url,
                price: price
            };

            let shoppingList = localStorage.getItem('shoppingList');
            if (!shoppingList) {
                shoppingList = [];
            } else {
                shoppingList = JSON.parse(shoppingList);
            }

            shoppingList.push(chocolate);

            localStorage.setItem('shoppingList', JSON.stringify(shoppingList));


            if (confirm("Do you finish shopping if yes click OK otherwise click Cancel and continue shopping?")) {
                window.location.href = 'shopping_list.html';
            }
        });
    });
});

function HamburgerMenu() {
    const mylinks = document.querySelector(".navigation-links");
    if (mylinks.style.display === "block") {
        mylinks.style.display = "none";
    } else {
        mylinks.style.display = "block";
    }
}

function showLoadingSpinner() {
    document.querySelector('.loading-overlay').style.display = 'block';
}

function hideLoadingSpinner() {
    document.querySelector('.loading-overlay').style.display = 'none';
}

// Get all cart buttons
const cartButtons = document.querySelectorAll('.cart');

// Add event listener to each cart button
cartButtons.forEach(a => {
    a.addEventListener('click', function() {
        // Create modal window
        const modal = document.createElement('div');
        modal.classList.add('modal');

        // Set default item quantity
        let quantity = 1;

        // Modal content
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Cart</h2>
                <p>Quantity: <input type="number" value="${quantity}" min="1" max="10"></p>
                <button class="continue-shopping">Continue Shopping</button>
                <a href="cart.html" class="see-cart">See the Cart</a>
            </div>
        `;

        // Append modal to body
        document.body.appendChild(modal);

        // Get close button
        const closeButton = modal.querySelector('.close');

        // Close modal when close button is clicked
        closeButton.addEventListener('click', function() {
            modal.remove();
        });

        // Get quantity input field
        const quantityInput = modal.querySelector('input[type="number"]');

        // Update quantity variable when input value changes
        quantityInput.addEventListener('change', function() {
            quantity = parseInt(this.value);
        });

        // Get continue shopping button
        const continueShoppingButton = modal.querySelector('.continue-shopping');

        // Close modal when continue shopping button is clicked
        continueShoppingButton.addEventListener('click', function() {
            modal.remove();
        });

        const seeCartButton = modal.querySelector('.see-cart');

        // seeCartButton.addEventListener('click', function() {
        //     window.location.href = 'shopping_list.html';
        // });

        seeCartButton.addEventListener('click', function() {
            const quantity = quantityInput.value;
            window.location.href = `shopping_list.html?quantity=${quantity}`;
        });

        // if (confirm(seeCartButton)) {
        //     window.location.href = 'shopping_list.html';
        // }
    });
});



