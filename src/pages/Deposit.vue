<template>
  <div class="max-w-[1170px] w-full mx-auto px-4 py-5 md:py-0 md:mt-14">

    <my-header-block>Депозит</my-header-block>
     
    <div class="text-center md:text-start mt-4 md:mt-0">
      <h1 class="text-[80px] md:text-[220px] text-[#212629] font-bold leading-none">
        {{ userData.deposit }}₽
      </h1>
      <div class="text-lg md:text-[40px] text-[#212629] font-bold">
        на вашем счету
      </div>
    </div>

    <div class="mt-16 md:mt-20">
      <h3 class="text-light text-base md:text-lg text-[#212629]">Можно пополнить еще на 1 930₽</h3>
      <div class="deposit_item w-full sm:w-[460px] overflow-hidden">
        <div class="flex justify-between">
          <div>
            <div class="text-lg text-white font-bold">Мы добавим</div>
            <div class="text-[60px] md:text-[80px] text-white font-bold leading-none">193₽</div>
          </div>
          <img src="img/deposit-white.svg" alt="" class="w-10 h-10">
        </div>
        <div class="my-6 w-[275px] text-white text-sm sm:text-base">
          Помните, к каждому поплнению мы добавляем от себя 10%
        </div>
        <button class="deposit_item_btn">
          <span class="text-[#FE9102] font-bold text-lg">Пополнить депозит</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'deposit',
  props: {
    userData: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.deposit_item {
  margin-top: 20px;
  padding: 30px;
  background: #212629;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05), 40px 40px 50px rgba(0, 0, 0, 0.5);
  border-radius: 40px 40px 40px 5px;
  .deposit_item_btn {
    width: 100%;
    padding: 10px 0px;
    background: #212629;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5), -1px -1px 6px rgba(255, 255, 255, 0.05), -5px -5px 20px rgba(255, 255, 255, 0.1), 5px 5px 20px rgba(0, 0, 0, 0.8);
    border-radius: 99px;
  }
}
</style>