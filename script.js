// scripts.js

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
    const input = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(input)) {
            product.style.display = 'block'; // Ensure product is displayed
        } else {
            product.style.display = 'none'; // Hide product if it doesn't match search
        }
    });
}
