<template>
  <nav class="w-[1170px] mx-auto px-4 py-4 flex justify-between items-center">
    <div class="cursor-pointer">
      <img src="@/assets/app-logo.svg" alt="" class="w-36" @click="$router.push('/')">
    </div>
    <div class="flex items-center relative">
      <button class="flex items-center bg-[#25D366] py-[10px] px-[30px] rounded-full mr-5">
        <img src="@/assets/whatsapp-white.svg" alt="" class="w-5 h-5">
        <span class="text-white ml-2 text-lg font-bold">WhatsApp</span>
      </button>
      <button class="nav_btn flex items-center bg-[#E9E9E9] py-[10px] px-[30px] rounded-full mr-8">
        <span class="text-[#212629] ml-2 text-lg font-bold">Заказать 1 блюдо за 430₽</span>
      </button>
      <button class="nav_btn flex items-center bg-[#E9E9E9] py-[10px] px-[12px] rounded-full"
        @click="userDropdown = !userDropdown">
        <img src="@/assets/icons/user.svg" alt="" class="w-5 h-5">
      </button>
      <!-- User dropdown -->
      <transition name="userdropdown">
        <div class="user_dropdown z-50 px-[20px] pb-[20px] list-none absolute right-0 top-0 mt-14 bg-white" v-if="userDropdown">
          <div class="flex justify-end py-[23px]">
            <img src="@/assets/icons/close.svg" alt="" class="w-6 h-6 cursor-pointer"
                @click="userDropdown = false">
          </div>
          <ul class="font-light text-[#212629]" aria-labelledby="user-menu-button">
            <router-link to="/корзина" @click="userDropdown = false">
              <li class="w-[360px] cursor-pointer py-5 border-y-[0.5px] border-white flex items-center">
                <img src="@/assets/icons/cart.svg" alt="" class="w-[22px] h-[22px] mr-[1px]">
                <span class="ml-4">Корзина</span>
              </li>
            </router-link>
            <router-link to="/мои заказы" @click="userDropdown = false">
              <li class="w-[360px] cursor-pointer py-5 border-y-[0.5px] border-white flex items-center">
                <img src="@/assets/icons/myorders.svg" alt="" class="w-5 h-5">
                <span class="ml-4">Мои заказы</span>
              </li>
            </router-link>
            <router-link to="/депозит" @click="userDropdown = false">
              <li class="w-[360px] py-5 cursor-pointer border-y-[0.5px] border-white flex justify-between items-center">
                <div class="flex items-center">
                  <img src="@/assets/icons/deposit.svg" alt="" class="w-5 h-5">
                  <span class="ml-4">Депозит</span>
                </div>
                <div>
                  <span class="text-[#FE9102]">{{ deposit }}₽</span>
                </div>
              </li>
            </router-link>
            <router-link to="/привязанные карты" @click="userDropdown = false">
              <li class="w-[360px] py-5 cursor-pointer border-y-[0.5px] border-white flex items-center">
                <img src="img/linkedcards.svg" alt="" class="w-5 h-5">
                <span class="ml-4">Привязанные карты</span>
              </li>
            </router-link>
            <router-link to="/мои адреса" @click="userDropdown = false">
              <li class="w-[360px] py-5 cursor-pointer border-y-[0.5px] border-white flex items-center">
                <img src="@/assets/icons/myaddresses.svg" alt="" class="w-5 h-5">
                <span class="ml-4">Мои адреса</span>
              </li>
            </router-link>
            <router-link to="/мои данные" @click="userDropdown = false">
              <li class="w-[360px] py-5 cursor-pointer border-y-[0.5px] border-white flex items-center">
                <img src="@/assets/icons/mydata.svg" alt="" class="w-5 h-5">
                <span class="ml-4">Мои данные</span>
              </li>
            </router-link>
            <li class="w-[360px] py-5 cursor-pointer border-y-[0.5px] border-white flex items-center">
              <img src="@/assets/icons/exit.svg" alt="" class="w-5 h-5">
              <span class="ml-4">Выйти</span>
            </li>
          </ul>
          <button class="w-full bg-[#25D366] text-center py-[10px] rounded-full mt-[40px]">
            <span class="text-white text-lg font-bold">Обратиться в WhatsApp</span>
          </button>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app-navbar',
  props: {
    deposit: {
      type: Number
    }
  },
  data() {
    return {
      userDropdown: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.nav_btn {
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
}
.user_dropdown {
  background: #E9E9E9;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05), 60px 60px 80px rgba(0, 0, 0, 0.35);
  border-radius: 40px 40px 40px 5px;
}

.userdropdown-enter-active {
  animation: appearance .3s;
}

.userdropdown-leave-active {
  animation: appearance .3s reverse;
}

@keyframes appearance {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>