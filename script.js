// script.js

function showSkinProducts() {
    // Redirect to skin-products.html
    window.location.href = "skin-products.html";
}

function showHairProducts() {
    // Redirect to hair-products.html
    window.location.href = "hair-products.html";
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
