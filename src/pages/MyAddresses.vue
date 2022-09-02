<template>
  <div class="w-[1170px] mx-auto px-4 mt-14">

    <my-header-block>Мои адреса</my-header-block>

    <!-- list of the addresses -->
    <div class="flex mt-14 gap-7 flex-wrap">
      <!-- addresses-item -->
      <div class="address_item" v-for="address in userData.addressesList" :key="address.id">
        <div class="flex justify-between items-center">
          <h3 class="font-bold text-[#212629] text-xl">{{ address.name }}</h3>
          <div class="trash p-2 rounded-full">
            <img src="@/assets/icons/trash.svg" alt="" class="w-6 h-6"
              @click="$emit('removeAddress', address)">
          </div>
        </div>
        <div class="max-w-[265px] mt-10">
          <span>{{ address.tower }}, </span>
          <span>кв./офис {{ address.apartment }}, </span>
          <span>этаж {{ address.floor }},</span>
          <div>Для охраны {{ address.security }}</div>
        </div>
      </div>
      <div v-if="userData.addressesList.length === 0">
        <h3 class="font-bold text-lg text-[#212629]">Список адресов пуст...</h3>
      </div>
    </div>
     
      <my-button class="mt-10"
        @click="$router.push('/мои адреса/форма заполнения адреса')">
        Добавить адрес
      </my-button>

  </div>
</template>

<script>
export default {
  name: 'my-addresses',
  emits: ["removeAddress"],
  props: {
    userData: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.address_item {
  width: 360px;
  height: 170px;
  cursor: pointer;
  color: rgba(33, 38, 41, 0.5);
  padding: 22px 20px 22px 20px;
  background: #E9E9E9;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
  border-radius: 13px;
  transition: box-shadow .3s;
  overflow: hidden;
}
.address_item:hover {
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.35);
}

.trash {
  transition: box-shadow .3s;
}
.trash:hover {
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.35);
}
</style>