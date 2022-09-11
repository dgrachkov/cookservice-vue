<template>
  <div class="w-full max-w-[1170px] mx-auto px-4 py-5 md:py-0 md:mt-14">

    <my-header-block>Мои данные</my-header-block>

    <form class="mt-8 md:mt-14" @submit.prevent>
      <div class="block lg:flex items-center justify-between">
        <div class="w-full lg:w-[630px]">
          <label class="text-[#212629] text-sm sm:text-base">Как вас зовут</label>
          <input type="text" class="block text-base sm:text-xl form_input w-full"
            v-model="user.name">
        </div>
        <div class="mt-4 lg:mt-0">
          <label class="text-[#212629] text-sm sm:text-base">Телефон</label>
          <div class="form_input w-full flex items-center">
            <input type="number"
              class="bg-[#E9E9E9] border-none outline-none text-lg sm:text-xl mr-2 w-full"
              v-model="user.phone">
            <img src="@/assets/whatsapp-green.svg" alt="" class="w-6 h-6">
          </div>
        </div>
      </div>
      <div class="block sm:flex items-center justify-between mt-[30px]">
        <my-button @click="saveUser">Сохранить</my-button>
        <div class="mt-8 sm:mt-0 flex justify-end">
          <span class="text-[#212629] text-base sm:text-[17px] font-light cursor-pointer">
            Удалить аккаунт
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'my-data',
  props: {
    userData: {
      type: Object
    }
  },
  data() {
    return {
      user: {
        name: '',
        phone: '',
      }
    }
  },
  methods: {
    saveUser() {
      this.$emit('saveUser', this.user)
    }
  }
}
</script>

<style lang="scss" scoped>
.form_input {
  // outline: none;
  margin-top: 5px;
  font-weight: bold;
  color: #212629;
  padding: 17px 10px 17px 10px;
  background: #E9E9E9;
  border: 1px solid #FFFFFF;
  border-radius: 13px;
}
</style>