

//     document.addEventListener('DOMContentLoaded', function() {
//         const addToCartButtons = document.querySelectorAll('.add-to-cart');
//         const cartCountElement = document.getElementById('cart-count');
//         const cartItems = {};

//         // Function to update cart UI
//         function updateCartUI() {
//             // Update cart count
//             cartCountElement.textContent = Object.keys(cartItems).length;

//             // Update cart display (you can customize this part as per your layout)
//             console.log('Current Cart Items:', cartItems);
//         }

//         // Add click event listener to each "Add to cart" button
//         addToCartButtons.forEach(button => {
//             button.addEventListener('click', function() {
//                 const productId = this.id;

//                 if (cartItems[productId]) {
//                     // Product is already in the cart, so remove it
//                     delete cartItems[productId];
//                     console.log(`Removed ${productId} from cart`);
//                 } else {
//                     // Product is not in the cart, so add it
//                     cartItems[productId] = true;
//                     console.log(`Added ${productId} to cart`);
//                 }

//                 // Update cart UI
//                 updateCartUI();
//             });
//         });
//     });


    
//     // document.addEventListener('DOMContentLoaded', function() {
//     //     const searchInput = document.getElementById('search-input');
//     //     const categoryFilter = document.getElementById('category-filter');
//     //     const productBoxes = document.querySelectorAll('.box');

//     //     // Add input event listener to search input
//     //     searchInput.addEventListener('input', function() {
//     //         const searchTerm = searchInput.value.trim().toLowerCase();
//     //         const selectedCategory = categoryFilter.value.toLowerCase();

//     //         productBoxes.forEach(box => {
//     //             const productName = box.querySelector('h2').textContent.toLowerCase();

//     //             // Check if the product name contains the search term and matches the selected category
//     //             if (productName.includes(searchTerm) && (selectedCategory === 'all' || productName.includes(selectedCategory))) {
//     //                 box.style.display = 'block'; // Show the product box
//     //             } else {
//     //                 box.style.display = 'none'; // Hide the product box if it doesn't match
//     //             }
//     //         });
//     //     });

//     //     // Add change event listener to category filter
//     //     categoryFilter.addEventListener('change', function() {
//     //         const searchTerm = searchInput.value.trim().toLowerCase();
//     //         const selectedCategory = categoryFilter.value.toLowerCase();

//     //         productBoxes.forEach(box => {
//     //             const productName = box.querySelector('h2').textContent.toLowerCase();

//     //             // Check if the product name contains the search term and matches the selected category
//     //             if (productName.includes(searchTerm) && (selectedCategory === 'all' || productName.includes(selectedCategory))) {
//     //                 box.style.display = 'block'; // Show the product box
//     //             } else {
//     //                 box.style.display = 'none'; // Hide the product box if it doesn't match
//     //             }
//     //         });
//     //     });
//     // });


//     document.addEventListener('DOMContentLoaded', function() {
//         const mainProductImage = document.getElementById('main-product-image');
//         const relatedImagesGrid = document.getElementById('related-images-grid');

//         // Dummy data for related images and prices (replace with your actual data)
//         const relatedProducts = [
//             { image: '../related_image1.jpg', price: '$19.99' },
//             { image: '../related_image2.jpg', price: '$29.99' },
//             { image: '../related_image3.jpg', price: '$24.99' },
//             { image: '../related_image4.jpg', price: '$14.99' },
//             { image: '../related_image5.jpg', price: '$34.99' },
//             { image: '../related_image6.jpg', price: '$39.99' },
//             { image: '../related_image7.jpg', price: '$49.99' },
//             { image: '../related_image8.jpg', price: '$19.99' },
//             { image: '../related_image9.jpg', price: '$29.99' },
//             { image: '../related_image10.jpg', price: '$24.99' }
//         ];

//         // Function to generate related images grid
//         function generateRelatedImagesGrid() {
//             relatedImagesGrid.innerHTML = ''; // Clear existing content

//             relatedProducts.forEach(product => {
//                 const imageElement = document.createElement('img');
//                 imageElement.src = product.image;
//                 imageElement.alt = 'Related Product';
//                 imageElement.style.width = '100px'; // Adjust size as needed

//                 const priceElement = document.createElement('p');
//                 priceElement.textContent = `Price: ${product.price}`;

//                 const containerDiv = document.createElement('div');
//                 containerDiv.classList.add('related-product');

//                 containerDiv.appendChild(imageElement);
//                 containerDiv.appendChild(priceElement);

//                 relatedImagesGrid.appendChild(containerDiv);
//             });

//             relatedImagesGrid.style.display = 'grid'; // Show the grid
//         }

//         // Add click event listener to main product image
//         mainProductImage.addEventListener('click', function() {
//             generateRelatedImagesGrid();
//         });
//     });


// // JavaScript code in index.html

// document.addEventListener('DOMContentLoaded', function() {
//     const cart = document.getElementById('cart');
//     const cartCount = document.getElementById('cart-count');
//     const productGrid = document.getElementById('product-grid');

//     // Function to handle adding item to cart
//     function addToCart(price) {
//         let count = parseInt(cartCount.textContent);
//         cartCount.textContent = count + 1;
//     }

//     // Function to handle removing item from cart
//     function removeFromCart() {
//         let count = parseInt(cartCount.textContent);
//         if (count > 0) {
//             cartCount.textContent = count - 1;
//         }
//     }

//     // Event delegation for Add to Cart buttons
//     productGrid.addEventListener('click', function(event) {
//         if (event.target.classList.contains('add-to-cart')) {
//             let price = parseFloat(event.target.parentNode.querySelector('.price').textContent.slice(1)); // Extract price
//             addToCart(price);
//         }
//     });

//     // Event delegation for Remove from Cart buttons
//     cart.addEventListener('click', function(event) {
//         if (event.target.id === 'cart' || event.target.tagName === 'I') {
//             removeFromCart();
//         }
//     });

//     // Function to load products from second.html
//     function loadProducts() {
//         fetch('second.html')
//             .then(response => response.text())
//             .then(data => {
//                 // Create a temporary div to parse the HTML
//                 const tempDiv = document.createElement('div');
//                 tempDiv.innerHTML = data;

//                 // Extract grid items from second.html
//                 const gridItems = tempDiv.querySelectorAll('.grid-item');

//                 // Append grid items to product-grid div
//                 gridItems.forEach(item => {
//                     productGrid.appendChild(item);
//                 });
//             })
//             .catch(error => console.error('Error loading products:', error));
//     }

//     // Load products when the page loads
//     loadProducts();
// });

document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountElement = document.getElementById('cart-count');
    const cartItems = {};

    function updateCartUI() {
        cartCountElement.textContent = Object.keys(cartItems).length;
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.id;
            if (cartItems[productId]) {
                delete cartItems[productId];
            } else {
                cartItems[productId] = true;
            }
            updateCartUI();
        });
    });

    const mainProductImage = document.getElementById('main-product-image');
    const relatedImagesGrid = document.getElementById('related-images-grid');

    if (mainProductImage && relatedImagesGrid) {
        const relatedProducts = [
            { image: 'images/related_image1.jpg', price: '$19.99' },
            { image: 'images/related_image2.jpg', price: '$29.99' },
            { image: 'images/related_image3.jpg', price: '$24.99' },
            { image: 'images/related_image4.jpg', price: '$14.99' },
            { image: 'images/related_image5.jpg', price: '$34.99' },
            { image: 'images/related_image6.jpg', price: '$39.99' },
            { image: 'images/related_image7.jpg', price: '$49.99' },
            { image: 'images/related_image8.jpg', price: '$19.99' },
            { image: 'images/related_image9.jpg', price: '$29.99' },
            { image: 'images/related_image10.jpg', price: '$24.99' }
        ];

        function generateRelatedImagesGrid() {
            relatedImagesGrid.innerHTML = '';
            relatedProducts.forEach(product => {
                const imageElement = document.createElement('img');
                imageElement.src = product.image;
                imageElement.alt = 'Related Product';
                imageElement.style.width = '100px';

                const priceElement = document.createElement('p');
                priceElement.textContent = `Price: ${product.price}`;

                const containerDiv = document.createElement('div');
                containerDiv.classList.add('related-product');

                containerDiv.appendChild(imageElement);
                containerDiv.appendChild(priceElement);

                relatedImagesGrid.appendChild(containerDiv);
            });
            relatedImagesGrid.style.display = 'grid';
        }

        mainProductImage.addEventListener('click', generateRelatedImagesGrid);
    }

    const cart = document.getElementById('cart');
    const productGrid = document.getElementById('product-grid');

    function addToCart(price) {
        let count = parseInt(cartCountElement.textContent);
        cartCountElement.textContent = count + 1;
    }

    function removeFromCart() {
        let count = parseInt(cartCountElement.textContent);
        if (count > 0) {
            cartCountElement.textContent = count - 1;
        }
    }

    if (productGrid) {
        productGrid.addEventListener('click', function (event) {
            if (event.target.classList.contains('add-to-cart')) {
                let price = parseFloat(event.target.parentNode.querySelector('.price')?.textContent?.slice(1) || '0');
                addToCart(price);
            }
        });
    }

    if (cart) {
        cart.addEventListener('click', function (event) {
            if (event.target.id === 'cart' || event.target.tagName === 'I') {
                removeFromCart();
            }
        });
    }

    function loadProducts() {
        fetch('second.html')
            .then(response => response.text())
            .then(data => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;
                const gridItems = tempDiv.querySelectorAll('.grid-item');
                gridItems.forEach(item => {
                    productGrid.appendChild(item);
                });
            })
            .catch(error => console.error('Error loading products:', error));
    }

    loadProducts();
});
