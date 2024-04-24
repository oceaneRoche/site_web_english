document.onreadystatechange = function () {
    if (document.readyState == 'interactive') {
        var cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

        var cartItemsContainer = document.getElementById('cart-items');
        var totalAmountSpan = document.getElementById('total-amount');
        var checkoutButton = document.getElementById('checkout-button');

        function renderCart() {
            cartItemsContainer.innerHTML = ''; // Effacer le contenu actuel du conteneur

            var totalAmount = 0;

            cartItems.forEach(function (item, index) {
                var cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');

                var itemName = document.createElement('p');
                itemName.textContent = item.name;

                var itemPrice = document.createElement('p');
                itemPrice.textContent = item.price;

                var deleteButton = document.createElement('button');
                deleteButton.textContent = 'Remove';
                deleteButton.classList.add('remove-button');
                deleteButton.addEventListener('click', function () {
                    cartItems.splice(index, 1);
                    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
                    renderCart();
                });

                var decreaseButton = document.createElement('button');
                decreaseButton.textContent = '-';
                decreaseButton.classList.add('quantity-button');
                decreaseButton.addEventListener('click', function () {
                    if (cartItems[index].quantity > 1) {
                        cartItems[index].quantity--;
                        renderCart();
                    }
                });

                var quantitySpan = document.createElement('span');
                quantitySpan.textContent = cartItems[index].quantity;

                var increaseButton = document.createElement('button');
                increaseButton.textContent = '+';
                increaseButton.classList.add('quantity-button');
                increaseButton.addEventListener('click', function () {
                    cartItems[index].quantity++;
                    renderCart();
                });

                cartItemDiv.appendChild(itemName);
                cartItemDiv.appendChild(itemPrice);
                cartItemDiv.appendChild(decreaseButton);
                cartItemDiv.appendChild(quantitySpan);
                cartItemDiv.appendChild(increaseButton);
                cartItemDiv.appendChild(deleteButton);

                cartItemsContainer.appendChild(cartItemDiv);

                var price = parseFloat(item.price.substring(1));
                var itemTotal = price * item.quantity;
                totalAmount += itemTotal;
            });

            var formattedTotalAmount = totalAmount.toFixed(2);
            totalAmountSpan.textContent = '$' + formattedTotalAmount;
        }

        checkoutButton.addEventListener('click', function () {
            // Redirection vers la page de paiement
            window.location.href = 'paiement.html';
        });

        renderCart();
    }
}
