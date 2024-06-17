// Sample product data (replace with your actual data)
const products = [
    {
        name: 'Herbal Product',
        image: 'herbal.jpg', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        name: 'Moisturizing Cream',
        image: 'moisturizing.jpg', 
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Anti-Aging Serum',
        image: 'anti-aging.jpg', 
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    },
    {
        name: 'Sunscreen Lotion',
        image: 'sunscreen.jpg', 
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        name: 'Cleansing Gel',
        image: 'cleansing.jpg', 
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Night Cream',
        image: 'night-cream.jpg', 
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.'
    },
    {
        name: 'Night Cream',
        image: 'crema.jpg', 
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.'
    }
    // Add more products as needed
];

// Function to generate HTML for each product
function generateProductHTML(product) {
    return `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
        </div>
    `;
}

// Function to display products on the page
function displayProducts() {
    const productContainer = document.getElementById('product-container');

    // Generate HTML for each product and append to the main container
    products.forEach(product => {
        const productHTML = generateProductHTML(product);
        productContainer.innerHTML += productHTML;
    });
}

// Wait for the DOM content to load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
});
