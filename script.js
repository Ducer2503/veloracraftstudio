// Shopping Cart System
class ShoppingCart {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('veloraCart')) || [];
        this.init();
    }

    init() {
        this.updateCartCount();
        this.setupEventListeners();
        this.loadProducts();
    }

    setupEventListeners() {
        // Newsletter forms
        document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.showToast('Thank you for subscribing!', 'success');
            e.target.reset();
        });

        document.getElementById('footer-newsletter-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.showToast('Thank you for subscribing!', 'success');
            e.target.reset();
        });
    }

    // Product data
    getProducts() {
        return [
            {
                id: 1,
                name: "Classic Bunny Crochet Toy",
                price: 24.99,
                salePrice: 19.99,
                images: [
                    "Products/1/01 Bunny Crochet 01 (1).png",
                    "Products/1/01 Bunny Crochet 01 (2).png",
                    "Products/1/01 Bunny Crochet 01 (3).png",
                    "Products/1/01 Bunny Crochet 01 (4).png",
                    "Products/1/01 Bunny Crochet 01 (5).png",
                    "Products/1/01 Bunny Crochet 01 (6).png",
                    "Products/1/01 Bunny Crochet 01 (7).png",
                    "Products/1/01 Bunny Crochet 01 (8).png"
                ],
                description: "Adorable handmade bunny crochet toy, perfect for children and collectors. Made with premium cotton yarn and child-safe materials.",
                variants: {
                    colors: ["White", "Pink", "Blue", "Yellow"],
                    sizes: ["Small (6 inch)", "Medium (8 inch)", "Large (10 inch)"]
                },
                category: "Animals",
                inStock: true,
                featured: true
            },
            {
                id: 2,
                name: "Cotton Bunny Friend",
                price: 22.99,
                salePrice: null,
                images: [
                    "Products/2/01 Bunny Crochet 01 (8).png"
                ],
                description: "Soft and cuddly cotton bunny toy, handmade with love. Perfect companion for your little one.",
                variants: {
                    colors: ["Natural", "Beige", "Cream"],
                    sizes: ["Small (6 inch)", "Medium (8 inch)"]
                },
                category: "Animals",
                inStock: true,
                featured: false
            },
            {
                id: 3,
                name: "Rainbow Bunny Collection",
                price: 29.99,
                salePrice: 24.99,
                images: [
                    "Products/3/01 Bunny Crochet 01 (1).png",
                    "Products/3/01 Bunny Crochet 01 (2).png",
                    "Products/3/01 Bunny Crochet 01 (3).png",
                    "Products/3/01 Bunny Crochet 01 (4).png",
                    "Products/3/01 Bunny Crochet 01 (5).png",
                    "Products/3/01 Bunny Crochet 01 (6).png",
                    "Products/3/01 Bunny Crochet 01 (7).png",
                    "Products/3/01 Bunny Crochet 01 (8).png"
                ],
                description: "Colorful rainbow bunny toy with vibrant colors and soft texture. A cheerful addition to any collection.",
                variants: {
                    colors: ["Rainbow", "Pastel", "Bright"],
                    sizes: ["Medium (8 inch)", "Large (10 inch)"]
                },
                category: "Animals",
                inStock: true,
                featured: true
            },
            {
                id: 4,
                name: "Premium Bunny Deluxe",
                price: 35.99,
                salePrice: null,
                images: [
                    "Products/4/01 Bunny Crochet 01 (1).png",
                    "Products/4/01 Bunny Crochet 01 (2).png",
                    "Products/4/01 Bunny Crochet 01 (3).png",
                    "Products/4/01 Bunny Crochet 01 (4).png",
                    "Products/4/01 Bunny Crochet 01 (5).png",
                    "Products/4/01 Bunny Crochet 01 (6).png",
                    "Products/4/01 Bunny Crochet 01 (7).png",
                    "Products/4/01 Bunny Crochet 01 (8).png"
                ],
                description: "Deluxe handmade bunny with premium materials and intricate details. Perfect for collectors and special gifts.",
                variants: {
                    colors: ["White", "Gray", "Brown"],
                    sizes: ["Large (10 inch)", "Extra Large (12 inch)"]
                },
                category: "Animals",
                inStock: true,
                featured: false
            },
            {
                id: 5,
                name: "Baby Bunny Soft Toy",
                price: 18.99,
                salePrice: 14.99,
                images: [
                    "Products/5/01 Bunny Crochet 01 (1).png",
                    "Products/5/01 Bunny Crochet 01 (2).png",
                    "Products/5/01 Bunny Crochet 01 (3).png",
                    "Products/5/01 Bunny Crochet 01 (4).png",
                    "Products/5/01 Bunny Crochet 01 (5).png",
                    "Products/5/01 Bunny Crochet 01 (6).png",
                    "Products/5/01 Bunny Crochet 01 (7).png",
                    "Products/5/01 Bunny Crochet 01 (8).png"
                ],
                description: "Gentle and soft baby bunny toy, specially designed for infants and toddlers. Made with extra soft materials.",
                variants: {
                    colors: ["Baby Pink", "Baby Blue", "Mint Green"],
                    sizes: ["Small (6 inch)", "Medium (8 inch)"]
                },
                category: "Animals",
                inStock: true,
                featured: true
            },
            {
                id: 6,
                name: "Elegant Bunny Classic",
                price: 27.99,
                salePrice: null,
                images: [
                    "Products/6/01 Bunny Crochet 01 (1).png",
                    "Products/6/01 Bunny Crochet 01 (2).png",
                    "Products/6/01 Bunny Crochet 01 (3).png",
                    "Products/6/01 Bunny Crochet 01 (4).png",
                    "Products/6/01 Bunny Crochet 01 (5).png",
                    "Products/6/01 Bunny Crochet 01 (6).png",
                    "Products/6/01 Bunny Crochet 01 (7).png",
                    "Products/6/01 Bunny Crochet 01 (8).png"
                ],
                description: "Elegant and sophisticated bunny toy with classic design. Perfect as a decorative piece or thoughtful gift.",
                variants: {
                    colors: ["Ivory", "Charcoal", "Navy"],
                    sizes: ["Medium (8 inch)", "Large (10 inch)"]
                },
                category: "Animals",
                inStock: true,
                featured: false
            }
        ];
    }

    loadProducts() {
        const products = this.getProducts();
        
        // Load featured products on homepage
        const featuredContainer = document.getElementById('featured-products');
        if (featuredContainer) {
            const featuredProducts = products.filter(p => p.featured);
            featuredContainer.innerHTML = featuredProducts.map(product => this.createProductCard(product)).join('');
        }

        // Load all products on products page
        const productsContainer = document.getElementById('products-container');
        if (productsContainer) {
            productsContainer.innerHTML = products.map(product => this.createProductCard(product)).join('');
        }

        // Load product detail on product detail page
        const productDetailContainer = document.getElementById('product-detail');
        if (productDetailContainer) {
            const urlParams = new URLSearchParams(window.location.search);
            const productId = parseInt(urlParams.get('id'));
            const product = products.find(p => p.id === productId);
            if (product) {
                productDetailContainer.innerHTML = this.createProductDetail(product);
                this.setupProductGallery();
                this.setupVariants();
                this.loadRelatedProducts(productId);
            } else {
                productDetailContainer.innerHTML = `
                    <div class="text-center py-5">
                        <i class="fas fa-exclamation-triangle fa-3x text-warning mb-3"></i>
                        <h3>Product Not Found</h3>
                        <p class="text-muted">The product you're looking for doesn't exist or has been removed.</p>
                        <a href="products.html" class="btn btn-primary">Browse All Products</a>
                    </div>
                `;
            }
        }
    }

    createProductCard(product) {
        const discount = product.salePrice ? Math.round((1 - product.salePrice / product.price) * 100) : 0;
        
        return `
            <div class="col-md-6 col-lg-4">
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.images[0]}" alt="${product.name}">
                        ${product.salePrice ? `<span class="product-badge">${discount}% OFF</span>` : ''}
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-price">
                            <span class="price-current">$${product.salePrice || product.price}</span>
                            ${product.salePrice ? `<span class="price-original">$${product.price}</span>` : ''}
                        </div>
                        <div class="d-flex gap-2">
                            <a href="product-detail.html?id=${product.id}" class="btn btn-outline-primary flex-fill">
                                <i class="fas fa-eye me-2"></i>View Details
                            </a>
                            <button class="btn btn-add-cart" onclick="cart.addToCart(${product.id})">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    createProductDetail(product) {
        const discount = product.salePrice ? Math.round((1 - product.salePrice / product.price) * 100) : 0;
        
        return `
            <div class="row">
                <div class="col-lg-6">
                    <div class="product-gallery">
                        <div class="main-image">
                            <img id="main-image" src="${product.images[0]}" alt="${product.name}">
                        </div>
                        <div class="thumbnail-list">
                            ${product.images.map((img, index) => `
                                <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="cart.changeImage(${index})">
                                    <img src="${img}" alt="${product.name} ${index + 1}">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <h1 class="mb-4">${product.name}</h1>
                    <div class="product-price mb-4">
                        <span class="price-current h2">$${product.salePrice || product.price}</span>
                        ${product.salePrice ? `
                            <span class="price-original h4">$${product.price}</span>
                            <span class="badge bg-danger ms-2">${discount}% OFF</span>
                        ` : ''}
                    </div>
                    <p class="lead mb-4">${product.description}</p>
                    
                    <div class="mb-4">
                        <h5>Color</h5>
                        <div class="variant-options">
                            ${product.variants.colors.map(color => `
                                <button class="variant-option" data-variant="color" data-value="${color}">${color}</button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <h5>Size</h5>
                        <div class="variant-options">
                            ${product.variants.sizes.map(size => `
                                <button class="variant-option" data-variant="size" data-value="${size}">${size}</button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="d-flex gap-3 mb-4">
                        <button class="btn btn-primary btn-lg" onclick="cart.addToCart(${product.id})">
                            <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                        </button>
                        <button class="btn btn-outline-primary btn-lg">
                            <i class="fas fa-heart me-2"></i>Add to Wishlist
                        </button>
                    </div>
                    
                    <div class="product-meta">
                        <p><i class="fas fa-check-circle text-success me-2"></i>In Stock</p>
                        <p><i class="fas fa-truck me-2"></i>Free Shipping on orders over $50</p>
                        <p><i class="fas fa-shield-alt me-2"></i>30-day return policy</p>
                    </div>
                </div>
            </div>
        `;
    }

    setupProductGallery() {
        // Gallery functionality is handled by changeImage method
    }

    setupVariants() {
        const variantButtons = document.querySelectorAll('.variant-option');
        variantButtons.forEach(button => {
            button.addEventListener('click', function() {
                const variantType = this.dataset.variant;
                const variantValue = this.dataset.value;
                
                // Remove active class from same variant type
                document.querySelectorAll(`[data-variant="${variantType}"]`).forEach(btn => {
                    btn.classList.remove('selected');
                });
                
                // Add active class to clicked button
                this.classList.add('selected');
            });
        });
        
        // Select first option by default
        document.querySelectorAll('.variant-options').forEach(group => {
            const firstButton = group.querySelector('.variant-option');
            if (firstButton) {
                firstButton.classList.add('selected');
            }
        });
    }

    loadRelatedProductsForCart() {
        const relatedContainer = document.getElementById('related-products');
        if (relatedContainer) {
            const products = this.getProducts();
            const relatedProducts = products.slice(0, 3);
            relatedContainer.innerHTML = relatedProducts.map(product => this.createProductCard(product)).join('');
        }
    }

    loadRelatedProducts(currentProductId) {
        const relatedContainer = document.getElementById('related-products');
        if (relatedContainer) {
            const products = this.getProducts();
            const relatedProducts = products.filter(p => p.id !== currentProductId).slice(0, 3);
            relatedContainer.innerHTML = relatedProducts.map(product => this.createProductCard(product)).join('');
        }
    }

    changeImage(index) {
        const mainImage = document.getElementById('main-image');
        const thumbnails = document.querySelectorAll('.thumbnail');
        
        // Get current product ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        const product = this.getProducts().find(p => p.id === productId);
        
        if (mainImage && product && product.images[index]) {
            mainImage.src = product.images[index];
            
            // Update active thumbnail
            thumbnails.forEach((thumb, i) => {
                thumb.classList.toggle('active', i === index);
            });
        }
    }

    addToCart(productId) {
        const product = this.getProducts().find(p => p.id === productId);
        if (!product) return;

        const selectedColor = document.querySelector('[data-variant="color"].selected')?.dataset.value || 'Default';
        const selectedSize = document.querySelector('[data-variant="size"].selected')?.dataset.value || 'Default';

        const cartItem = {
            id: productId,
            name: product.name,
            price: product.salePrice || product.price,
            image: product.images[0],
            color: selectedColor,
            size: selectedSize,
            quantity: 1
        };

        // Check if item already exists in cart
        const existingItemIndex = this.cart.findIndex(item => 
            item.id === cartItem.id && 
            item.color === cartItem.color && 
            item.size === cartItem.size
        );

        if (existingItemIndex > -1) {
            this.cart[existingItemIndex].quantity += 1;
        } else {
            this.cart.push(cartItem);
        }

        this.saveCart();
        this.updateCartCount();
        this.showToast(`${product.name} added to cart!`, 'success');
    }

    removeFromCart(index) {
        this.cart.splice(index, 1);
        this.saveCart();
        this.updateCartCount();
        this.loadCartItems();
        this.loadRelatedProductsForCart();
        this.showToast('Item removed from cart', 'info');
    }

    updateQuantity(index, change) {
        this.cart[index].quantity += change;
        if (this.cart[index].quantity <= 0) {
            this.removeFromCart(index);
        } else {
            this.saveCart();
            this.loadCartItems();
        }
    }

    saveCart() {
        localStorage.setItem('veloraCart', JSON.stringify(this.cart));
    }

    updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }

    loadCartItems() {
        const cartContainer = document.getElementById('cart-items');
        const cartSummary = document.getElementById('cart-summary');
        
        if (!cartContainer) return;

        if (this.cart.length === 0) {
            cartContainer.innerHTML = `
                <div class="text-center py-5">
                    <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                    <h4>Your cart is empty</h4>
                    <p class="text-muted">Add some adorable crochet toys to get started!</p>
                    <a href="products.html" class="btn btn-primary">Shop Now</a>
                </div>
            `;
            if (cartSummary) cartSummary.style.display = 'none';
            return;
        }

        cartContainer.innerHTML = this.cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h5 class="cart-item-title">${item.name}</h5>
                    <p class="text-muted">Color: ${item.color} | Size: ${item.size}</p>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="cart.updateQuantity(${index}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="cart.updateQuantity(${index}, 1)">+</button>
                </div>
                <div class="item-total">
                    <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
                <button class="btn btn-sm btn-outline-danger" onclick="cart.removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');

        this.updateCartSummary();
        if (cartSummary) cartSummary.style.display = 'block';
    }

    updateCartSummary() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 50 ? 0 : 5.99;
        const total = subtotal + shipping;

        const summaryContainer = document.getElementById('cart-summary');
        if (summaryContainer) {
            summaryContainer.innerHTML = `
                <h4 class="mb-4">Order Summary</h4>
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span>Shipping:</span>
                    <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
                </div>
                <div class="summary-row total">
                    <span>Total:</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
                <button class="btn btn-primary btn-lg w-100 mt-4">
                    <i class="fas fa-credit-card me-2"></i>Proceed to Checkout
                </button>
                <a href="products.html" class="btn btn-outline-secondary w-100 mt-2">
                    Continue Shopping
                </a>
            `;
        }
    }

    showToast(message, type = 'info') {
        const toastContainer = document.querySelector('.toast-container') || this.createToastContainer();
        
        const toast = document.createElement('div');
        toast.className = `custom-toast toast-${type}`;
        toast.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        toastContainer.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    createToastContainer() {
        const container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
        return container;
    }
}

// Initialize cart when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.cart = new ShoppingCart();
    
    // Load cart items if on cart page
    if (document.getElementById('cart-items')) {
        cart.loadCartItems();
    }
});

// Add slide out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
