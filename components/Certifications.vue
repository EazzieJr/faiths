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

      <div class="bottom start-start">
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

        <div class="images hidden sm:block sticky top-[10vw]">
          <img class="w-[27vw]" src="svg/stacked-images.svg" alt="" />
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
  mounted() {
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
