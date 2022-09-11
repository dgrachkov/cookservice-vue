<template>
  <nav class="max-w-[1170px] w-full mx-auto px-4 py-5 md:py-4 flex justify-between items-center">
    <div class="burger_menu md:hidden cursor-pointer rounded-full py-[11px] px-[10px]"
      @click="menu = true">
      <img src="@/assets/icons/burger-menu.svg" alt="" class="w-5 h-4">
    </div>
    <div class="cursor-pointer">
      <img src="@/assets/app-logo.svg" alt="" class="w-32 md:w-36" @click="$router.push('/')">
    </div>
    <!-- Adaptive user-icon -->
    <button class="user_profile md:hidden py-[11px] px-[11px] rounded-full"
      @click="userDropdownAdaptive = true">
      <img src="@/assets/icons/user.svg" alt="" class="w-5 h-5">
    </button>
    <!-- User dropdown adaptive -->
    <div class="absolute z-[100] right-0 top-0 bottom-0 left-0 md:hidden bg-[#E9E9E9]"
      v-if="userDropdownAdaptive">
      <div class="px-5">
        <div class="flex justify-end py-6 border-b border-b-white">
          <img src="@/assets/icons/close.svg" alt="" class="cursor-pointer w-6 h-6"
            @click="userDropdownAdaptive = false">
        </div>
        <router-link to="/корзина" @click="userDropdownAdaptive = false"
          class="py-5 flex items-center border-b border-b-white cursor-pointer">
            <img src="@/assets/icons/cart.svg" alt="" class="w-[22px] h-[22px]">
            <span class="ml-5 text-base text-[#212629]">Корзина</span>
        </router-link>
        <router-link to="/мои заказы" @click="userDropdownAdaptive = false"
          class="py-5 flex items-center border-b border-b-white cursor-pointer">
            <img src="@/assets/icons/myorders.svg" alt="" class="w-5 h-5">
            <span class="ml-5 text-base text-[#212629]">Мои заказы</span>
        </router-link>
        <router-link to="/депозит" @click="userDropdownAdaptive = false"
          class="py-5 flex items-center justify-between border-b border-b-white cursor-pointer">
          <div class="flex items-center">
            <img src="@/assets/icons/deposit.svg" alt="" class="w-5 h-5">
            <span class="ml-5 text-base text-[#212629]">Депозит</span>
          </div>
          <span class="text-[#FE9102] text-base">{{ deposit }}₽</span>
        </router-link>
        <router-link to="/привязанные карты" @click="userDropdownAdaptive = false"
          class="py-5 flex items-center border-b border-b-white cursor-pointer">
            <img src="img/linkedcards.svg" alt="" class="w-5 h-5">
            <span class="ml-5 text-base text-[#212629]">Привязанные карты</span>
        </router-link>
        <router-link to="/мои адреса" @click="userDropdownAdaptive = false"
          class="py-5 flex items-center border-b border-b-white cursor-pointer">
            <img src="@/assets/icons/myaddresses.svg" alt="" class="w-5 h-5">
            <span class="ml-5 text-base text-[#212629]">Мои адреса</span>
        </router-link>
        <router-link to="/мои данные" @click="userDropdownAdaptive = false"
          class="py-5 flex items-center border-b border-b-white cursor-pointer">
            <img src="@/assets/icons/mydata.svg" alt="" class="w-5 h-5">
            <span class="ml-5 text-base text-[#212629]">Мои данные</span>
        </router-link>
        <router-link to="/" @click="userDropdownAdaptive = false"
          class="py-5 flex items-center border-b border-b-white cursor-pointer">
            <img src="@/assets/icons/exit.svg" alt="" class="w-5 h-5">
            <span class="ml-5 text-base text-[#212629]">Выйти</span>
        </router-link>
        <button class="w-full bg-[#25D366] py-[10px] rounded-full mt-12">
          <span class="font-bold text-white text-base">Обратиться в WhatsApp</span>
        </button>
      </div>
    </div>
    <!-- Adaptive menu -->
    <div class="absolute z-[100] right-0 top-0 bottom-0 left-0 md:hidden bg-[#E9E9E9]"
      v-if="menu">
      <div class="px-5">
        <div class="flex justify-end py-6 border-b border-b-white">
          <img src="@/assets/icons/close.svg" alt="" class="cursor-pointer w-6 h-6"
            @click="menu = false">
        </div>
        <div class="py-5 flex items-center border-b border-b-white cursor-pointer">
          <img src="@/assets/icons/private-clients.svg" alt="" class="w-5 h-5">
          <a class="ml-5 text-base text-[#212629]">
            Меню для частных клиентов 
          </a>
        </div>
        <div class="py-5 flex items-center border-b border-b-white cursor-pointer">
          <img src="@/assets/icons/corporate-orders.svg" alt="" class="w-5 h-5">
          <a class="ml-5 text-base text-[#212629]">
            Меню для корпоративных заказов 
          </a>
        </div>
        <div class="py-5 flex items-center border-b border-b-white cursor-pointer">
          <img src="@/assets/icons/about-delivery.svg" alt="" class="w-5 h-5">
          <a class="ml-5 text-base text-[#212629]">
            О доставке 
          </a>
        </div>
        <div class="py-5 flex items-center border-b border-b-white cursor-pointer">
          <img src="@/assets/icons/phone.svg" alt="" class="w-5 h-5">
          <a class="ml-5 text-base text-[#212629]">
            Позвонить нам
          </a>
        </div>
        <div class="py-5 flex items-center border-b border-b-white cursor-pointer">
          <img src="@/assets/icons/email.svg" alt="" class="w-5 h-5">
          <a class="ml-5 text-base text-[#212629]">
            Написать на E-mail
          </a>
        </div>
        <router-link to="/Политика конфиденциальности" class="py-5 flex items-center border-b border-b-white cursor-pointer"
          @click="menu = false">
          <img src="@/assets/icons/email.svg" alt="" class="w-5 h-5">
          <a class="ml-5 text-base text-[#212629]">
            Политика конфиденциальности
          </a>
        </router-link>
        <router-link to="/Пользовательское соглашение" class="py-5 flex items-center border-b border-b-white cursor-pointer"
          @click="menu = false">
          <img src="@/assets/icons/email.svg" alt="" class="w-5 h-5">
          <a class="ml-5 text-base text-[#212629]">
            Пользовательское соглашение
          </a>
        </router-link>
        <button class="w-full bg-[#25D366] py-[10px] rounded-full mt-12">
          <span class="font-bold text-white text-base">Обратиться в WhatsApp</span>
        </button>
      </div>
    </div>
    <div class="hidden md:flex items-center relative">
      <button class="flex items-center bg-[#25D366] py-[10px] px-[30px] rounded-full mr-5">
        <img src="@/assets/whatsapp-white.svg" alt="" class="w-5 h-5">
        <span class="text-white ml-2 text-lg font-bold">WhatsApp</span>
      </button>
      <button class="nav_btn flex items-center bg-[#E9E9E9] py-[10px] px-[30px] rounded-full mr-8">
        <span class="text-[#212629] ml-2 text-lg font-bold">Заказать 1 блюдо за 430₽</span>
      </button>
      <button class="nav_btn flex items-center bg-[#E9E9E9] py-[10px] px-[12px] rounded-full"
        @click="showUserDropdown">
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
            <router-link to="/" @click="userDropdown = false">
              <li class="w-[360px] py-5 cursor-pointer border-y-[0.5px] border-white flex items-center">
                <img src="@/assets/icons/exit.svg" alt="" class="w-5 h-5">
                <span class="ml-4">Выйти</span>
              </li>
            </router-link>
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
      menu: false,
      userDropdownAdaptive: false,
      userDropdown: false,
    }
  },
  methods: {
    showUserDropdown() {
      this.userDropdown = !this.userDropdown
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

.burger_menu,.user_profile {
  transition: box-shadow .3s;
}
.burger_menu:hover,.user_profile:hover {
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.20);
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