<template>
  <div class="w-[1170px] mx-auto px-4 mt-14">

    <my-header-block id="favorite">Любимое</my-header-block>
    
    <div class="w-full flex flex-wrap gap-5">
      <div class="food_item w-[32%] mt-7 relative"
        v-for="favoriteDish in userData.favoriteDishes" :key="favoriteDish.id">
        <div class="px-[16px] py-[23px] w-full rounded-t-[40px]" 
          :style="`background-color: ${favoriteDish.bgColor}`">
          <div>
            <img src="@/assets/icons/like.svg" alt="" class="w-[20px] h-[20px] cursor-pointer ml-2"
             v-if="favoriteDish.favorite" @click="$emit('notFavorite', favoriteDish)">
            <img src="@/assets/icons/like-outline.svg" alt=""
             class="w-[20px] h-[20px] cursor-pointer ml-2" v-else>
          </div>
          <div>
            <img :src="`img/${favoriteDish.img}.png`" alt="Изображение еды">
          </div>
        </div>
        <div class="absolute" v-if="favoriteDish.additionally">
          <img src="@/assets/icons/additionally.svg" alt="" class="w-16 h-16 ml-5 mt-[-30px]">
        </div>
        <div class="food_item_two border border-[#ffffff80] p-5 rounded-bl-[5px] rounded-br-[40px]">
          <div class="w-[315px] text-left">
            <h3 class="food_item_two_title text-[#212629] text-xl font-bold">
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
          <div class="my-5">
            <p class="food_item_two_info font-light text-[#212629ae] text-[17px]">
              {{ favoriteDish.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="py-4" v-if="userData.favoriteDishes.length === 0">
        <h2 class="font-light text-[#212629ae]">Вы моежете добавить сюда ваше любимое блюдо!</h2>
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
  transition: background .3s;
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