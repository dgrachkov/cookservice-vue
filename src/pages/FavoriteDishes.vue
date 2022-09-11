<template>
  <div class="max-w-[1170px] w-full mx-auto px-4 py-5 md:py-0 md:mt-14">

    <my-header-block id="favorite">Любимое</my-header-block>

    <div class="dishes w-full flex gap-0 md:gap-5 flex-wrap">
      <div class="food_item hidden md:block md:w-[48.6%] lg:w-[49%] mt-7 relative"
        v-for="favoriteDish in userData.favoriteDishes" :key="favoriteDish.id">
        <div class="px-[16px] py-[23px] rounded-t-[40px]"
          :style="`background-color: ${favoriteDish.bgColor}`">
          <div>
            <img src="@/assets/icons/like.svg" alt="" class="w-[20px] h-[20px] cursor-pointer ml-2"
             v-if="favoriteDish.favorite" @click="$emit('notFavorite', favoriteDish)">
            <img src="@/assets/icons/like-outline.svg" alt=""
             class="w-[20px] h-[20px] cursor-pointer ml-2" v-else>
          </div>
          <div class="flex justify-center">
            <img :src="`img/${favoriteDish.img}.png`" alt="Изображение еды">
          </div>
        </div>
        <div class="absolute" v-if="favoriteDish.additionally">
          <img src="@/assets/icons/additionally.svg" alt="" class="w-16 h-16 ml-5 mt-[-30px]">
        </div>
        <div class="food_item_two border border-[#ffffff80] p-5 rounded-bl-[5px] rounded-br-[40px]">
          <div class="w-[315px] text-left">
            <h3 class="food_item_two_title h-16 overflow-y-scroll text-[#212629] text-xl font-bold">
              {{ favoriteDish.title }}
            </h3>
          </div>
          <div class="mt-[15px] flex items-center">
            <span class="food_item_two_info font-light text-[#212629ae] text-sm"> 
              {{ favoriteDish.grams }} 
            </span>
            <div class="w-[3.25px] h-[3.25px] bg-[#21262933] mx-[9px] rounded-full"></div>
            <span class="food_item_two_info font-light text-[#212629ae] text-sm"> 
              {{ favoriteDish.calories }} 
            </span>
            <div class="w-[3.25px] h-[3.25px] bg-[#21262933] mx-[9px] rounded-full"></div>
            <span class="food_item_two_info font-bold text-[#212629ae] text-sm"> 
              {{ favoriteDish.price }}₽
            </span>
          </div>
          <div class="mt-5">
            <p class="food_item_two_info overflow-y-scroll h-20 font-light text-[#212629ae] text-[17px]">
              {{ favoriteDish.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Adaptive -->
      <div class="food_item md:hidden min-h-[160px] w-full flex py-4 border-b border-b-white"
        v-for="favoriteDish in userData.favoriteDishes" :key="favoriteDish.id">
        <div class="rounded-t-[40px] max-h-52 max-w-52 p-2 rounded-br-[40px] rounded-bl-[5px] relative"
          :style="`background-color: ${favoriteDish.bgColor}`">
          <img :src="`img/food.png`" alt="Изображение еды" class="max-h-52 max-w-52">
          <div class="absolute top-0 left-0 mt-3 ml-3">
            <img src="@/assets/icons/like.svg" alt="" class="w-[20px] h-[20px] cursor-pointer ml-2"
             v-if="favoriteDish.favorite" @click="$emit('notFavorite', favoriteDish)">
            <img src="@/assets/icons/like-outline.svg" alt=""
             class="w-[20px] h-[20px] cursor-pointer ml-2" v-else>
          </div>
          <div class="absolute bottom-0 right-0 mb-[-14px] mr-[-14px]" v-if="favoriteDish.additionally">
            <img src="@/assets/icons/additionally.svg" alt="" class="w-12 h-12">
          </div>
        </div>
        <div class="food_item_info ml-5 relative overflow-x-scroll">
          <h3 class="food_item_info text-lg text-[#212629] font-bold w-52 max-h-20 overflow-y-scroll">
            {{ favoriteDish.title }}
          </h3>
          <div class="flex flex-wrap items-center mt-2 w-48">
            <span class="font-light text-[#212629ae] text-xs"> 
              {{favoriteDish.grams}}
            </span>
            <div class="w-[3.25px] h-[3.25px] bg-[#21262933] mx-[9px] rounded-full"></div>
            <span class="font-light text-[#212629ae] text-xs"> 
              {{favoriteDish.calories}}
            </span>
            <div class="w-[3.25px] h-[3.25px] bg-[#21262933] mx-[9px] rounded-full"></div>
            <span class="font-bold text-[#212629ae] text-xs"> 
              {{favoriteDish.price}}₽
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>

  
</template>

<script>
export default {
  name: 'favortite-dishes',
  props: {
    userData: {
      type: Object
    }
  },
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
  }
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