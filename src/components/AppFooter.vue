<template>
  <footer class="w-[1170px] mx-auto px-4 mt-[150px] flex justify-between">
    <!-- footer-block-one -->
    <div class="w-[31%]">
      <div class="flex items-center py-5 border border-t-[#16161614] cursor-pointer">
        <img src="@/assets/whatsapp-green.svg" alt="" class="w-5 h-5">
        <a class="font-light text-lg text-[#23ac55] ml-4">WhatsApp</a>
      </div>
      <div class="flex items-center py-5 border border-t-[#16161614] cursor-pointer">
        <img src="@/assets/icons/phone.svg" alt="" class="w-5 h-5">
        <a class="font-light text-lg text-[#212629] ml-4">+7 (945) 450-46-60</a>
      </div>
      <div class="flex items-center py-5 border border-t-[#16161614] cursor-pointer">
        <img src="@/assets/icons/email.svg" alt="" class="w-5 h-5">
        <a class="font-light text-lg text-[#212629] ml-4">Написать на E-mail</a>
      </div>
    </div>
    <!-- footer-block-two -->
    <div class="w-[31%]">
      <div class="flex items-center py-5 border border-t-[#16161614] cursor-pointer">
        <img src="@/assets/icons/private-clients.svg" alt="" class="w-5 h-5">
        <a href="#menu-private-clients" class="font-light text-lg text-[#212629] ml-4">Меню для частных клиентов </a>
      </div>
      <div class="flex items-center py-5 border border-t-[#16161614] cursor-pointer">
        <img src="@/assets/icons/corporate-orders.svg" alt="" class="w-5 h-5">
        <a class="font-light text-lg text-[#212629] ml-4">Меню для корпоративных заказов</a>
      </div>
      <div class="flex items-center py-5 border border-t-[#16161614] cursor-pointer">
        <img src="@/assets/icons/about-delivery.svg" alt="" class="w-5 h-5">
        <a class="font-light text-lg text-[#212629] ml-4">О доставке</a>
      </div>
    </div>
    <!-- footer-block-three -->
    <div class="w-[31%]">
      <div class="flex items-center py-5 border border-t-[#16161614] cursor-pointer">
        <img src="@/assets/icons/privacy-policy.svg" alt="" class="w-5 h-5">
        <router-link to="/политика конфиденциальности" class="font-light text-lg text-[#212629] ml-4">Политика конфиденциальности</router-link>
      </div>
      <div class="flex items-center py-5 border border-t-[#16161614] cursor-pointer">
        <img src="@/assets/icons/user-agreement.svg" alt="" class="w-5 h-5">
        <router-link to="/пользовательское соглашение" class="font-light text-lg text-[#212629] ml-4">Пользовательское соглашение</router-link>
      </div>
      <div class="py-5 border border-t-[#16161614]">
        <a class="font-light text-lg text-[#212629]">© 2022 COOOK service</a>
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