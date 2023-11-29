// Retrieve cart items from localStorage or initialize an empty array
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  // Add the item to the cart
  cartItems.push({ name: itemName, price: itemPrice });

  // Update the cart display
  updateCartDisplay();

  // Update the cart in localStorage
  updateCartInLocalStorage();
}

// Function to update the cart display
function updateCartDisplay() {
  // Update the cart container with the current cart items
  let cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = '<h3>Shopping Cart</h3>';

  if (cartItems.length === 0) {
    // Display a message when the cart is empty
    cartContainer.innerHTML += '<p>Your cart is empty.</p>';
  } else {
    // Display each item in the cart
    cartItems.forEach(item => {
      let itemElement = document.createElement('div');
      itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      itemElement.style.fontSize = '10px'; // Set font size to 16px for items
      cartContainer.appendChild(itemElement);
    });

    // Display the total price
    let totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    let totalElement = document.createElement('p');
    totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    totalElement.style.fontSize = '10px'; // Set font size to 18px for total
    cartContainer.appendChild(totalElement);
  }
}

// Function to update the cart in localStorage
function updateCartInLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}
