<template>
  <div class="flex items-center">
    <img src="@/assets/icons/left-arrow.svg" alt=""
      class="w-4 md:w-5 h-4 md:h-5 cursor-pointer"
      @click="$router.push('/')">
    <h1 class="text-[#212629] text-[22px] sm:text-[30px] md:text-[40px] font-bold ml-3 md:ml-5">
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'my-header-block'
}
</script>

<style>

</style>