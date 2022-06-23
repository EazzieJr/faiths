<template>
  <section class="hero border-color relative">
    <nav class="border-color">
      <div class="nav-container between">
        <div class="logo">
          <img class="w-8 lg:w-[3.8vw]" src="images/logo.png" alt="" />
          <p>
            Faith <br />
            olaniyi
          </p>
        </div>

        <div class="right-container start">
          <p data-magnetic class="resume">
            <span class="text-[10px] lg:text-[1.06vw]">resume</span>

            <svg
              class="w-5 md:w-[1.7vw]"
              viewBox="0 0 58 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector 1"
                d="M0 15.9839H53.6774M53.6774 15.9839C48.172 17.7043 37.1613 23.4161 37.1613 32.5M53.6774 15.9839C47.828 14.6075 36.129 9.58387 36.129 0.5"
                stroke="currentColor"
                stroke-width="1"
              />
            </svg>
          </p>

          <button class="w-5 lg:w-[1.7vw]" @click="toggleMode">
            <img
              :src="[darkMode ? 'svg/light-theme.svg' : 'svg/dark-theme.svg']"
              class="theme-button w-5 lg:w-[1.7vw]"
            />
          </button>
        </div>
      </div>
    </nav>

    <div class="hero-container border-color">
      <div class="top-hero">
        <div class="top-hero-container">
          <div class="top-hero-contents">
            <div class="text hero-text">
              <!-- Hero headder for 650px downwards -->
              <h1 class="relative md:hidden small-h1 opacity-0">
                founder & CEO, CHIEF OF STAFF,
                <span>CREAtIVE SPECIALIST,</span> BUSINESS STRATEGIST
              </h1>

              <!-- Hero headder for 768px upwards -->
              <div
                data-cursor="-opaque"
                class="big-hero relative hidden md:block"
              >
                <div class="overflow-y-hidden">
                  <h1 class="first translate-y-[20vw]">founder & CEO,</h1>
                </div>

                <div class="overflow-y-hidden">
                  <h1 class="second translate-y-[20vw]">CHIEF OF STAFF,</h1>
                </div>

                <div class="overflow-y-hidden">
                  <h1 class="third translate-y-[20vw]">CREAtIVE SPECIALIST,</h1>
                </div>

                <div class="overflow-y-hidden">
                  <h1 class="fourth translate-y-[20vw]">BUSINESS STRATEGIST</h1>
                </div>
              </div>

              <p class="explainer write-in font-light opacity-0"></p>
            </div>

            <div
              data-magnetic
              data-cursor="-opaque"
              data-cursor-stick="#img"
              class="image-pin image end bg-white dark:bg-[#0B0B0B] opacity-0"
            >
              <img
                class="circlular-hero w-28 md:min-w-[12vw] mix-blend-exclusion"
                src="images/circular-hero.png"
                alt=""
                id="img"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-hero pt-[2vw]">
        <div class="bottom-hero-container pr-6 md:pr-[3.35vw]">
          <div
            class="texts-image-small lg:hidden space-y-6 md:space-y-[1.6vw] lg:pr-[5vw]"
          >
            <p
              class="explainer md:pr-[20vw] lg:pr-0 first-text"
              data-cursor="-exclusion"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Faith Olaniyi is a creative generalist specialized in
              <span class="font-extrabold">product and business management</span
              >. He is an atypical thinker and problem solver who constantly
              generates innovative solutions to complex problems. He prides
              himself as a prolific technological management strategist,
              recognized for diverse experiences across varieties of industries.
            </p>

            <div class="image center md:end lg:hidden">
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                class="w-full max-w-[350px] md:max-w-[400px]"
                src="images/faith.png"
                alt=""
              />
            </div>

            <p
              class="explainer md:pr-[20vw] lg:pr-0 second-text"
              data-cursor="-exclusion"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Faith is a seasoned Chief of Staff and a member of the Chief of
              Staff association in the US. His resourcefulness and expertise
              gives him an edge in ensuring impeccable result. He has about six
              years of profound exposure in strategic planning, process
              optimization, business system building, business development,
              product and project management gained from across private, public,
              regional & international platforms.
            </p>
          </div>

          <div class="texts-big hidden lg:block lg:pt-[5vw] lg:pr-[5vw]">
            <p class="explainer pr-0" data-cursor="-exclusion"></p>
          </div>

          <div
            data-cursor="-exclusion -xl"
            class="relative image hidden lg:block md:w-2/5 lg:min-w-[40vw] hero-pin-image overflow-hidden"
          >
            <img class="w-full invert" src="images/faith.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
import Magnetic from "~/js/magnetic.js";
import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(TextPlugin, ScrollTrigger);
import { mapState, mapMutations } from "vuex";
// let ClipCursor;

export default {
  computed: {
    ...mapState(["darkMode"]),
  },

  methods: {
    ...mapMutations(["toggleDarkMode"]),

    heroAnimate() {
      ScrollTrigger.matchMedia({
        "(max-width: 767px)": function () {
          const tl = gsap.timeline({ ease: "power3.out" });
          tl.to(".small-h1, .image-pin", {
            duration: 1.5,
            opacity: 1,
          }).to(".write-in", {
            text: {
              value: "Consistency in growth, perfection in sustainability.",
            },
            duration: 2,
            opacity: 1,
            // onComplete: () => {
            //   ScrollTrigger.refresh();
            // },
          });
        },

        "(min-width: 768px)": function () {
          const tl = gsap.timeline({ ease: "power3.out" });
          tl.to(
            ".big-hero .first, .big-hero .second, .big-hero .third, .big-hero .fourth, .image-pin",
            {
              y: 0,
              duration: 1,
              delay: 1,
              opacity: 1,
              stagger: 0.1,
              ease: "ease out",
              onComplete: () => {
                ScrollTrigger.refresh();
              },
            }
          )
            .to(".write-in", {
              text: {
                value: "Consistency in growth, perfection in sustainability.",
              },
              duration: 2,
              delay: -0.5,
              opacity: 1,
              // onComplete: () => {
              //   ScrollTrigger.refresh();
              // },
            })
            .to(".big-hero div", {
              overflow: "visible",
            });

          gsap.to(
            ".big-hero .first, .big-hero .second, .big-hero .third, .big-hero .fourth, .small-h1 span",
            {
              scrollTrigger: {
                trigger: ".big-hero .first",
                start: "top 25%",
                endTrigger: ".big-hero",
                end: "bottom top",
                scrub: 2,
                // pin: true,
                markers: false,
              },

              x: "5vw",
              rotateX: "90deg",
              rotateY: "10deg",
              duration: 3,
              ease: "power3.out",
            }
          );
        },

        "(min-width: 1024px)": function () {
          const scroll = gsap.timeline({
            scrollTrigger: {
              trigger: ".bottom-hero",
              start: "center center",
              scrub: 1,
              pin: ".bottom-hero",
              // anticipatePin: -1,
              markers: false,
            },
            duration: 5,
          });

          scroll.to(".texts-big p", {
            text: {
              value: `Faith Olaniyi is a creative generalist specialized in
              <span style="font-weight: 900;">product and business management</span
              >. He is an atypical thinker and problem solver who constantly
              generates innovative solutions to complex problems. He prides
              himself as a prolific technological management strategist,
              recognized for diverse experiences across varieties of industries.
              <br /><br />
              Faith is a seasoned Chief of Staff and a member of the Chief of
              Staff association in the US. His resourcefulness and expertise
              gives him an edge in ensuring impeccable result. He has about six
              years of profound exposure in strategic planning, process
              optimization, business system building, business development,
              product and project management gained from across private, public,
              regional & international platforms.`,
            },
            delay: -5,
            duration: 5,
            onComplete: () => {
              ScrollTrigger.refresh();
              console.log("pin refreeshed")
            },
          });
        },
      });
    },

    toggleMode() {
      const html = document.querySelector("html");

      if (this.darkMode) {
        html.classList.remove("dark");
        this.toggleDarkMode();
      } else {
        html.classList.add("dark");
        this.toggleDarkMode();
      }
    },
  },

  async mounted() {
    new Magnetic();
    $("[data-magnetic]").each(function () {
      new Magnetic(this);
    });
    this.heroAnimate();
  },
};
</script>

<style lang="postcss" scoped>
.hero {
  @apply pl-6 md:pl-[3.35vw];

  nav {
    @apply border-r;

    > .nav-container {
      @apply py-5 md:py-[1.4vw];

      > .logo {
        @apply inline-flex items-center;

        p {
          @apply uppercase font-sans inline-block text-[10px] lg:text-[1.06vw] font-extrabold pl-0.5 md:leading-[1.25vw];
        }
      }

      > .right-container {
        @apply space-x-7 lg:space-x-[2.12vw] pr-2.5 md:pr-[0.66vw];

        > .resume {
          @apply uppercase inline-flex space-x-1 lg:space-x-[0.28vw];
        }
      }
    }
  }

  > .hero-container {
    @apply border-r pb-6 md:pb-[3.35vw];

    > .top-hero {
      @apply sm:h-screen pb-40 sm:pb-0;

      > .top-hero-container {
        @apply h-full;
        > .top-hero-contents {
          @apply md:flex items-start pt-20 md:pt-[9vw] h-full;
          /* > .hero-texts {
            > .big-hero {
              @apply hidden md:block;
            }
          } */

          > .image-pin {
            @apply mt-[10vh] sm:-mt-[30vh] mr-5 md:mr-10 -ml-[11.5vw] md:mt-[2vh] z-50;
          }
        }
      }
    }
  }
}

.big-hero::after,
.small-h1::after {
  content: "";
  position: absolute;
  left: 0;
  @apply bg-contain bg-center bg-no-repeat;
  @apply -bottom-40 md:-bottom-[10vw] w-14 h-14 md:w-[3.3vw] md:h-[3.3vw] left-6 md:left-0 bg-black-hero-star dark:bg-white-hero-star;
}

/* .explainer {
  @apply text-sm leading-normal lg:text-xl md:leading-6 lg:leading-8;
  @apply md:text-base;
} */

.bottom-hero-container {
  @apply md:flex justify-between items-center xl:items-start;
}

.texts-image {
  @apply xl:pt-[5vw];
}

.invert {
  filter: invert(1);
  -webkit-filter: invert(1);
}

.return {
  transform: translate(0px 0px) !important;
  -webkit-transform: translate(0px 0px) !important;
  -moz-transform: translate(0px 0px) !important;
  -ms-transform: translate(0px 0px) !important;
  -o-transform: translate(0px 0px) !important;
}

.clip-cursor {
  transition: 0.7s ease;
  clip-path: circle(10% at var(--x) var(--y));
}

.hero-pin-image {
  mix-blend-mode: multiply;
}

.big-hero div {
  perspective: 1000px;
}

div::-webkit-scrollbar {
  opacity: 0;
}
</style>
