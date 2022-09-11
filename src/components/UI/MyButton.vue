<template>
  <button class="form_btn w-full sm:w-[360px]">
    <span class="text-[#212629] text-base sm:text-lg font-bold">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style lang="scss" scoped>
.form_btn {
  padding: 10px 0px;
  background: #E9E9E9;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
  border-radius: 30px;
  transition: box-shadow .3s;
}
.form_btn:hover {
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.35);
}
</style>