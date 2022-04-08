<template>
    <div>
        <div>
            <header id="navbar">
            <nav class="navbar">
                <a href="/" class="home-link">
                    <div class="navbar-logo">
                        <img src="@/assets/evermos.png" width="100%">
                    </div>
                </a>
                <ul class="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                <div class="menu">
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">About</a></li>
                    <!-- <li> -->
                        <button 
                            class="cart-button" 
                            @click="navigateTo('cart')"
                        >
                            Cart({{ cartItem.length }})
                        </button>
                        
                    <!-- </li> -->
                </div>
                </ul>
            </nav>
            </header>
            <div v-if="pages === 'product'">
                <Product 
                    @addItemToCart="addItemToCart"
                />
            </div>

            <div v-if="pages === 'cart'">
                <Cart 
                    @removeItemFromCart = "removeItemFromCart"
                    :cartItem = "cartItem"
                    @navigateTo = "navigateTo"
                    @close = "close"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Shop",
    data() {
        return {
            pages: "product",
            cartItem: []
        };
    },
    methods: {
        addItemToCart(pd) {
            this.cartItem.push(pd);
        },
        removeItemFromCart(pd) {
            this.cartItem.splice(this.cartItem.indexOf(pd), 1);
        },
        navigateTo(pages) {
            this.pages = pages;
        },
        close() {
            this.pages = 'product'
        },
    },

}
</script>
