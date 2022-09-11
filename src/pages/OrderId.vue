<template>
  <div class="w-full max-w-[1170px] mx-auto px-4 py-5 md:py-0 md:mt-14">

    <div class="flex items-center">
      <img src="@/assets/icons/left-arrow.svg" alt="" class="w-5 h-5 cursor-pointer"
        @click="$router.push('/мои заказы')">
      <h1 class="text-[#212629] text-[28px] sm:text-[40px] font-bold ml-3 md:ml-5">
        №{{ $route.params.id }}
      </h1>
    </div>

    <!-- Статус заказа -->
    <div class="mt-12 md:mt-16 relative">
      <div class="h-1 mr-2 ml-1 m-auto bg-white w-full max-w-[1100px] z-0"></div>
      <div class="flex w-full justify-between bottom-[0px] items-center top-3 absolute z-10">
        <div v-for="status in orderStatus" :key="status.id">
          <div class="w-10 m-auto bg-white rounded-full h-10 flex justify-center items-center"
            :style="status.condition === true ? `background-color: #212629` : `background-color: white`">
            <img :src="`/img/${status.srcBlack}.svg`" alt="" v-if="status.condition === false">
            <img :src="`/img/${status.srcWhite}.svg`" alt="" v-if="status.condition === true">
          </div>
          <span class="text-[#212629] text-sm font-light"
            :style="status.condition === true ? `font-weight: bold` : `font-weight: light`">
            {{ status.name }}
          </span>
        </div>
      </div>
    </div>

    <button class="mt-20 block md:hidden w-full rounded-full bg-[#25D366] text-[#FFFFFF]
      font-bold text-lg py-[10px] cursor-pointer">
      Управлять в WhatsApp
    </button>

    <!-- Информация о заказе -->
    <div class="mt-20 w-full" v-for="order in userData.myOrders" :key="order.id">
      <div class="order">
        <div>
          <div v-for="dish in order.listDishes" :key="dish.id"
           class="flex p-4 md:py-6 md:px-10 items-center justify-between">
            <div class="flex items-center">
              <div class="flex max-w-[60px] max-h-[60px] min-w-[60px] min-h-[60px] justify-center items-center rounded-lg"
                   :style="`background-color: ${dish.bgColor}`">
                <img :src="`/img/${dish.img}.png`" alt="">
              </div>
              <div class="ml-3 md:ml-5 overflow-y-scroll max-w-[200px] sm:max-w-[520px]">
                <h2 class="dish_info overflow-y-scroll max-h-12 text-[#212629]
                  md:max-h-14 lg:max-h-16 font-bold text-base md:text-xl lg:text-2xl">
                  {{ dish.title }}
                </h2> 
                <div class="block dish_info overflow-y-scroll max-h-12 lg:hidden">
                  <span class="font-light text-sm text-[#21262980] mr-[9px]">
                    {{ dish.counter }} шт.
                  </span>
                  <div class="block">
                    <div v-for="additionally in dish.additionallyList">
                      <span v-if="additionally.selected === true"
                        class="font-light text-sm text-[#21262980]">
                        {{ additionally.name }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <div class="hidden lg:flex items-center mr-[30px]">
                <span class="font-light text-sm text-[#21262980] mr-[9px]">
                  {{ dish.counter }} шт.
                </span>
                <div class="flex items-center">
                  <div v-for="additionally in dish.additionallyList"
                    class="ml-2">
                    <span v-if="additionally.selected === true"
                      class="font-light text-sm text-[#21262980]">
                      {{ additionally.name }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="text-[#212629] font-bold text-lg">
                {{ dish.amount }}₽
              </div>
            </div>
          </div>
          <div class="border-b border-t w-full border-[#21262914] px-5 py-5 md:py-6 md:px-10 flex justify-between items-center">
            <div class="text-[#212629] font-bold text-lg">Доставка</div>
            <div class="text-[#212629] font-bold text-lg">
              {{ order.deliveryAmount }}₽
            </div>
          </div>
          <div class="w-full flex justify-between items-center px-5 py-5 md:py-6 md:px-10">
            <div class="text-[#212629] font-bold text-lg">Итого</div>
            <div class="text-[#212629] font-bold text-lg">
              {{ order.totalAmount }}₽
            </div>
          </div>
        </div>
      </div>

      <div class="order w-full p-5 mt-[10px]">
        <div class="text-sm sm:text-base font-light text-[#21262980]">Когда</div>
        <div class="text-base sm:text-lg text-[##212629] font-light">
          {{ order.selectedTime.name }}
        </div>
      </div>

      <div class="order w-full p-5 mt-[10px]">
        <div class="text-sm sm:text-base font-light text-[#21262980]">Оплата</div>
        <div class="flex mt-1 items-center">
          <span class="text-base sm:text-lg text-[##212629] font-light">
            {{ order.selectedPayment.name}}
          </span>
          <span class="text-[#FE9102] sm:text-lg text-base ml-3 mt-1" 
            v-if="order.selectedPayment.deposit === true">
            {{ userData.deposit }}₽
          </span>
        </div>
      </div>

      <div class="w-full flex justify-between mt-[30px]">
        <button class="hidden md:block w-[360px] rounded-full bg-[#25D366] text-[#FFFFFF] font-bold text-lg py-[10px] cursor-pointer">
          Управлять в WhatsApp
        </button>
        <router-link to="/мои заказы"
          class="w-full text-center md:w-[360px] rounded-full bg-[#E9E9E9] text-[#212629]
          font-bold text-lg py-[10px] cursor-pointer shadow-md">
          <div @click="$emit('removeOrder', order)">
            Отменить заказ
          </div>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'order-id',
  props: {
    userData: {
      type: Object
    }
  },
  data() {
    return {
      orderStatus: [
        { id: 0, num: 1, name: 'Оформлен', srcBlack: 'decorated-black', srcWhite: 'decorated-white', condition: true},
        { id: 1, num: 2, name: 'Готовиться', srcBlack: 'cooking-black', srcWhite: 'cooking-white', condition: false},
        { id: 2, num: 3, name: 'В доставке', srcBlack: 'indelivery-black', srcWhite: 'indelivery-white', condition: false},
        { id: 3, num: 4, name: 'Готово', srcBlack: 'done-black', srcWhite: 'done-white', condition: false},
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.order {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 20px 20px 20px 5px;
}

.dish_info::-webkit-scrollbar{
  display: none;
}
.dish_info{
  -ms-overflow-style: none; 
  scrollbar-width: none; 
}
</style>