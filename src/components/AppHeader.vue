<template>
  <header class="w-full max-w-[1170px] mx-auto sm:px-4 mt-5 md:mt-[60px]">

    <div class="header_block hidden xl:block pt-10 px-[49px] relative overflow-hidden">
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

    <div class="xl:hidden w-full">
      <div class="block lg:flex">
        <h1 class="header_block_title_one text-[100px] md:text-[120px] font-bold text-[#212629] leading-none mx-0">
          Только
        </h1>
        <h1 class="header_block_title_two text-[100px] md:text-[120px] font-bold text-[#212629] leading-none">
          башни
        </h1>
      </div>
      <h2 class="font-bold text-[40px] text-[#212629] mx-4">Москва-Сити</h2>
      <div class="w-full mt-6">
        <p class="text-[#212629] font-light text-lg mx-4">Наш ресторан обслуживает только близких соседей.</p>
        <p class="text-[#212629] font-light text-lg mt-3 mx-4">Так никакого ожидания, все горячее и свежее.</p>
      </div>
      <div class="mt-6">
        <img src="@/assets/header-block-img-two.png" alt="" class="w-full">
      </div>
    </div>

    <div class="mt-16 md:mt-32" id="menu-private-clients">
      <div class="hidden md:flex">
        <h2 id="Частные клиенты" class="font-bold text-[28px] text-[#212629] cursor-pointer">
          Частным клиентам
        </h2>
        <h2 id="Корпоративные заказы" class="font-bold text-[28px] text-gray-500 ml-12 cursor-pointer">
          Корпоративные заказы
        </h2>
      </div>
      <div class="menu_list border border-b-gray-300 flex md:flex-wrap gap-3 py-4 px-2 mt-0 md:mt-4 md:px-0 overflow-x-scroll">
        <router-link to="/любимое">
          <a href="#favorite" class="header_menu_item">Любимое</a>
        </router-link>
        <a href="#Закуски" class="header_menu_item">Закуски</a>
        <a href="#Салаты" class="header_menu_item">Салаты</a>
        <a href="#Горячее" class="header_menu_item">Горячее</a>
        <a href="#Сушиироллы" class="header_menu_item">Суши и роллы</a>
        <a href="#Супы" class="header_menu_item">Cупы</a>
        <a href="#Детское" class="header_menu_item">Детское</a>
        <a href="#Десерты" class="header_menu_item">Десерты</a>
        <a href="#Напитки" class="header_menu_item">Напитки</a>
      </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-behavior: smooth;
  transition: background 0.2s;
  background: #E9E9E9;
  min-width: 150px;
  padding: 9px 20px;
  cursor: pointer;
  box-shadow: 0 5px 6px 0 rgba(0,0,0,0.1); 
  border-radius: 99px;
}
.header_menu_item:hover {
  color: white;
  background-color: #212629; 
}

.menu_list::-webkit-scrollbar {
  display: none;
}
.menu_list {
  -ms-overflow-style: none; 
  scrollbar-width: none; 
}

@media (min-width: 370px) {
  .header_block_title_one {
    margin: 0px 16px;
  }
  .header_block_title_two {
    margin: 0px 32px;
  }
}

@media (min-width: 1024px) {
  .header_block_title_two {
    margin: 0px 16px;
  }
}

@media (min-width: 768px) {
  .header_menu_item {
    min-width: 0px;
  }
  .menu_list {
    border: none;
  }
}
</style>