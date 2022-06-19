<template>
  <div class="sticky right-0 mx-auto top-11 h-auto pt-6 md:pt-[3.35vw]">
    <div class="logo inline-flex items-center col-center md:flex-row">
      <img class="w-8 lg:w-[3.8vw]" src="images/logo.png" alt="" />

      <p>
        <span>faith</span> <br />
        <span>olaniyi</span>
      </p>
    </div>

    <div class="rotate-90 center my-10 md:my-[6.8vw]">
      <img :src="[darkMode ? 'svg/white-arrow-icon.svg' : 'svg/arrow-icon.svg']" class="w-12 md:w-[7.7vw]" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["darkMode"]),
  },
};
</script>

<style lang="postcss" scoped>
p {
  @apply uppercase font-sans text-[10px] lg:text-[1.06vw] font-extrabold pl-0.5 hidden md:block;
}
</style>
