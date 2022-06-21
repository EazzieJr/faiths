<template>
  <footer>
    <div class="footer-container">
      <div class="top-left">
        <div class="socials overflow-hidden">
          <h2 class="translate-y-[10vw]" data-cursor="-opaque">SOCIALS</h2>
        </div>

        <div data-aos="fade-in" class="space-y-7 md:space-y-[3.35vw]">
          <a
            v-for="social in socials"
            :key="social.index"
            href="/"
            class="max-w-fit start space-x-4 md:space-x-[1.675vw]"
            data-cursor="-sm -exclusion"
            data-magnetic
          >
            <span class="social-name">{{ social.name }}</span>

            <span class="w-8 md:min-w-[3.6vw]">
              <img class="dark:invert" src="svg/arrow.svg" alt="" />
            </span>
          </a>
        </div>
      </div>

      <div class="connect">
        <p data-cursor="-exclusion"></p>
      </div>
    </div>

    <div class="copyright">
      <a href="https://centuryleap.com" data-cursor="-sm -opaque"></a>
    </div>
  </footer>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);
export default {
  data() {
    return {
      socials: [
        { name: "Facebook", link: "" },
        { name: "Twitter", link: "" },
        { name: "Instagram", link: "" },
        { name: "Youtube", link: "" },
        { name: "Medium", link: "" },
      ],
    };
  },

  mounted() {
    gsap.to(".socials h2", {
      scrollTrigger: {
        trigger: ".socials h2",
        start: "center bottom",
        // scrub: true,
        toggleActions: "play none none reverse",
      },
      duration: 1.5,
      stagger: 0.1,
      y: 0,
      ease: "power3.inOut",
    });

    gsap.to(".connect p", {
      scrollTrigger: {
        trigger: ".connect",
        start: "center 80%",
      },

      text: {
        value: `Connect with me
          <br />
          via mail at <br />
          <a data-cursor="-sm" href="mailto: hello@faitholaniyi.com"
            >hello@faitholaniyi.com</a
          >`,
      },
      duration: 2,
    });

    gsap.to(".copyright a", {
      scrollTrigger: {
        trigger: ".copyright",
        start: "center bottom",
      },

      text: {
        value: "Designed AT CENTURY LEAP",
      },
      duration: 2,
    });
  },
};
</script>

<style lang="postcss" scoped>
footer {
  > .footer-container {
    @apply font-kugile col-end md:flex-row md:evenly px-6 md:px-[3.35vw] border-color border-t;

    > .top-left {
      @apply w-full h-full space-y-7 md:space-y-[3.35vw] pl-6 lg:pl-[3.35vw] pt-16 md:pt-[8.3vw] pb-14 md:pb-[15vw] border-l border-r-0 md:border-r border-color;
    }
  }
}
.social-name {
  @apply first-letter:capitalize text-xl md:text-[2.13vw] md:leading-[3.4vw];
}

.connect {
  @apply block w-full h-full py-12 md:py-0 md:pt-[3vw] center border-l border-t md:border-0 border-color;

  p {
    @apply text-xl text-center md:text-[2.13vw] md:leading-[3.5vw];
  }
}

.copyright {
  @apply px-6 border-t start py-8 md:px-[3.35vw] md:pt-[3.8vw] md:pb-[3.2vw] border-color;

  a {
    @apply font-sans text-[10px] lg:text-[0.93vw] md:leading-[1.6vw] uppercase;
  }
}
</style>
