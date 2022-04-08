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
                    <li>
                        <button 
                            class="cart" 
                            @click="navigateTo('cart')"
                        >
                            Cart({{cartItem.length}})
                        </button>
                        
                    </li>
                </div>
                </ul>
            </nav>
            </header>
        </div>
        <div>
            <img :src="items.image" class="detail-image">
            <h2 class="detail-title">{{ title }}</h2>
            <h2 class="detail-price">Rp. {{ items.price }}</h2>
            <div class="detail-description">
                <h4 class="desc">Description :</h4>
                <p>{{ items.description }}</p>
                <h4 class="desc">Variant :</h4> 
                <div v-for="variant in items.variant" :key="variant">
                    <button class="detail-variant"> {{ variant }} </button>
                </div>
            </div>
            <div>
                <button class="cart-details">
                    <img src="@/assets/cart.jpeg" width="30px">
                    <span class="cart" align="center" @click="addItemToCart(pd)">Add to Cart</span>
                </button>
                <button class="buy-now">
                    <span>Buy Now</span>
                </button>
            </div>
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
</template>
<script>

export default {
  data() {
    return {
      title : '',
      cartItem: [],
      pages: 'details',
      items: this.$store.state.items
    }
  },
  methods: {
    addItemToCart(items) {
        this.cartItem.push(items);
    },
    navigateTo(pages) {
        this.pages = pages;
    },
    close() {
        this.pages = 'details'
    },
  },
  created() {
   this.title = this.$route.query.title
  }
}
</script>
<style scoped>
button.cart {
    border: none;
    background-color: hsl(0, 0%, 15%);
    color: #fff;
    font-size: 16px;
}

</style>