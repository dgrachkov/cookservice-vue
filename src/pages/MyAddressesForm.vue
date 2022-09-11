<template>
  <div class="max-w-[1170px] w-full mx-auto py-5 md:py-0 px-4 md:mt-14">
    <div class="flex items-center">
      <img src="@/assets/icons/left-arrow.svg" alt="" class="w-5 h-5 cursor-pointer"
        @click="$router.push('/мои адреса')">
      <h1 class="text-[#212629] text-[22px] sm:text-[30px] md:text-[40px] font-bold ml-3">
        Мои адреса
      </h1>
    </div>

    <form @submit.prevent class="mt-8 md:mt-14">
      <div>
        <label class="form_label">Название адреса</label>
        <input type="text" class="form_input w-full text-base md:text-xl" 
          v-model="addressesForm.name" required>
      </div>
      <div class="mt-[35px]">
        <label class="form_label">Ваша башня</label>
        <input type="text" class="form_input w-full text-base md:text-xl" 
          v-model="addressesForm.tower" required>
      </div>
      <div class="mt-[35px] md:flex justify-between">
        <div class="flex justify-between">
          <div>
            <label class="form_label">Вход</label>
            <input type="text" class="w-full form_input text-base md:text-xl" 
              v-model="addressesForm.entry">
          </div>
          <div class="ml-4">
            <label class="form_label">Этаж</label>
            <input type="text" class="w-full form_input text-base md:text-xl"
              v-model="addressesForm.floor" required>
          </div>
        </div>
        <div class="flex justify-between ml-0 md:ml-4 mt-[35px] md:mt-0">
          <div>
            <label class="form_label">Квартира, офис</label>
            <input type="text" class="w-full form_input text-base md:text-xl" 
              v-model="addressesForm.apartment">
          </div>
          <div class="ml-4">
            <label class="form_label">Для охраны</label>
            <input type="text" class="w-full form_input text-base md:text-xl"
              v-model="addressesForm.security" required>
          </div>
        </div>
      </div>
      <div class="mt-[35px]">
        <div class="">
          <label class="form_label">Комментарий (если есть)</label>
          <textarea type="text" class="form_input w-full h-36 text-base md:text-xl" 
            v-model="addressesForm.comment"></textarea>
        </div>
      </div>
      <div class="mt-[30px]">
        <router-link to="/мои адреса">
          <my-button @click="createAddress">Сохранить</my-button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'my-addresses-form',
  emits: ["createAddress"],
  data() {
    return {
      addressesForm: {
        name: '',
        tower: '',
        entry: '',
        floor: '',
        apartment: '',
        security: '',
        comment: ''
      },
    }
  },
  methods: {
    createAddress() {
      this.addressesForm.id = Date.now();
      this.$emit('createAddress', this.addressesForm);
    }
  }
}
</script>

<style lang="scss" scoped>
.form_input {
  padding: 17px 10px 17px 10px;
  margin-top: 5px;
  display: block;
  background: #E9E9E9;
  border: 1px solid #FFFFFF;
  border-radius: 13px;
  font-weight: 700;
  color: #212629;
  font-weight: 700;
  resize: none;
}
.form_label {
  font-size: 14px;
  font-weight: 300;
  color: rgba(33, 38, 41, 0.5);
}
</style>