<template>
  <div class="flex items-center">
    <img src="@/assets/icons/left-arrow.svg" alt="" class="w-5 h-5 cursor-pointer" @click="$router.push('/')">
    <h1 class="text-[#212629] text-[40px] font-bold ml-5">
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