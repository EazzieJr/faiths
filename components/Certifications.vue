<template>
  <section class="certifications border-color">
    <div class="certifications-container border-color">
      <div class="top">
        <h2 class="relative">
          certifications
          <span>
            <img class="dark:invert-clone" src="svg/asterisk.svg" alt="" />
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
          <img
            class="one w-[25vw]"
            src="images/certificates/Associate-chief-of-staff.png"
            alt=""
          />
          <img
            class="two w-[27vw] -mt-[7vw] z-[10] opacity-0"
            src="images/certificates/building-digital-products.png"
            alt=""
          />
          <img
            class="three w-[25vw] -mt-[6vw] z-[20] opacity-0"
            src="images/certificates/basic-digital-skills.png"
            alt=""
          />
          <img
            class="four w-[25vw] -mt-[5vw] z-[30] opacity-0"
            src="images/certificates/enterprise-design-thinking.png"
            alt=""
          />
          <img
            class="five w-[25vw] -mt-[4vw] z-[40] opacity-0"
            src="images/certificates/building-digital-products.png"
            alt=""
          />
          <img
            class="six w-[25vw] -mt-[5vw] z-[50] opacity-0 last"
            src="images/certificates/basic-digital-skills.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="image">
      <img class="dark:invert-clone" src="svg/staricon.svg" alt="" />
    </div>
  </section>
</template>

<script>
import Certificate from "./Certificate.vue";
import aosMixin from "~/mixins/aos";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mixins: [aosMixin],
  data() {
    return {
      images: ["spak", "second", "third", "fourth", "dummy"],
    };
  },

  methods: {
    change(selector, condition) {
      document.querySelector(selector).src = condition;
    },
  },

  mounted() {
    window.scrollTrigger = ScrollTrigger;
    ScrollTrigger.refresh();
    // console.log("refreshed")

    gsap.to(".one", {
      scrollTrigger: {
        trigger: ".one",
        start: "center 30%",
        endTrigger: ".last",
        end: "center 230",
        pin: true,
        scrub: true,
        markers: false,
        id: "lmao",
        pinSpacing: false,
        // onEnter: () => { ScrollTrigger.refresh(); console.log("i don refresh") }
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
        onEnter: () => {
          this.change(".pam img", "svg/focused.svg");
        },
        onEnterBack: () => {
          this.change(".pam img", "svg/unfocused.svg");
        },
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
        onEnter: () => {
          this.change(".hap img", "svg/focused.svg");
        },
        onEnterBack: () => {
          this.change(".hap img", "svg/unfocused.svg");
        },
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
        onEnter: () => {
          this.change(".edt img", "svg/focused.svg");
        },
        onEnterBack: () => {
          this.change(".edt img", "svg/unfocused.svg");
        },
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
        onEnter: () => {
          this.change(".hbd img", "svg/focused.svg");
        },
        onEnterBack: () => {
          this.change(".hbd img", "svg/unfocused.svg");
        },
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
        onEnter: () => {
          this.change(".bds img", "svg/focused.svg");
        },
        onEnterBack: () => {
          this.change(".bds img", "svg/unfocused.svg");
        },
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

      .images {
        @apply hidden sm:block;
      }
    }
  }

  > .image {
    @apply absolute right-[10.81vw] top-[56.3vw] w-10 lg:w-[2.71vw] rotate-45;
  }
}
</style>
