<template>
  <div class="max-w-[1170px] w-full mx-auto px-4 py-5 md:py-0 md:mt-14">
    <div class="flex items-center">
      <img src="@/assets/icons/left-arrow.svg" alt=""
        class="w-4 md:w-5 h-4 md:h-5 cursor-pointer"
        @click="$router.push('/привязанные карты')">
      <h1 class="text-[#212629] text-[30px] md:text-[40px] font-bold ml-3 md:ml-5">
        {{ checkingNumberCard }}
      </h1>
    </div>

    <form @submit.prevent class="mt-8 md:mt-14">
      <div class="block md:flex"> 
        <div>
          <label class="form_label">Номер карты (Без пробелов)</label>
          <input type="number" class="form_input w-full md:w-[370px] text-base md:text-xl"
            v-model="cardsForm.number">
        </div>
        <div class="flex justify-between mt-4 md:mt-0">
          <div class="md:ml-[30px]">
            <label class="form_label">Действительна до</label>
            <input type="number" class="form_input w-full md:w-[170px] text-base md:text-xl"
              v-model="cardsForm.valid">
          </div>
          <div class="block md:hidden ml-4">
            <label class="form_label">CVC2/CVV2</label>
            <input type="password" class="form_input w-full md:w-[170px] text-base md:text-xl" 
              v-model="cardsForm.code">
          </div>
        </div>
      </div>
      <div class="block md:flex mt-4 md:mt-[35px]"> 
        <div>
          <label class="form_label">Имя держателя карты</label>
          <input type="text" class="form_input w-full md:w-[370px] text-base md:text-xl" 
            v-model="cardsForm.holderName">
        </div>
        <div class="ml-[30px] hidden md:block">
          <label class="form_label">CVC2/CVV2</label>
          <input type="password" class="form_input w-[170px] text-base md:text-xl" 
            v-model="cardsForm.code">
        </div>
      </div>
      <div class="mt-[30px]">
        <router-link to="/привязанные карты">
          <my-button @click="createCard">Сохранить</my-button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'linked-cards-form',
  emits: ["createCard"],
  data() {
    return {
      cardsForm: {
        number: '',
        valid: '',
        holderName: '',
        code: '',
      },
    }
  },
  methods: {
    createCard() {
      this.cardsForm.id = Date.now();
      this.$emit('createCard', this.cardsForm);
    }
  },
  computed: {
    checkingNumberCard() {
      let numberCard = this.cardsForm.number
      let strNumberCard = numberCard.toString();
      let resNumber = strNumberCard.split('');

      return resNumber.shift() === '5' ? 'MasterCard' : 'Visa'
    }
  }
}
</script>

<style lang="scss" scoped>
.form_label {
  font-size: 14px;
  font-weight: 300;
  color: rgba(33, 38, 41, 0.5);
}
.form_input {
  padding: 17px 10px 17px 10px;
  margin-top: 5px;
  display: flex;
  background: #E9E9E9;
  border: 1px solid #FFFFFF;
  border-radius: 13px;
  font-weight: 700;
  color: #212629;
  font-weight: 700;
  resize: none;
}
</style>