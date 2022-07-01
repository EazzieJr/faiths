<template>
  <div class="min-w-[24px] md:max-w-[3.35vw] mt-[50vh] md:mt-[50vh]">
    <span
      class="scroll-text -rotate-90 text-xs uppercase flex whitespace-nowrap letter-spacing md:text-[1.06vw] md:leading-[1.8vw] tracking-tight md:tracking-[0.3vw]"
    >
    SCROLL DOWN
    </span>

    <span class="flex rotate-90 mt-[7vh] md:mt-[10vh] mx-auto">
      <img class="scroll-img dark:invert" src="svg/arrow.svg" alt="" />
    </span>

  </div>
</template>

<script>
import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { mapState } from "vuex";
gsap.registerPlugin(TextPlugin);
export default {
  computed: {
    ...mapState(["darkMode"]),
  },

  mounted() {
    gsap.to(".scroll-img", {
      yoyo: true,
      repeat: -1,
      duration: 1.5,
      ease: "power1.inOut",
      x: "2vw"
    })
  }
};
</script>

<style></style>
