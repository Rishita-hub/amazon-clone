// document.addEventListener('DOMContentLoaded', function() {
//     const cartCountElement = document.getElementById('cart-count');
//     let cartCount = 0;

//     // Function to add item to cart
//     function addToCart(itemId, price) {
//         cartCount++;
//         cartCountElement.textContent = cartCount;
//         // Optionally, you can add the item to a list or perform other operations here
//         console.log(`Item ${itemId} added to cart`);
//     }

//     // Attach click event listeners to all 'Add to Cart' buttons
//     const addToCartButtons = document.querySelectorAll('.add-to-cart');
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             let itemId = button.id;
//             let price = parseFloat(button.previousElementSibling.textContent.slice(1)); // Extract price
//             addToCart(itemId, price);
//         });
//     });
// });






// document.addEventListener('DOMContentLoaded', function() {
//     const cartCountElement = document.getElementById('cart-count');
//     let cartCount = localStorage.getItem('cartCount') || 0; // Initialize cartCount from localStorage or default to 0
//     cartCountElement.textContent = cartCount; // Update cart count on page load

//     // Function to add item to cart
//     function addToCart(itemId, price) {
//         cartCount++;
//         cartCountElement.textContent = cartCount;
//         localStorage.setItem('cartCount', cartCount); // Update cart count in localStorage
//         // Optionally, you can add the item to a list or perform other operations here
//         console.log(`Item ${itemId} added to cart`);
//     }

//     // Function to remove item from cart
//     function removeFromCart(itemId, price) {
//         if (cartCount > 0) {
//             cartCount--;
//             cartCountElement.textContent = cartCount;
//             localStorage.setItem('cartCount', cartCount); // Update cart count in localStorage
//             // Optionally, you can remove the item from the cart list or perform other operations here
//             console.log(`Item ${itemId} removed from cart`);
//         }
//     }

//     // Attach click event listeners to all 'Add to Cart' buttons
//     const addToCartButtons = document.querySelectorAll('.add-to-cart');
//     addToCartButtons.forEach(button => {
//         let added = false; // Track if item is already added to cart
//         let itemId = button.id;
//         let price = parseFloat(button.previousElementSibling.textContent.slice(1)); // Extract price
        
//         button.addEventListener('click', function() {
//             if (!added) {
//                 addToCart(itemId, price);
//                 added = true;
//                 button.textContent = 'Remove from Cart';
//             } else {
//                 removeFromCart(itemId, price);
//                 added = false;
//                 button.textContent = 'Add to Cart';
//             }
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = localStorage.getItem('cartCount') || 0; // Initialize cartCount from localStorage or default to 0
    cartCountElement.textContent = cartCount; // Update cart count on page load

    // Function to add item to cart
    function addToCart(itemId, price) {
        cartCount++;
        cartCountElement.textContent = cartCount;
        localStorage.setItem('cartCount', cartCount); // Update cart count in localStorage
        console.log(`Item ${itemId} added to cart`);
    }

    // Function to reset cart count to 0
    function resetCartCount() {
        cartCount = 0;
        cartCountElement.textContent = cartCount;
        localStorage.setItem('cartCount', cartCount); // Update cart count in localStorage
        console.log('Cart count reset to 0');
    }

    // Attach click event listeners to all 'Add to Cart' buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        let itemId = button.id;
        let price = parseFloat(button.previousElementSibling.textContent.slice(1)); // Extract price
        let added = false; // Track if item is already added to cart

        button.addEventListener('click', function() {
            if (!added) {
                addToCart(itemId, price);
                added = true;
                button.textContent = 'Remove from Cart';
            } else {
                resetCartCount();
                added = false;
                button.textContent = 'Add to Cart';
            }
        });
    });
});

