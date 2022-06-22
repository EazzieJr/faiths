<template>
  <div class="w-full h-screen bg-white dark:bg-[#0B0B0B] center">
    <div class="logo">
      <img
        class="w-8 lg:w-[3.8vw] scale-[2] translate-x-7 md:translate-x-[2.5vw]"
        :src="[
          darkMode
            ? 'images/loader-logo-dark.png'
            : 'images/loader-logo-white.png',
        ]"
        alt=""
      />

      <div class="texts">
        <div class="block overflow-hidden">
          <p class="translate-y-[5vw]">Faith</p>
        </div>

        <div class="block overflow-hidden">
          <p class="translate-y-[5vw]">olaniyi</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { mapState, mapMutations } from "vuex";
export default {
  name: "Loader",

  computed: {
    ...mapState(["loading", "darkMode"]),
  },

  methods: {
    ...mapMutations(["toggleLoader"]),
  },

  mounted() {
    // const tl = gsap.timeline();
    gsap.to("img", {
      delay: 1.5,
      duration: 1.5,
      scale: 1,
      x: 0,
      ease: "power3.out",
    });

    gsap.to("p", {
      y: 0,
      delay: 2.5,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to("p", {
      y: "-5vw",
      delay: 4,
      stagger: 0.1,
      duration: 1,
      ease: "power3.in",
    });

    ScrollTrigger.matchMedia({
      "(max-width: 767px)": function () {
        gsap.to(".logo", {
          delay: 5,
          duration: 1.5,
          scale: 1,
          x: "28px",
          ease: "power3.out",
        });
      },
    });
    gsap.to("img", {
      delay: 5,
      duration: 1.5,
      scale: 1,
      x: "2.5vw",
      ease: "power3.out",
    });

    gsap.to("img", {
      delay: 5.5,
      duration: 1.5,
      scale: 2,
      opacity: 0,
      ease: "power3.out",
      onComplete: () => {
        this.toggleLoader();
      },
    });
  },
};
</script>

<style lang="postcss" scoped>
.logo {
  @apply flex items-center space-x-2.5 md:space-x-[0.5vw];

  p {
    @apply uppercase font-sans text-[10px] lg:text-[1.06vw] font-black pl-0.5 md:leading-[1.25vw];
  }
}

.loader-enter-active,
.loader-leave-active {
  transition: opacity 1s;
}
.loader-enter,
.loader-leave-active {
  opacity: 0;
}
</style>
