<template>
  <div class="w-[1170px] mx-auto px-4 mt-14">

    <my-header-block v-if="cart.listDishes.length >= 1">
      {{ cart.listDishes.length }} блюд на {{ cart.totalAmount }}₽
    </my-header-block>

    <my-header-block v-else>
      Здесь пусто...
    </my-header-block>

    <div class="mt-12">

      <!-- Элемент корзины -->
      <div class="order_item mt-3 px-10 py-[30px] flex justify-between overflow-hidden"
           v-for="order in cart.listDishes" 
           :key="order.id">
        <div class="flex items-center">
          <div class="w-[60px] h-[60px] flex items-center justify-center rounded-lg" 
               :style="`background-color: ${order.bgColor}`">
            <img :src="`img/${order.img}.png`" alt="Изображение еды">
          </div>
          <div class="ml-5">
            <h2 class="text-[#212629] text-3xl font-bold">{{ order.title }}</h2>
            <div class="flex mt-1">
              <div v-for="additionally in order.additionallyList" 
                v-if="order.additionally === true">
                <span v-if="additionally.selected === true"
                  class="font-light text-sm text-[#21262980]"> 
                  {{ additionally.name }},
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <div class="rounded-full justify-between flex items-center border border-white py-[5px] px-5 mr-10">
            <button @click="$emit('reduce', order)">
              <img src="@/assets/icons/minus.svg" alt="" class="w-4 h-4 btns_black">
            </button>
            <span class="food_item_two_title text-lg font-bold text-[#212629] text-center mx-2 w-10">
              {{ order.counter }}
            </span>
            <button @click="$emit('increase', order)">
              <img src="@/assets/icons/plus.svg" alt="" class="w-4 h-4 btns_black">
            </button>
          </div>
          <div class="w-12">
            <div class="text-[#212629] text-lg font-bold">{{ order.amount }}₽</div>
          </div>
        </div>
      </div>

       <!-- Доставка -->
      <div class="order_item mt-3 px-10 py-[30px] flex justify-between overflow-hidden"
           v-if="cart.listDishes.length >= 1">
        <div class="flex items-center">
          <div>
            <h2 class="text-[#212629] text-3xl font-bold">Доставка</h2>
          </div>
        </div>
        <div class="w-12">
          <div class="text-[#212629] text-lg font-bold">
            {{ cart.deliveryAmount }}₽
          </div>
        </div>
      </div>

      <button class="cart_btn" v-if="cart.listDishes.length >= 1"
        @click="$router.push('/оформление заказа')">
        <span class="text-[#212629] text-lg font-bold">
          Оформить доставку за {{ cart.totalAmount }}₽
        </span>
      </button>

      <!-- Рекомендации -->
      <div class="mt-28" v-if="cart.listDishes.length >= 1">
        <h2 class="text-[#212629] text-[28px] font-bold">Рекомендуем:</h2>
        <div class="recommendations flex gap-[10px] w-full overflow-x-scroll mt-2 py-2">
          <div v-for="recommendation in menuList.snacks.foodList" :key="recommendation.id" class="recommendation_item">
            <div class="w-[60px] h-[60px] flex items-center justify-center rounded-lg"
                 :style="`background-color: ${recommendation.bgColor}`">
              <img :src="`img/${recommendation.img}.png`" alt="Изображение еды">
            </div>
            <div class="ml-[10px]">
              <h2 class="text-[#212629] text-sm font-bold w-32">
                {{ recommendation.title }}
              </h2>
              <p class="font-light text-sm text-[#212629c1]">
                {{ recommendation.price }}₽
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  props: {
    cart: {
      type: Object
    },
    menuList: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.order_item {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 20px 20px 20px 5px;
  transition: box-shadow .3s;
}
.order_item:hover {
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.20);
}
.cart_btn {
  margin-top: 30px;
  background: #E9E9E9;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
  border-radius: 30px;
  padding: 10px 0px;
  width: 360px;
}

.recommendations::-webkit-scrollbar {
  display: none;
}
.recommendations {
  -ms-overflow-style: none; 
  scrollbar-width: none; 
}
.recommendation_item {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 20px;
  min-width: 280px;
  height: 100px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 20px 20px 20px 5px;
  transition: box-shadow .3s;
}
.recommendation_item:hover {
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.20);
}
</style>