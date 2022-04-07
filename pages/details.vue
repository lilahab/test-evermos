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
                    <li>
                        <button 
                            class="cart" 
                            @click="navigateTo('cart')"
                        >
                            Cart(0)
                        </button>
                        
                    </li>
                </div>
                </ul>
            </nav>
            </header>
        </div>
        <div>
            <img :src="$store.state.items.image" class="detail-image">
            <h2 class="detail-title">{{ title }}</h2>
            <h2 class="detail-price">Rp. {{ $store.state.items.price }}</h2>
            <div class="detail-description">
                <h4 class="desc">Description :</h4>
                <p>{{ $store.state.items.description }}</p>
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
        
    </div>
</template>
<script>

export default {
//   props: ["cartItem"],
  data() {
    return {
      title : '',
      cartItem: []
    }
  },
  methods: {
    addItemToCart(pd) {
        this.cartItem.push(pd);
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