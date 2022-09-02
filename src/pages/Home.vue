<template>
  <div>
    <app-header></app-header>
    <main class="w-[1170px] mx-auto px-4">

      <modal-food-item
        :modalVisible="modalVisible"
        :selectedFoodItem="selectedFoodItem"
        @addAdditionally="addAdditionally"
        @favorite="addToFavorites"
        @addSelectedFoodCart="addSelectedFoodCart"
        @notFavorite="removeToFavorites"
        @hideModal="hideModal"
        @increase="increaseCounter"
        @reduce="reduceCounter"/>

      <div v-for="menuItem in menuList" :key="menuItem.id">
        <div class="w-full mt-14" :id="menuItem.name">
          <h2 class="font-bold text-4xl text-[#212629]">{{ menuItem.name }}</h2>
          <div class="w-full flex flex-wrap gap-[22px]">
            <div class="food_item w-[32%] mt-7 relative"
              v-for="food in menuItem.foodList" :key="food.id">
              <div class="px-[16px] py-[23px] w-full rounded-t-[40px]"
                  :style="`background-color: ${food.bgColor}`">
                <div>
                  <img src="@/assets/icons/like.svg" alt="" class="w-[20px] h-[20px] cursor-pointer ml-2"
                      v-if="food.favorite"
                      @click="removeToFavorites(food)">
                  <img src="@/assets/icons/like-outline.svg" alt="" class="w-[20px] h-[20px] cursor-pointer ml-2"
                      @click="addToFavorites(food)"
                      v-else>
                </div>
                <div>
                  <img :src="`img/${food.img}.png`" alt="Изображение еды">
                </div>
              </div>
              <div class="absolute" v-if="food.additionally">
                <img src="@/assets/icons/additionally.svg" alt="" class="w-16 h-16 ml-5 mt-[-30px]">
              </div>
              <div class="food_item_two border border-[#ffffff80] p-5 rounded-bl-[5px] rounded-br-[40px]">
                <div class="w-[315px] text-left">
                  <h3 class="food_item_two_title text-[#212629] text-xl font-bold">
                    {{ food.title }}
                  </h3>
                </div>
                <div class="mt-[15px] flex items-center">
                  <span class="food_item_two_info font-light text-[#212629ae] text-sm"> 
                    {{food.grams}} 
                  </span>
                  <div class="w-[3.25px] h-[3.25px] bg-[#21262933] mx-[9px] rounded-full"></div>
                  <span class="food_item_two_info font-light text-[#212629ae] text-sm"> 
                    {{food.calories}} 
                  </span>
                  <div class="w-[3.25px] h-[3.25px] bg-[#21262933] mx-[9px] rounded-full"></div>
                  <span class="food_item_two_info font-bold text-[#212629ae] text-sm"> 
                    {{food.price}}₽
                  </span>
                </div>
                <div class="mt-5">
                  <p class="food_item_two_info font-light text-[#212629ae] text-[17px]">
                    {{ food.description }}
                  </p>
                </div>
                <div class="flex justify-between items-center mt-8">
                  <div class="rounded-full flex items-center border border-white py-[10px] px-5">
                    <button @click="reduceCounter(food)">
                      <img src="@/assets/icons/minus.svg" alt="" class="w-4 h-4 btns_black">
                      <img src="@/assets/icons/minus-white.svg" alt="" class="w-4 h-4 hidden btns_white">
                    </button>
                    <span class="food_item_two_title text-lg font-bold text-[#212629] text-center mx-2 w-10">
                      {{ food.counter }}
                    </span>
                    <button @click="increaseCounter(food)">
                      <img src="@/assets/icons/plus.svg" alt="" class="w-4 h-4 btns_black">
                      <img src="@/assets/icons/plus-white.svg" alt="" class="w-4 h-4 hidden btns_white">
                    </button>
                  </div>
                  <div class="food_item_two_title text-[#212629ae] text-base mr-10"
                      v-if="food.inCart === true">В корзине</div>
                  <button class="food_item_btn"
                    @click="addToCart(food)" v-if="food.inCart === false">
                    <span class="text-[#FE9102] font-bold text-lg">Добавить</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import modalFoodItem from '@/components/ModalFoodItem.vue'
export default {
  name: 'Home',
  components: { AppHeader, modalFoodItem },
  props: {
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

.food_item_two {
  transition: background 0.3s;
}
.food_item:hover {
  .food_item_two {
    background: #212629;
    color: rgba(255, 255, 255, 0.5);
    border: none;
    .food_item_two_title {
      color: white;
    }
    .food_item_two_info {
      color: #ffffff99;
    }
    .food_item_btn {
      background: #212629;
      box-shadow: 0 5px 15px 0 rgba(198, 198, 198, 0.1);
    }
    .btns_black {
      display: none;
    }
    .btns_white {
      display: block;
    }
  }
}
.food_item_btn {
  background: #E9E9E9;
  padding: 10px 50px;
  box-shadow: 0 5px 15px 0 rgba(0,0,0,0.1);
  border-radius: 99px;
}
</style>