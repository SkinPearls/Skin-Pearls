// script.js.


function showSkinProducts() {
    // Redirect to skin-products.html
    window.location.href = "skin-products.html";
}

function showHairProducts() {
    // Redirect to hair-products.html
    window.location.href = "hair-products.html";
}


document.addEventListener('DOMContentLoaded', function() {
    const headingSizeSelect = document.getElementById('heading-size');
    const headingColorInput = document.getElementById('heading-color');
    const headingAlignmentSelect = document.getElementById('heading-alignment');
    const mainHeader = document.querySelector('header h1');

    // Event listeners for controls
    headingSizeSelect.addEventListener('change', function() {
        mainHeader.style.fontSize = this.value;
    });

    headingColorInput.addEventListener('input', function() {
        mainHeader.style.color = this.value;
    });

    headingAlignmentSelect.addEventListener('change', function() {
        mainHeader.style.textAlign = this.value;
    });
});
function searchProducts() {
    const input = document.getElementById('search-input').value.trim().toLowerCase();
    const products = document.querySelectorAll('.product');
    let found = false; // Flag to check if any products match the search

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(input)) {
            product.style.display = 'block'; // Ensure product is displayed
            found = true; // Set found to true if at least one product matches
        } else {
            product.style.display = 'none'; // Hide product if it doesn't match search
        }
    });

    // Show message if no products match the search
    const noResultsMessage = document.getElementById('no-results-message');
    if (!found) {
        noResultsMessage.style.display = 'block'; // Display the message
    } else {
        noResultsMessage.style.display = 'none'; // Hide the message if products are found
    }
}
// Add event listener for key press in the search input field
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default form submission behavior
            searchProducts(); // Call your search function
        }
    });
});
// JavaScript for accordion functionality
// JavaScript to toggle accordion functionality
        document.addEventListener('DOMContentLoaded', function () {
            const accordionItems = document.querySelectorAll('.accordion-item');

            accordionItems.forEach(item => {
                item.querySelector('.accordion-header').addEventListener('click', function () {
                    item.classList.toggle('active');
                    const accordionBody = item.querySelector('.accordion-body');
                    accordionBody.classList.toggle('active');
                });
            });
        });
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    const headingSizeSelect = document.getElementById('heading-size');
    console.log(headingSizeSelect); // Check if element is correctly selected
    
    // Your event listeners and other JavaScript code here
});
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.contact-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const product = button.closest('.product');
            const productName = product.querySelector('h3').textContent.trim();
            const fileId = product.dataset.fileId;
            const productImageUrl = encodeURIComponent(product.querySelector('img').src);
            const phoneNumber = '96171653297'; // Replace with your WhatsApp phone number

            // Construct the WhatsApp message with product details
            const message = `I'm interested in placing an order for the following product:\n${productName}\n ${decodeURIComponent(productImageUrl)}`;

            // Encode the message for including in the WhatsApp URL
            const encodedMessage = encodeURIComponent(message);

            // Redirect to WhatsApp with the encoded message
            window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('.contact-button');

    if (contactButton) {
        contactButton.addEventListener('click', function() {
            const productName = document.querySelector('header h1').textContent.trim(); // Get the product name from the header
            const productImageUrl = encodeURIComponent(document.querySelector('.product-image img').src);
            const phoneNumber = '96171653297'; // Replace with your WhatsApp phone number

            // Construct the WhatsApp message with product details
            const message = `I'm interested in placing an order for the following product:\n${productName}\n ${decodeURIComponent(productImageUrl)}`;

            // Encode the message for including in the WhatsApp URL
            const encodedMessage = encodeURIComponent(message);

            // Redirect to WhatsApp with the encoded message
            window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        });
    }
});
const menuButton = document.getElementById('menuButton');
const panel = document.getElementById('panel');

menuButton.addEventListener('click', () => {
    panel.classList.toggle('open');
});
// Function to close the panel
function closePanel() {
    panel.classList.remove('open');
}

// Add event listener to close panel when clicking outside
document.addEventListener('click', (event) => {
    if (!panel.contains(event.target) && !menuButton.contains(event.target)) {
        closePanel();
    }
});
let myCart = JSON.parse(localStorage.getItem('myCart')) || []; // Initialize the buy list from localStorage

// Function to toggle the star
function toggleStar(element) {
    const product = element.closest('.product');
    const productName = product.getAttribute('data-name');
    const productPrice = product.getAttribute('data-price');
    const productImage = product.getAttribute('data-image');

    element.classList.toggle('active');

    if (element.classList.contains('active')) {
        // Add to my cart
        if (!myCart.some(item => item.name === productName)) {
            myCart.push({
                name: productName,
                image: productImage,
                price: productPrice
            });
localStorage.setItem('myCart', JSON.stringify(myCart)); // Save to localStorage
            updateMyCartPage(); // Update the cart panel dynamically
            showNotification('This product has been added to your cart'); // Show notification
        
        }
   } else {
        // Remove from cart
        myCart = myCart.filter(item => item.name !== productName);
        localStorage.setItem('myCart', JSON.stringify(myCart)); // Save to localStorage
        updateMyCartPage(); // Update the cart panel dynamically
        showNotification('This product has been removed from your cart'); // Show notification
    }
}

// Function to update the My Cart HTML page
function updateMyCartPage() {
    const myCartContainer = document.getElementById('my-cart-container');
    if (myCartContainer) {
        myCartContainer.innerHTML = '';

        myCart.forEach((item, index) => {
            const listItem = document.createElement('div');
            listItem.classList.add('cart-item');
            listItem.innerHTML = `
                <h3>${item.name}</h3>
                
                <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
            `;
            myCartContainer.appendChild(listItem);
        });
    }
}

// Function to remove a product from the cart
function removeFromCart(index) {
    const productName = myCart[index].name;
    myCart.splice(index, 1);
    localStorage.setItem('myCart', JSON.stringify(myCart)); // Update localStorage
    updateMyCartPage(); // Update the cart display

    // Also turn off the star for this product
    document.querySelectorAll('.product').forEach(product => {
        if (product.getAttribute('data-name') === productName) {
            const starIcon = product.querySelector('.star-icon');
            if (starIcon) {
                starIcon.classList.remove('active');
            }
        }
    });

    // Show notification
    showNotification('This product has been removed from your cart');
}

// Function to toggle the panel visibility
function togglePanel() {
    const panel = document.getElementById('panel');
    if (panel.classList.contains('open')) {
        panel.classList.remove('open');
    } else {
        panel.classList.add('open');
    }
}

// Function to close the panel
function closePanel() {
    const panel = document.getElementById('panel');
    panel.classList.remove('open');
}

// Add event listener to close panel when clicking outside
document.addEventListener('click', (event) => {
    const panel = document.getElementById('panel');
    const menuButton = document.getElementById('menuButton');
    if (!panel.contains(event.target) && !menuButton.contains(event.target)) {
        closePanel();
    }
});

// Call updateMyCartPage to initialize the My Cart display on page load
document.addEventListener('DOMContentLoaded', () => {
    updateMyCartPage();

    // Restore star states based on the My Cart
    document.querySelectorAll('.product').forEach(product => {
        const productName = product.getAttribute('data-name');
        const starIcon = product.querySelector('.star-icon');
        if (myCart.some(item => item.name === productName)) {
            starIcon.classList.add('active');
        }
    });
});
// Function to show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 2000);
}
// Call updateMyCartPanel to initialize the My Cart display on page load
document.addEventListener('DOMContentLoaded', () => {
    updateMyCartPanel();

    // Restore star states based on the My Cart
    document.querySelectorAll('.product').forEach(product => {
        const productName = product.getAttribute('data-name');
        const starIcon = product.querySelector('.star-icon');
        if (myCart.some(item => item.name === productName)) {
            starIcon.classList.add('active');
        }
    });
});