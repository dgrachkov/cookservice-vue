<template>
  <transition name="modal_food">
    <div class="modal_food_item py-2 px-2 md:py-5 md:px-0"
      v-if="modalVisible">
      <div class="food_item w-full md:w-[770px] m-auto">
        <div class="px-4 py-4 w-full rounded-t-[40px]"
         :style="`background-color: ${selectedFoodItem.bgColor}`">
          <div class="flex items-center justify-between">
            <img src="@/assets/icons/like.svg" alt="" class="w-[20px] h-[20px] cursor-pointer ml-2"
              v-if="selectedFoodItem.favorite"
              @click="$emit('notFavorite', selectedFoodItem)">
            <img src="@/assets/icons/like-outline.svg" alt="" class="w-[20px] h-[20px] cursor-pointer ml-2"
              @click="$emit('favorite', selectedFoodItem)"
              v-else>
            <img src="@/assets/icons/close-white.svg" alt="" class="w-[18px] h-[18px] cursor-pointer mr-2"
              @click="$emit('hideModal')">
          </div>
          <div class="flex justify-center">
            <img :src="`img/${selectedFoodItem.img}.png`" alt="Изображение еды">
          </div>
        </div>
        <div class="absolute" v-if="selectedFoodItem.additionally === true">
          <img src="@/assets/icons/additionally.svg" alt="" class="w-14 h-14 ml-5 md:ml-10 mt-[-20px]">
        </div>
        <div class="food_item_two p-5 md:p-14 rounded-bl-[5px] bg-[#212629] rounded-br-[40px]">
          <div class="w-full text-left">
            <h3 class="text-white text-2xl leading-tight md:text-[40px] font-bold">
              {{selectedFoodItem.title}} 
            </h3>
          </div>
          <div class="mt-[15px] flex items-center">
            <span class="font-light text-[#ffffff99] text-sm"> 
              {{selectedFoodItem.grams}} 
            </span>
            <div class="w-[3.25px] h-[3.25px] bg-[#ffffff99] mx-[9px] rounded-full"></div>
            <span class="font-light text-[#ffffff99] text-sm"> 
              {{selectedFoodItem.calories}} 
            </span>
            <div class="w-[3.25px] h-[3.25px] bg-[#ffffff99] mx-[9px] rounded-full"></div>
            <span class="font-bold text-[#ffffff99] text-sm">
              {{selectedFoodItem.price}}₽
            </span>
          </div>
          <div class="mt-5">
            <p class="font-light text-[#ffffff99] text-base sm:text-[17px]"> 
              {{ selectedFoodItem.description }}
            </p>
          </div>
          <div class="mt-7" v-if="selectedFoodItem.additionally === true">
            <h4 class="text-white font-bold text-xl">Дополнительно:</h4>
            <ul>
              <li class="additionally_item flex justify-between p-5 mt-5"
                v-for="additionally in selectedFoodItem.additionallyList">
                <div class="text-white text-base sm:text-lg font-light">
                  {{ additionally.name }}
                </div>
                <div class="flex items-center">
                  <label class="text-white text-sm sm:text-lg font-light mr-3">
                    + {{ additionally.surcharge }}₽
                  </label>
                  <div class="w-[26px] h-[26px] border border-[#ffffff26] rounded-full cursor-pointer"
                    v-if="additionally.selected === false" @click="$emit('addAdditionally', additionally)"></div>
                  <img src="@/assets/icons/marked.svg" class="w-[26px] h-[26px] cursor-pointer"
                    v-if="additionally.selected === true" @click="$emit('addAdditionally', additionally)">
                </div>
              </li>
            </ul>
          </div>
          <div class="flex justify-between mt-8">
            <div class="rounded-full flex items-center justify-between border border-white py-[10px] px-3 sm:px-5">
              <button @click="$emit('reduce', selectedFoodItem)">
                <img src="@/assets/icons/minus-white.svg" alt="" class="w-3 h-3 sm:w-4 sm:h-4">
              </button>
              <span class="text-sm sm:text-lg font-bold text-white mx-3 sm:mx-5"> 
                {{selectedFoodItem.counter}} 
              </span>
              <button @click="$emit('increase', selectedFoodItem)">
                <img src="@/assets/icons/plus-white.svg" alt="" class="w-3 h-3 sm:w-4 sm:h-4">
              </button>
            </div>
            <button class="food_item_btn flex items-center justify-center px-10 md:px-0 md:w-[500px]"
              @click="$emit('addSelectedFoodCart', selectedFoodItem)">
              <span class="text-[#FE9102] font-bold text-base md:text-lg">
                Добавить
              </span>
              <span class="hidden md:block text-[#FE9102] font-bold text-lg ml-2">
                {{ selectedFoodItem.price }}₽
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal-food-item',
  props: {
    modalVisible: {
      type: Boolean,
      default: false
    },
    selectedFoodItem: {
      type: Object
    }
  },
  methods: {
    hideFoodItem() {
      this.$emit('update:modalVisible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal_food_item {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.254);
  backdrop-filter: blur(20px);
  mix-blend-mode: normal;
  .additionally_item {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 30px 30px 30px 3px;
  }
  .food_item_btn {
    background: #212629;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5), -1px -1px 6px rgba(255, 255, 255, 0.05), -5px -5px 20px rgba(255, 255, 255, 0.1), 5px 5px 20px rgba(0, 0, 0, 0.8);
    border-radius: 99px;
  }
}

.modal_food-enter-active {
  animation: appearance .5s;
}

.modal_food-leave-active {
  animation: appearance .5s reverse;
}

@keyframes appearance {
  0% {
    width: 0%;
    opacity: 0;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
}
</style>