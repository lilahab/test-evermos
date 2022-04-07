<template>
  <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-body">
                <button type="button" class="close" 
                    @click="$emit('close')"> X 
                </button>
                <slot name="body">
                  <div v-if="cartItem.length > 0">
                    <table>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                        <tr v-for="(pd,index) in cartItem" :key="index">
                          <td><img :src="pd.image" width="50%" class="image-cart"/></td>
                          <td>{{pd.title}}</td>
                          <td>{{pd.price}}</td>
                          <td><button class="remove-cart" @click="removeItemFromCart(pd)">Remove from cart</button></td>
                        </tr>
                    </table>
                </div>
                <div v-else>
                  no product
                </div>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
export default {
  props: ["cartItem"],
  methods: {
    removeItemFromCart(pd) {
      this.$emit("removeItemFromCart", pd);
    }
  }
};
</script>

<style scoped>
.close { 
  margin-left: 99%;
  cursor: pointer;
  margin-right: 10px;
  font-size: 20px;
  border: none;
  background-color: #fbbe24;
  color: #fff;
  width: 20px;
  border-radius: 5px;
}
td {
  padding: 10px;
}
.image-cart {
  max-width: 100px;
}
.remove-cart {
  border: none;
  background-color: #fbbe24;
  color: #fff;
  width: 150px;
  height: 30px;
  border-radius: 6px;
}
</style>