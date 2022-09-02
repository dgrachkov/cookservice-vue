<template>
  <header class="w-[1170px] mx-auto px-4 mt-[60px]">

    <div class="header_block pt-10 px-[49px] relative overflow-hidden">
      <h1 class="z-2 text-[120px] font-bold text-[#212629] leading-none">Только башни</h1>
      <div class="mt-12 w-72">
        <p class="text-[#212629] font-light text-lg">Наш ресторан обслуживает только близких соседей.</p>
        <p class="text-[#212629] font-light text-lg mt-3">Так никакого ожидания, все горячее и свежее.</p>
      </div>
      <div class="flex items-center mt-28">
        <div class="w-4 h-4 border border-[#212629] rounded-full"></div>
        <div class="w-[10px] h-[10px] bg-[#21262940] rounded-full ml-5"></div>
        <div class="w-[10px] h-[10px] bg-[#21262940] rounded-full ml-5"></div>
        <div class="w-[10px] h-[10px] bg-[#21262940] rounded-full ml-5"></div>
        <div class="w-[10px] h-[10px] bg-[#21262940] rounded-full ml-5"></div>
      </div>
      <div class="absolute bottom-0 right-5">
        <div class="flex justify-end font-bold text-[40px] text-[#212629] mr-5">Москва-Сити</div>
        <img src="@/assets/header-block-img-two.png" alt="" >
      </div>
    </div>

    <div class="mt-32" id="menu-private-clients">
      <div class="flex">
        <h2 class="font-bold text-[28px] text-[#212629] cursor-pointer">Частным клиентам</h2>
        <h2 class="font-bold text-[28px] text-gray-500 ml-12 cursor-pointer">Корпоративные заказы</h2>
      </div>
      <ul class="list-none flex flex-wrap gap-3 mt-6">
        <router-link to="/любимое">
          <li class="header_menu_item"><a href="#favorite">Любимое</a></li>
        </router-link>
        <a href="#Закуски" class="header_menu_item">
          <li>Закуски</li>
        </a>
        <a href="#Салаты" class="header_menu_item">
          <li>Салаты</li>
        </a>
        <li class="header_menu_item">Горячее</li>
        <li class="header_menu_item">Суши и роллы</li>
        <li class="header_menu_item">Супы</li>
        <li class="header_menu_item">Детское</li>
        <li class="header_menu_item">Десерты</li>
        <li class="header_menu_item">Напитки</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss" scoped>
.header_block{
  width: 100%;
  height: 500px;
  background: #E9E9E9;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05), 40px 40px 50px rgba(0, 0, 0, 0.3);
  border-radius: 80px 80px 80px 5px;
}
.header_menu_item {
  scroll-behavior: smooth;
  transition: background 0.2s;
  background: #E9E9E9;
  padding: 9px 20px;
  cursor: pointer;
  box-shadow: 0 5px 15px 0 rgba(0,0,0,0.1); 
  border-radius: 99px;
}
.header_menu_item:hover {
  color: white;
  background-color: #212629; 
}
</style>