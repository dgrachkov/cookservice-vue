<template>
  <div class="max-w-[1170px] w-full mx-auto px-4 py-5 md:py-0 md:mt-14">
    
    <my-header-block>Привязанные карты</my-header-block>

    <!-- list of the cards -->
    <div class="flex mt-8 md:mt-14 gap-4 md:gap-8 flex-wrap">
      <!-- card-item -->
      <div class="card_item w-full md:w-[360px] md:h-[200px]"
        v-for="card in userData.cardsList" :key="card.id">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img :src="checkingFirsNumber(card.number)" alt="" class="w-[46px] h-[30px]">
            <span class="ml-[14px] text-[#212629] text-xl font-bold">
              *** {{ lastFourNumbers(card.number) }}
            </span>
          </div>
          <div class="trash p-2 rounded-full">
            <img src="@/assets/icons/trash.svg" alt="" class="w-6 h-6"
              @click="$emit('removeCard', card)">
          </div>
        </div>
      </div>
      <div v-if="userData.cardsList.length === 0">
        <h3 class="font-bold text-lg text-[#212629ad]">Список карт пуст...</h3>
      </div>
    </div>

    <my-button class="mt-10"
      @click="$router.push('/привязанные карты/форма заполнения карты')">
      Добавить карту
    </my-button>
    
  </div>
</template>

<script>
export default {
  name: 'linked-cards',
  emits: ["removeCard"],
  props: {
    userData: {
      type: Object,
      required: true
    }
  },
  methods: {
    checkingFirsNumber(num) {
      if (num.toString().substr('0', '1') === '4') {
        return'img/visa.svg'
      }
      return 'img/mastercard.svg'
    },
    lastFourNumbers(num) {
      return num.toString().substr('-4')
    }
  }
}
</script>

<style lang="scss" scoped>
.card_item {
  cursor: pointer;
  color: rgba(33, 38, 41, 0.5);
  padding: 22px 20px 22px 20px;
  background: #E9E9E9;
  background-image: linear-gradient(62deg, #A18CD1, #FBC2EB);
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
  border-radius: 13px;
  transition: box-shadow .3s;
}
.card_item:hover {
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.35);
}

.trash {
  transition: box-shadow .3s;
}
.trash:hover {
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.35);
}
</style>