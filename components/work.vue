<template>
  <div class="uppercase border-b border-color pl-6 md:pl-[3.35vw]">
    <div class="pt-[9.4vw] border-color border-l">
      <div class="pl-6 md:pl-[3.35vw] work-anime">
        <div class="overflow-hidden">
          <h2 class="work-text translate-y-[12vw]">
            WORKs
            <span class="inline-block w-[2rem] lg:w-[4vw] ml-[1vw]">
              <img src="svg/staricon.svg" alt="" />
            </span>
          </h2>
        </div>

        <div class="overflow-hidden">
          <h2 class="experience-text translate-y-[12vw]">EXPERIENCE</h2>
        </div>
      </div>

      <div class="mt-10 md:mt-[3.35vw]">
        <div class="w-full relative">
          <div
            class="absolute left-[51.12vw] top-[14vw] w-6 lg:w-[1.58vw] rotate-45"
          >
            <img class="dark:invert" src="svg/staricon.svg" alt="" />
          </div>

          <div
            class="px-6 md:ml-[3.35vw] md:pl-0 lg:pr-0 sticky top-[25%] xl:top-[12.5%] sm:max-w-[39.94vw] md:max-w-none md:w-[40vw] md:z-20"
          >
            <div class="test" data-cursor-text="view case">
              <a :href="`https://${href[position]}`" target="blank">
                <img
                  :src="`images/work/${images[position]}.png`"
                  alt=""
                  class="w-full relative max-w-[350px] sm:max-w-[100%] md:max-w-none md:w-[40vw] mx-auto md:mx-0"
                />
              </a>
            </div>
          </div>

          <div
            class="col-center -mt-[70%] sm:-mt-[35%] md:-mt-[42vw] z-10 relative md:space-y-[13.3vw]"
          >
            <Project
              class="spak"
              id="0.1"
              company="Spak.Africa"
              role="president and founder"
              year="2022"
              :href="[href[0]]"
            />
            <Project
              class="oea"
              id="0.2"
              company="Entrepreneurship Village"
              role="special assistant"
              year="2021"
              :href="[href[1]]"
            />
            <Project
              class="aye"
              id="0.3"
              company="Etrust Fund"
              role="chief of staff"
              year="2021"
              :href="[href[2]]"
            />
            <Project
              class="abi"
              id="0.4"
              company="AFRICA BLOCKCHAIN INSTITUTE"
              role="Executive Assistant"
              year="2021"
              :href="[href[3]]"
            />
            <Project
              class="ci"
              id="0.5"
              company="cMaptIT"
              role="Business, Product and Growth Lead"
              year="2018"
              :href="[href[4]]"
            />
          </div>
        </div>

        <div class="end pr-[9vw]">
          <div class="w-[5.7vw]">
            <img class="dark:invert" src="svg/detailed-star.svg" alt="" />
          </div>
        </div>
      </div>

      <div
        class="inline-flex items-center px-6 mt-[8.875rem] md:mt-[11vw] pb-6 lg:px-[3.35vw] md:pb-[3.35vw] overflow-hidden"
      >
        <span class="text-[10px] md:text-[0.95vw] font-light success-text">
        </span>

        <span class="ml-10 w-6 md:w-[2.3vw] h-auto center">
          <img class="dark:invert" src="svg/arrow-icon.svg" alt="" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import Project from "./Project.vue";
import aosMixin from "~/mixins/aos";
import AOS from 'aos'
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default {
  mixins: [aosMixin],
  data() {
    return {
      position: 0,
      images: ["spak", "second", "third", "fourth", "dummy"],
      href: [
        "spak.africa",
        "entrepreneurshipvillage.com/",
        "etrustfund.org/",
        "africablockchain.institute/incubator-program/",
        "cmapit.io/",
      ],
    };
  },
  mounted() {
        AOS.refresh()
    gsap.to(".work-text, .experience-text", {
      scrollTrigger: {
        trigger: ".work-text",
        start: "center bottom",
        // scrub: true,
        toggleActions: "play none none reverse",
      },
      duration: 1.5,
      stagger: 0.1,
      y: 0,
      ease: "power3.inOut",
    });

    gsap.to(".oea", {
      scrollTrigger: {
        trigger: ".oea",
        start: "center 90%",
        end: "center 89%",
        scrub: 1,
        // markers: true,
        onEnter: () => {
          this.position = 1;
        },
        onEnterBack: () => {
          this.position = 0;
        },
      },
    });

    gsap.to(".aye", {
      scrollTrigger: {
        trigger: ".aye",
        start: "center 90%",
        end: "center 89%",
        scrub: 1,
        // markers: true,
        onEnter: () => {
          this.position = 2;
        },
        onEnterBack: () => {
          this.position = 1;
        },
      },
    });

    gsap.to(".abi", {
      scrollTrigger: {
        trigger: ".abi",
        start: "center 90%",
        end: "center 89%",
        scrub: 1,
        // markers: true,
        onEnter: () => {
          this.position = 3;
        },
        onEnterBack: () => {
          this.position = 2;
        },
      },
    });

    gsap.to(".ci", {
      scrollTrigger: {
        trigger: ".ci",
        start: "center 90%",
        end: "center 89%",
        scrub: 1,
        // markers: true,
        onEnter: () => {
          this.position = 4;
        },
        onEnterBack: () => {
          this.position = 3;
        },
      },
    });

    gsap.to(".success-text", {
      scrollTrigger: {
        trigger: ".success-text",
        start: "bottom bottom",
        end: "bottom bottom",
        markers: false,
        toggleActions: "play none none reset",
      },
      text: {
        value: "I am very acquainted with success",
      },
      duration: 2,
    });
  },
  components: { Project },
};
</script>

<style lang="postcss" scoped>
.test {
  @apply relative;
}

.test::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @apply bg-white bg-opacity-20 dark:bg-opacity-20 dark:bg-black md:hidden;
  z-index: 100000;
}
</style>
