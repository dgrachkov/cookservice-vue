<template>
  <footer class="max-w-[1170px] w-full hidden md:flex mx-auto px-4 mt-[150px] justify-between flex-wrap">
    <!-- footer-block-one -->
    <div class="w-full lg:w-[31%]">
      <div class="flex items-center py-5 border border-t-[#16161614] cursor-pointer">
        <img src="@/assets/whatsapp-green.svg" alt="" class="w-5 h-5">
        <span class="font-light text-base sm:text-lg text-[#23ac55] ml-4">
          WhatsApp
        </span>
      </div>
      <div class="flex items-center py-5 border border-t-[#16161614] cursor-pointer">
        <img src="@/assets/icons/phone.svg" alt="" class="w-5 h-5">
        <span class="font-light text-base sm:text-lg text-[#212629] ml-4">
          +7 (945) 450-46-60
        </span>
      </div>
      <div class="flex items-center py-5 border border-t-[#16161614] cursor-pointer">
        <img src="@/assets/icons/email.svg" alt="" class="w-5 h-5">
        <span class="font-light text-base sm:text-lg text-[#212629] ml-4">
          Написать на E-mail
        </span>
      </div>
    </div>
    <!-- footer-block-two -->
    <div class="w-full lg:w-[31%]">
      <div class="flex items-center py-5 border border-t-[#16161614] cursor-pointer">
        <img src="@/assets/icons/private-clients.svg" alt="" class="w-5 h-5">
        <a href="#Частные клиенты" class="font-light text-base sm:text-lg text-[#212629] ml-4">
          Меню для частных клиентов 
        </a>
      </div>
      <div class="flex items-center py-5 border border-t-[#16161614] cursor-pointer">
        <img src="@/assets/icons/corporate-orders.svg" alt="" class="w-5 h-5">
        <a href="#Корпоративные заказы" class="font-light text-base sm:text-lg text-[#212629] ml-4">
          Меню для корпоративных заказов
        </a>
      </div>
      <div class="flex items-center py-5 border border-t-[#16161614] cursor-pointer">
        <img src="@/assets/icons/about-delivery.svg" alt="" class="w-5 h-5">
        <span class="font-light text-base sm:text-lg text-[#212629] ml-4">
          О доставке
        </span>
      </div>
    </div>
    <!-- footer-block-three -->
    <div class="w-full lg:w-[31%]">
      <div class="flex items-center py-5 border border-t-[#16161614] cursor-pointer"
        @click="$router.push('/политика конфиденциальности')">
        <img src="@/assets/icons/privacy-policy.svg" alt="" class="w-5 h-5">
        <span class="font-light text-base sm:text-lg text-[#212629] ml-4">
          Политика конфиденциальности
        </span>
      </div>
      <div class="flex items-center py-5 border border-t-[#16161614] cursor-pointer"
        @click="$router.push('/пользовательское соглашение')">
        <img src="@/assets/icons/user-agreement.svg" alt="" class="w-5 h-5">
        <span class="font-light text-base sm:text-lg text-[#212629] ml-4">
          Пользовательское соглашение
        </span>
      </div>
      <div class="py-5 border border-t-[#16161614]">
        <span class="font-light text-base sm:text-lg text-[#212629]">
          © 2022 COOOK service
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style>

</style>