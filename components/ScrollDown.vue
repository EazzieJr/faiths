<template>
  <div class="min-w-[24px] md:max-w-[3.35vw] mt-[50vh] md:mt-[50vh]">
    <span
      class="scroll-text -rotate-90 text-xs uppercase flex whitespace-nowrap letter-spacing md:text-[1.06vw] md:leading-[1.8vw] tracking-tight md:tracking-[0.3vw]"
    ></span>

    <span class="flex rotate-90 mt-[7vh] md:mt-[10vh] mx-auto">
      <img class="scroll-img dark:invert opacity-0" src="svg/arrow.svg" alt="" />
    </span>

    <p class="opacity-0">0</p>

  </div>
</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["darkMode"]),
  },

  mounted() {
    const tl = gsap.timeline({ yoyo: true, repeat: -1, repeatDelay: 2 });
    tl.to(".scroll-text", {
      delay: 1,
      duration: 2,
      ease: "power.3 out",
      text: {
        value: "scroll down",
      },
    }).to(".scroll-img", {
      opacity: 1,
      duration: 1,
      ease: "power.3 out",
    });
  },
};
</script>

<style></style>
