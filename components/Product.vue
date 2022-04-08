<template>
    <div>
        <div class="banner">
            <img src="@/assets/img2.jpg" width="100%">
        </div>
        <div id="slider">
        <transition-group tag="div" :name="transitionName" class="slides-group">
            <div v-if="show" :key="current" class="slide" :class="slides[current].className">
            <p>I'm {{slides[current].className}}!</p>
            </div>
        </transition-group>
        <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
            &#10094;
        </div>
        <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
            &#10095;
        </div>
        </div>
        <div class="product">
            <div v-for="(pd, index) in products" :key="index">
                <div class="card">
                    <div class="content">
                        <div>
                            <img class="products" v-bind:src="pd.image" alt="Avatar" width="100%" @click="clickedProduct(pd)">
                            <div @click="clickedProduct(pd)">
                                <p>{{ pd.title | truncate(30) }}</p> 
                                <h4>Rp. {{ pd.price }}</h4> 
                            </div>
                        </div>
                        <div>
                            <button class="cart" @click="addItemToCart(pd)">
                                <img src="@/assets/cart.jpeg" width="30px">
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
            showDetail: false,
            clickProduct: null,
            cartItem: [],
            pages: 'product',
            
        }
    },
    methods: {
        async getProduct() {
            const res = await this.$axios.$get("https://my-json-server.typicode.com/lilahab/server/products")
            this.products = res
        },

        clickedProduct(pd) {
            this.clickProduct = {...pd}
            this.$router.push({
            name: 'details',
            query: {
                title: pd.title
            }
            })
            this.$store.commit('SET_DATA', pd)
        },
        addItemToCart(pd) {
            this.$emit("addItemToCart", pd);
        },
    },
    mounted() {
        this.getProduct();
    },
    filters: {
        truncate: function (value, size) {
            if (!value) return '';
            value = value.toString();

            if (value.length <= size) {
                return value;
            }
            return value.substr(0, size) + '...';
        }
    }
}
</script>