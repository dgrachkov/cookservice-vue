<template>
  <div class="w-[1170px] mx-auto px-4 mt-14">

    <my-header-block>Мои данные</my-header-block>

    <form class="mt-14" @submit.prevent>
      <div class="flex items-center justify-between">
        <div class="w-[780px]">
          <label>Как вас зовут</label>
          <input type="text" class="block form_input w-full" v-model="user.name">
        </div>
        <div>
          <label>Телефон</label>
          <div class="form_input flex items-center">
            <input type="number" class="bg-[#E9E9E9] mr-2 outline-0" v-model="user.phone">
            <img src="@/assets/whatsapp-green.svg" alt="" class="w-6 h-6">
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between mt-[30px]">
        <my-button @click="saveUser">Сохранить</my-button>
        <button>
          <span class="text-[#212629] text-[17px] font-light">Удалить аккаунт</span>
        </button>
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
  outline: none;
  margin-top: 5px;
  font-weight: bold;
  font-size: 20px;
  color: #212629;
  padding: 17px 20px 17px 20px;
  background: #E9E9E9;
  border: 1px solid #FFFFFF;
  border-radius: 13px;
}
</style>