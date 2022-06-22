<template>
  <footer>
    <div class="footer-container col-end border-color md:evenly">
      <div class="top-left border-color">
        <div class="socials overflow-hidden">
          <h2 class="translate-y-[10vw]" data-cursor="-opaque">SOCIALS</h2>
        </div>

        <div
          data-aos="fade-in"
          data-aos-duratoin="1500"
          class="space-y-7 md:space-y-[3.35vw]"
        >
          <a
            v-for="social in socials"
            :key="social.index"
            :href="social.link"
            target="blank"
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

      <div class="connect border-color center">
        <p data-cursor="-exclusion"></p>
      </div>
    </div>

    <div class="copyright start border-color">
      <a href="https://centuryleap.com" data-cursor="-sm -opaque"></a>
    </div>
  </footer>
</template>

<script>
import $ from "jquery";
import Magnetic from "~/js/magnetic.js";
import aosMixin from "~/mixins/aos";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);
export default {
  mixins: [aosMixin],

  data() {
    return {
      socials: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/faith-olaniyi/",
        },
        { name: "Twitter", link: "https://twitter.com/faith_olaniyi" },
        { name: "Instagram", link: "https://www.instagram.com/faith_olaniyi/" },
      ],
    };
  },

  mounted() {
    new Magnetic();
    $("[data-magnetic]").each(function () {
      new Magnetic(this);
    });

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
    @apply font-kugile md:flex-row px-6 md:px-[3.35vw] border-t;

    > .top-left {
      @apply w-full h-full space-y-7 md:space-y-[3.35vw] pl-6 lg:pl-[3.35vw] pt-16 md:pt-[8.3vw] pb-14 md:pb-[15vw] border-l border-r-0 md:border-r;
    }
  }
}
.social-name {
  @apply first-letter:capitalize text-xl md:text-[2.13vw] md:leading-[3.4vw];
}

.connect {
  @apply block w-full h-full py-12 md:py-0 md:pt-[3vw] border-l border-t md:border-0;

  p {
    @apply text-xl text-center md:text-[2.13vw] md:leading-[3.5vw];
  }
}

.copyright {
  @apply px-6 border-t  py-8 md:px-[3.35vw] md:pt-[3.8vw] md:pb-[3.2vw];

  a {
    @apply font-sans text-[10px] lg:text-[0.93vw] md:leading-[1.6vw] uppercase;
  }
}
</style>
