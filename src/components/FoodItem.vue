<template>
  <div class="dishes w-full flex gap-0 md:gap-5 flex-wrap">

    <div class="food_item hidden md:block md:w-[48.6%] lg:w-[49%] mt-7 relative"
      v-for="food in menuItem.foodList" :key="food.id">
      <div class="px-[16px] py-[23px] rounded-t-[40px]"
        :style="`background-color: ${food.bgColor}`">
        <div>
          <img src="@/assets/icons/like.svg" alt="" class="w-[20px] h-[20px] cursor-pointer ml-2"
            v-if="food.favorite"
            @click="removeToFavorites(food)">
          <img src="@/assets/icons/like-outline.svg" alt="" class="w-[20px] h-[20px] cursor-pointer ml-2"
            @click="addToFavorites(food)"
            v-else>
        </div>
        <div class="flex justify-center">
          <img :src="`img/${food.img}.png`" alt="Изображение еды">
        </div>
      </div>
      <div class="absolute" v-if="food.additionally">
        <img src="@/assets/icons/additionally.svg" alt="" class="w-16 h-16 ml-5 mt-[-30px]">
      </div>
      <div class="food_item_two border border-[#ffffff80] p-5 rounded-bl-[5px] rounded-br-[40px]">
        <div class="w-[315px] text-left">
          <h3 class="food_item_two_title h-16 overflow-y-scroll text-[#212629] text-xl font-bold">
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
          <p class="food_item_two_info overflow-y-scroll h-20 font-light text-[#212629ae] text-[17px]">
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

    <!-- Adaptive -->
    <div class="food_item md:hidden min-h-[160px] w-full flex py-5 border-b border-b-white"
      v-for="food in menuItem.foodList" :key="food.id">
      <div class="rounded-t-[40px] max-h-52 max-w-52 p-2 rounded-br-[40px] rounded-bl-[5px] relative"
        :style="`background-color: ${food.bgColor}`">
        <img :src="`img/food.png`" alt="Изображение еды" class="max-h-52 max-w-52">
        <div class="absolute top-0 left-0 mt-3 ml-3">
          <img src="@/assets/icons/like.svg" alt="" class="w-[20px] h-[20px] cursor-pointer ml-2"
            v-if="food.favorite"
            @click="removeToFavorites(food)">
          <img src="@/assets/icons/like-outline.svg" alt="" class="w-[20px] h-[20px] cursor-pointer ml-2"
            @click="addToFavorites(food)"
            v-else>
        </div>
        <div class="absolute bottom-0 right-0 mb-[-14px] mr-[-14px]" v-if="food.additionally">
          <img src="@/assets/icons/additionally.svg" alt="" class="w-12 h-12">
        </div>
      </div>
      <div class="food_item_info ml-5 relative overflow-x-scroll">
        <h3 class="food_item_info text-lg text-[#212629] font-bold w-52 max-h-20 overflow-y-scroll">
          {{ food.title }}
        </h3>
        <div class="flex flex-wrap items-center mt-2 w-48">
          <span class="font-light text-[#212629ae] text-xs"> 
            {{food.grams}}
          </span>
          <div class="w-[3.25px] h-[3.25px] bg-[#21262933] mx-[9px] rounded-full"></div>
          <span class="font-light text-[#212629ae] text-xs"> 
            {{food.calories}}
          </span>
          <div class="w-[3.25px] h-[3.25px] bg-[#21262933] mx-[9px] rounded-full"></div>
          <span class="font-bold text-[#212629ae] text-xs"> 
            {{food.price}}₽
          </span>
        </div>
        <button class="food_item_btn_adaptive absolute bottom-0"
          @click="addToCart(food)"
          v-if="food.inCart === false">
          <span class="text-[#FE9102] text-sm font-bold">430₽</span>
        </button>
        <button v-if="food.inCart === true">
          <div class="rounded-full absolute bottom-0 flex items-center border border-white p-2">
            <button @click="reduceCounter(food)">
              <img src="@/assets/icons/minus.svg" alt="" class="w-4 h-4 btns_black">
              <img src="@/assets/icons/minus-white.svg" alt="" class="w-4 h-4 hidden">
            </button>
            <span class="text-sm font-bold text-[#212629] text-center mx-3 w-4">
              {{ food.counter }}
            </span>
            <button @click="increaseCounter(food)">
              <img src="@/assets/icons/plus.svg" alt="" class="w-4 h-4 btns_black">
              <img src="@/assets/icons/plus-white.svg" alt="" class="w-4 h-4 hidden">
            </button>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'food-item',
  emits: ["favorite", "notFavorite", "inCart", "increase", "reduce", "addAdditionally", "addSelectedFoodCart"],
  props: {
    menuItem: {
      type: Object
    }
  },
  methods: {
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
    addAdditionally(additionally) {
      this.$emit('addAdditionally', additionally)
    },
    addSelectedFoodCart(selectedFoodItem) {
      this.$emit('addSelectedFoodCart', selectedFoodItem)
    }
  }
}
</script>

<style lang="scss" scoped>
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
.food_item_btn_adaptive {
  background: #E9E9E9;
  padding: 7px 25px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
  border-radius: 99px;
  transition: background 0.3s;
}
.food_item_btn_adaptive:hover {
  background: #212629;
}

@media (min-width: 1200px) {
  .dishes {
    gap: 29px;
  }
  .food_item {
    width: 360px;
  }
}
.food_item_info::-webkit-scrollbar, .food_item_two_title::-webkit-scrollbar, .food_item_two_info::-webkit-scrollbar{
  display: none;
}
.food_item_info, .food_item_two_title, .food_item_two_info {
  -ms-overflow-style: none; 
  scrollbar-width: none; 
}
</style>