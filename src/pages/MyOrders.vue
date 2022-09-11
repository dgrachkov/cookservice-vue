<template>
  <div class="w-full max-w-[1170px] mx-auto px-4 py-5 md:mt-14">

    <my-header-block>Мои заказы</my-header-block>

    <div class="mt-6 md:mt-14">

      <div class="flex flex-wrap gap-4">
        <div class="btn">Все</div>
        <div class="btn">Доставлены</div>
        <div class="btn">Отменены</div>
      </div>

      <div class="w-full mt-10">
        <div class="order py-4 sm:py-5 px-6 sm:px-10 mt-2 md:mt-3" 
          v-for="order in userData.myOrders"
          :key="order.id" 
          @click="order.status === 'Отменен' ? disabled : $router.push(`/мои заказы/№${order.id}`)">
          <div>
            <div class="block sm:hidden text-[#212629] text-xs font-light">
              {{ order.status }}
            </div>
            <div class="mt-[2px] sm:mt-0 text-[#212629] text-base md:text-xl font-bold">
              {{ order.month }}.{{ order.year }}
            </div>
            <div class="text-[#21262980] text-base md:text-[17px] font-light mt-1">
              №{{ order.id }} на {{ order.totalAmount }}₽
            </div>
          </div>
          <div class="flex items-center">
            <span class="mr-[10px] hidden sm:block text-[#212629] font-light text-sm">
              {{ order.status }}
            </span>
            <div class="w-9 sm:w-10 h-9 sm:h-10 rounded-full flex items-center justify-center bg-[#FED149]"
              v-if="order.status === 'Текущий'">
                <img src="@/assets/current.svg" alt="" class="w-5 h-5">
            </div>
            <div class="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-[#EE7722] flex items-center justify-center"
              v-if="order.status === 'Отменен'">
              <img src="@/assets/cancelled.svg" alt="" class="w-5 h-5">
            </div>
            <div class="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-[#96C86E] flex items-center justify-center"
              v-if="order.status === 'Доставлен'">
              <img src="@/assets/delivered.svg" alt="" class="w-5 h-5">
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'my-orders',
  props: {
    cart: {
      type: Object
    },
    userData: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  scroll-behavior: smooth;
  transition: background 0.2s;
  background: #E9E9E9;
  padding: 9px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 5px 15px 0 rgba(0,0,0,0.1); 
  border-radius: 99px;
  color: #212629;
}
.btn:hover {
  color: white;
  background-color: #212629;
}

.order {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 40px 40px 40px 5px;
  transition: box-shadow .3s;
}
.order:hover {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.35);
}
</style>