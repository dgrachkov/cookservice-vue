<template>
  <div>
    <app-header></app-header>
    <main class="w-full max-w-[1170px] mx-auto px-4">
      <modal-food-item
        :modalVisible="modalVisible"
        :selectedFoodItem="selectedFoodItem"
        @addAdditionally="addAdditionally"
        @favorite="addToFavorites"
        @addSelectedFoodCart="addSelectedFoodCart"
        @notFavorite="removeToFavorites"
        @hideModal="hideModal"
        @increase="increaseCounter"
        @reduce="reduceCounter"
      />

      <div v-for="menuItem in menuList" :key="menuItem.id">
        <div class="w-full mt-10 md:mt-14" :id="menuItem.name">
          <h2 class="font-bold text-3xl md:text-4xl text-[#212629]">{{ menuItem.name }}</h2>
          <food-item 
            :menuItem="menuItem"
            @favorite="addToFavorites"
            @notFavorite="removeToFavorites"
            @inCart="addToCart"
            @increase="increaseCounter"
            @reduce="reduceCounter"
            @addAdditionally="addAdditionally"
            @addSelectedFoodCart="addSelectedFoodCart"
          />
        </div>
      </div>
    </main>

    <div class="fixed bottom-0 py-2 w-full flex md:hidden justify-center"
      v-if="cart.listDishes.length >= 1"
      @click="$router.push('/корзина')">
      <div class="cart_btn cursor-pointer text-[#212629] font-bold text-lg">
        Заказать {{ cart.listDishes.length }} блюдо 
        на {{ cart.totalAmount }}₽
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import ModalFoodItem from '@/components/ModalFoodItem.vue'
import FoodItem from '@/components/FoodItem.vue'
export default {
  name: 'Home',
  components: { AppHeader, ModalFoodItem, FoodItem },
  props: {
    cart: {
      type: Object
    },
    menuList: {
      type: Object
    },
    modalVisible: {
      type: Boolean,
      default: false
    },
    selectedFoodItem: {
      type: Object
    }
  },
  methods: {
    selectedFoodBlock(e) {
      if (e.additionally === true) {
        this.selectedFoodItem = e
      }
    },
    addToFavorites(dish) {
      this.$emit('favorite', dish)
    },
    removeToFavorites(dish) {
      this.$emit('notFavorite', dish)
    },
    addToCart(dish) {
      this.$emit('inCart', dish)
    },
    increaseCounter(dish) {
      this.$emit('increase', dish)
    },
    reduceCounter(dish) {
      this.$emit('reduce', dish)
    },
    hideModal() {
      this.$emit('hideModal')
    },
    addAdditionally(additionally) {
      this.$emit('addAdditionally', additionally)
    },
    addSelectedFoodCart(selectedFoodItem) {
      this.$emit('addSelectedFoodCart', selectedFoodItem)
    }
  }
}
</script>

<style lang="scss">
::-webkit-scrollbar {
    width: 5px;
}
::-webkit-scrollbar-track {
    background: white;
    border: 4px solid transparent;
    background-clip: content-box; 
}
::-webkit-scrollbar-thumb {
    background: #212629;
    border: 1px solid white;
}
</style>
