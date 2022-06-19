<template>
  <div class="uppercase border-b border-color pl-6 md:pl-[3.35vw]">
    <div class="pt-[9.4vw] border-color border-l">
      <div class="pl-6 md:pl-[3.35vw] work-anime">
        <div class="overflow-hidden">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="400"
            class="work-text"
          >
            WORKs
            <span class="inline-block w-[2rem] lg:w-[4vw] ml-[1vw]">
              <img src="svg/staricon.svg" alt="" />
            </span>
          </h2>
        </div>

        <div class="overflow-hidden">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="400"
            class="experience-text"
          >
            EXPERIENCE
          </h2>
        </div>
      </div>

      <div class="mt-10 md:mt-[3.35vw]">
        <div class="w-full relative">
          <div
            class="absolute left-[51.12vw] top-[14vw] w-6 lg:w-[1.58vw] rotate-45"
          >
            <img src="svg/staricon.svg" alt="" />
          </div>
          <div
            class="px-6 md:ml-[3.35vw] md:pl-0 lg:pr-0 sticky top-[25%] xl:top-[12.5%] sm:max-w-[39.94vw] md:max-w-none md:w-[40vw] md:z-20"
          >
            <img
              :src="`images/work/${images[position]}.png`"
              alt=""
              class="w-full max-w-[350px] sm:max-w-[100%] md:max-w-none md:w-[40vw] mx-auto md:mx-0"
            />
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
            />
            <Project
              class="oea"
              id="0.2"
              company="SPECIAL ADVISER TO ONDO STATE GOVT & CEO OF ONDO STATE ENTREPRENEURSHIP AGENCY"
              role="special assistant"
              year="2021"
            />
            <Project
              class="aye"
              id="0.3"
              company="AFRICA’S YOUNG ENTREPRENEURS"
              role="chief of staff"
              year="2021"
            />
            <Project
              class="abi"
              id="0.4"
              company="AFRICA BLOCKCHAIN INSTITUTE"
              role="Executive Assistant"
              year="2021"
            />
            <Project
              class="ci"
              id="0.5"
              company="CYCLEBREEZE INNOVATIONS"
              role="Business, Product and Growth Lead"
              year="2018"
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
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default {
  data() {
    return {
      position: 0,
      images: ["spak", "second", "third", "fourth"],
    };
  },
  mounted() {
    gsap.to(".oea", {
      scrollTrigger: {
        trigger: ".oea",
        start: "center 90%",
        end: "center 89%",
        scrub: 1,
        // markers: true,
        onEnter: () => {
          this.position = 1
        },
        onEnterBack: () => {
          this.position = 0
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
          this.position = 2
        },
        onEnterBack: () => {
          this.position = 1
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
          this.position = 3
        },
        onEnterBack: () => {
          this.position = 2
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
          this.position = 4
        },
        onEnterBack: () => {
          this.position = 3
        },
      },
    });

    gsap.to(".success-text", {
      scrollTrigger: {
        trigger: ".success-text",
        start: "bottom 90%",
        end: "bottom bottom",
        // markers: true,
        toggleActions: "play none none restart",
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

<style></style>
