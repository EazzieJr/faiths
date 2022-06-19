<template>
<div class="max-w-[24px] md:max-w-[3.35vw] mt-[50vh] md:mt-[50vh]">
  <span class="-rotate-90 text-xs uppercase flex whitespace-nowrap letter-spacing md:text-[1.06vw] md:leading-[1.8vw] tracking-tight md:tracking-[0.3vw]">scroll down</span>

<span class="flex rotate-90 mt-[7vh] md:mt-[10vh] mx-auto">
  <img :src="[darkMode ? 'svg/white-arrow.svg' : 'svg/arrow.svg']" alt="">
</span>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['darkMode']),
  },
}
</script>

<style>

</style>