<template>
  <section class="certifications border-color">
    <div class="certifications-container border-color">
      <div class="top">
        <h2 class="relative">
          certifications
          <span>
            <img class="dark:invert" src="svg/asterisk.svg" alt="" />
          </span>
        </h2>
      </div>

      <div class="bottom start-start relative">
        <div class="texts">
          <Certificate
            class="acf-fc-layout-certificate"
            src="focused"
            title="Associate Chief of Staff"
            organisation="The Chief of Staff Association"
            year="2022"
          />
          <Certificate
            class="pam"
            src="unfocused"
            title="Product Analytics Micro-Certification (PAC)™"
            organisation="Product School"
            year="2022"
          />
          <Certificate
            class="hap"
            src="unfocused"
            title="How to Achieve Product Market Fit"
            organisation="Product School"
            year="2022"
          />
          <Certificate
            class="edt"
            src="unfocused"
            title="Enterprise Design Thinking Practitioner"
            organisation="IBM"
            year="2022"
          />
          <Certificate
            class="hbd"
            src="unfocused"
            title="How to Build Digital Product"
            organisation="Product School"
            year="2021"
          />
          <Certificate
            class="bds"
            src="unfocused"
            title="Basic Digital Skills Training"
            organisation="Google"
            year="2018"
          />
        </div>

        <div class="center images hidden sm:block relative">
          <img class="one w-[27vw]" src="svg/stacked-image.svg" alt="" />
          <img
            class="two w-[27vw] -mt-[5vw] invert z-[10] opacity-0"
            src="svg/stacked-image.svg"
            alt=""
          />
          <img
            class="three w-[27vw] -mt-[4vw] z-[20] opacity-0"
            src="svg/stacked-image.svg"
            alt=""
          />
          <img
            class="four w-[27vw] -mt-[3vw] z-[30] opacity-0"
            src="svg/stacked-image.svg"
            alt=""
          />
          <img
            class="five w-[27vw] -mt-[2vw] z-[40] opacity-0"
            src="svg/stacked-image.svg"
            alt=""
          />
          <img
            class="six w-[27vw] -mt-[2vw] z-[50] opacity-0 last"
            src="svg/stacked-image.svg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="image">
      <img class="dark:invert" src="svg/staricon.svg" alt="" />
    </div>
  </section>
</template>

<script>
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Certificate from "./Certificate.vue";
export default {
  data() {
    return {
      images: ["spak", "second", "third", "fourth", "dummy"],
    };
  },

  mounted() {
    gsap.to(".one", {
      scrollTrigger: {
        trigger: ".one",
        start: "center 30%",
        endTrigger: ".last",
        end: "center 230",
        pin: true,
        scrub: true,
        // markers: false,
        pinSpacing: false,
      },
    });

    gsap.to(".two", {
      scrollTrigger: {
        trigger: ".two",
        start: "center 35%",
        // endTrigger: ".two",
        end: "center 30%",
        scrub: true,
        markers: false,
        id: "rotate",
      },

      opacity: 1,
      rotate: (Math.random() - 0.5) * 40,
    });

    gsap.to(".two", {
      scrollTrigger: {
        trigger: ".two",
        start: "center 30%",
        endTrigger: ".last",
        end: "center 230",
        pin: true,
        scrub: true,
        // markers: false,
        pinSpacing: false,
      },
    });

    gsap.to(".three", {
      scrollTrigger: {
        trigger: ".three",
        start: "center 35%",
        // endTrigger: ".two",
        end: "center 30%",
        scrub: true,
        markers: false,
        id: "rotate",
      },

      opacity: 1,
      rotate: (Math.random() - 0.5) * 40,
    });

    gsap.to(".three", {
      scrollTrigger: {
        trigger: ".three",
        start: "center 30%",
        endTrigger: ".last",
        end: "center 230",
        pin: true,
        scrub: true,
        // markers: false,
        pinSpacing: false,
      },
    });

    gsap.to(".four", {
      scrollTrigger: {
        trigger: ".four",
        start: "center 35%",
        // endTrigger: ".two",
        end: "center 30%",
        scrub: true,
        markers: false,
        id: "rotate",
      },

      opacity: 1,
      rotate: (Math.random() - 0.5) * 40,
    });

    gsap.to(".four", {
      scrollTrigger: {
        trigger: ".four",
        start: "center 30%",
        endTrigger: ".last",
        end: "center 230",
        pin: true,
        scrub: true,
        // markers: false,
        pinSpacing: false,
      },
    });

    gsap.to(".five", {
      scrollTrigger: {
        trigger: ".five",
        start: "center 35%",
        // endTrigger: ".two",
        end: "center 30%",
        scrub: true,
        markers: false,
        id: "rotate",
      },

      opacity: 1,
      rotate: (Math.random() - 0.5) * 40,
    });

    gsap.to(".five", {
      scrollTrigger: {
        trigger: ".five",
        start: "center 30%",
        endTrigger: ".last",
        end: "center 230",
        pin: true,
        scrub: true,
        // markers: false,
        pinSpacing: false,
      },
    });

    gsap.to(".six", {
      scrollTrigger: {
        trigger: ".six",
        start: "center 35%",
        // endTrigger: ".two",
        end: "center 30%",
        scrub: true,
        markers: false,
        id: "rotate",
      },

      opacity: 1,
      rotate: (Math.random() - 0.5) * 40,
    });

    gsap.to(".six", {
      scrollTrigger: {
        trigger: ".six",
        start: "center 30%",
        endTrigger: ".last",
        end: "center 230",
        pin: true,
        scrub: true,
        // markers: false,
        pinSpacing: false,
      },
    });

    ScrollTrigger.refresh();
    console.log("I am mounted");
  },
  components: { Certificate },
};
</script>

<style lang="postcss" scoped>
.certifications {
  @apply px-6 md:px-[3.35vw] border-t relative;

  > .certifications-container {
    @apply border-l pl-6 md:pl-[3.35vw] pt-16 md:pt-[8.3vw] pb-[13.4vw];

    > .top {
      span {
        @apply inline-block absolute top-0 -translate-y-1/2 w-[2rem] lg:w-[4vw] ml-[1vw];
      }
    }

    > .bottom {
      @apply mt-10 md:mt-[2.2vw] space-x-[7vw] lg:space-x-[10vw];

      > .texts {
        @apply space-y-20 md:space-y-[9.92vw] md:mt-[8.92vw] md:max-w-[42vw];
      }
    }
  }

  > .image {
    @apply absolute right-[10.81vw] top-[56.3vw] w-10 lg:w-[2.71vw] rotate-45;
  }
}
</style>
