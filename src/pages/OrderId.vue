<template>
  <div class="w-[1170px] mx-auto px-4 mt-14">

    <div class="flex items-center">
      <img src="@/assets/icons/left-arrow.svg" alt="" class="w-5 h-5 cursor-pointer"
        @click="$router.push('/мои заказы')">
      <h1 class="text-[#212629] text-[40px] font-bold ml-5">
        №{{ $route.params.id }}
      </h1>
    </div>

    <!-- Статус заказа -->
    <div class="mt-16 relative">
      <div class="h-1 m-auto bg-white w-[1100px]"></div>
      <div class="flex justify-between items-center z-99 w-full bottom-[0px] top-3 absolute">
        <div v-for="status in orderStatus" :key="status.id">
          <div class="m-auto bg-white rounded-full w-10 h-10 flex justify-center items-center"
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

    <!-- Информация о заказе -->
    <div class="mt-20 w-full" v-for="order in userData.myOrders" :key="order.id">
      <div class="item pt-1 py-[30px] px-10">
        <div>
          <div v-for="dish in order.listDishes" :key="dish.id"
           class="flex mt-[30px] items-center justify-between">
            <div class="flex items-center">
              <div class="flex w-[60px] h-[60px] justify-center items-center rounded-lg"
                   :style="`background-color: ${dish.bgColor}`">
                <img :src="`/img/${dish.img}.png`" alt="">
              </div>
              <h2 class="text-[#212629] font-bold text-2xl ml-5">
                {{ dish.title }}
              </h2>
            </div>
            <div class="flex items-center">
              <div class="flex items-center mr-[30px]">
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
          <div class="border-b border-t w-full border-[#21262914] mt-10 flex justify-between items-center py-5">
            <div class="text-[#212629] font-bold text-lg">Доставка</div>
            <div class="text-[#212629] font-bold text-lg">
              {{ order.deliveryAmount }}₽
            </div>
          </div>
          <div class="w-full flex justify-between items-center pt-5">
            <div class="text-[#212629] font-bold text-lg">Итого</div>
            <div class="text-[#212629] font-bold text-lg">
              {{ order.totalAmount }}₽
            </div>
          </div>
        </div>
      </div>

      <div class="item p-5 mt-[10px]">
        <div class="text-sm font-light text-[#21262980]">Когда</div>
        <div class="text-lg text-[##212629] font-light">
          {{ order.selectedTime.name }}
        </div>
      </div>

      <div class="item p-5 mt-[10px]">
        <div class="text-sm font-light text-[#21262980]">Оплата</div>
        <div class="flex items-center">
          <span class="text-lg text-[##212629] font-light">
            {{ order.selectedPayment.name}}
          </span>
          <span class="text-[#FE9102] ml-3 mt-1" v-if="order.selectedPayment.deposit === true">
            {{ userData.deposit }}₽
          </span>
        </div>
      </div>

      <div class="flex justify-between mt-[30px]">
        <button class="w-[360px] rounded-full bg-[#25D366] text-[#FFFFFF] font-bold text-lg py-[10px] cursor-pointer">
          Управлять в WhatsApp
        </button>
        <router-link to="/мои заказы">
          <button class="w-[360px] rounded-full bg-[#E9E9E9] text-[#212629]
            font-bold text-lg py-[10px] cursor-pointer shadow-md" @click="$emit('removeOrder', order)">
            Отменить заказ
          </button>
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
.item {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 20px 20px 20px 5px;
}

</style>