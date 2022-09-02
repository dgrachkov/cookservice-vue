<template>
  <div class="w-[1170px] mx-auto px-4 mt-14">
    <div class="flex items-center">
      <img src="@/assets/icons/left-arrow.svg" alt="" class="w-5 h-5 cursor-pointer"
        @click="$router.push('/привязанные карты')">
      <h1 class="text-[#212629] text-[40px] font-bold ml-5">
        {{ checkingNumberCard }}
      </h1>
    </div>

    <form @submit.prevent class="mt-14">
      <div class="flex"> 
        <div>
          <label class="form_label">Номер карты</label>
          <input type="number" class="form_input w-[370px]" v-model="cardsForm.number">
        </div>
        <div class="ml-[30px]">
          <label class="form_label">Действительна до</label>
          <input type="number" class="form_input w-[170px]" v-model="cardsForm.valid">
        </div>
      </div>
      <div class="flex mt-[35px]"> 
        <div>
          <label class="form_label">Имя держателя карты</label>
          <input type="text" class="form_input w-[370px]" v-model="cardsForm.holderName">
        </div>
        <div class="ml-[30px]">
          <label class="form_label">CVC2/CVV2</label>
          <input type="password" class="form_input w-[170px]" v-model="cardsForm.code">
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
  padding: 17px 0px 17px 20px;
  margin-top: 5px;
  display: flex;
  background: #E9E9E9;
  border: 1px solid #FFFFFF;
  border-radius: 13px;
  font-weight: 700;
  color: #212629;
  font-weight: 700;
  font-size: 20px;
  resize: none;
}
</style>