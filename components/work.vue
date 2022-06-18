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
              src="images/dummy.png"
              alt=""
              class="w-full max-w-[350px] sm:max-w-[100%] md:max-w-none md:w-[40vw] mx-auto md:mx-0"
            />
          </div>

          <div
            class="col-center -mt-[70%] sm:-mt-[35%] md:-mt-[42vw] z-10 relative md:space-y-[13.3vw]"
          >
            <div
              v-for="(experience, id) in experiences"
              :key="experience.id"
              class="w-full between -ml-12 md:-ml-[6.7vw] mb-[70%] md:mb-0 last:mb-[25%] sm:last:mb-[12.5%] md:last:pb-[10vw]"
            >
              <div class="">
                <p
                  class="text-xs lg:text-lg center w-6 md:w-[3.35vw] -rotate-90 font-light tracking-[0.23em]"
                >
                  0.{{ id + 1 }}
                </p>
              </div>

              <div
                class="h-full w-full text-right sm:max-w-[37.53vw] lg:sm:max-w-[33.35vw] overflow-hidden"
              >
                <h3
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-anchor-placement="top-top"
                  class="font-kugile text-xl sm:text-2xl md:text-[2.65vw] leading-10 md:leading-normal"
                >
                  {{ experience.company }}
                </h3>

                <p
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  data-aos-anchor-placement="top-top"
                  class="explainer font-light"
                >
                  {{ experience.role }}
                </p>

                <p
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  data-aos-anchor-placement="top-top"
                  class="explainer font-light"
                >
                  {{ experience.year }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="end pr-[9vw]">
          <div class="w-[5.7vw]">
            <img src="svg/detailed-star.svg" alt="" />
          </div>
        </div>
      </div>

      <div
        class="inline-flex items-center px-6 mt-[8.875rem] md:mt-[11vw] pb-6 lg:px-[3.35vw] md:pb-[3.35vw] overflow-hidden"
      >
        <span class="text-[10px] md:text-[0.95vw] font-light success-text">
        </span>

        <span class="ml-10 w-6 md:w-[2.3vw] h-auto center">
          <img src="svg/arrow-icon.svg" alt="" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          company: "Spak.Africa",
          role: "president and founder",
          year: "2022",
          id: 0,
        },
        {
          company:
            "SPECIAL ADVISER TO ONDO STATE GOVT & CEO OF ONDO STATE ENTREPRENEURSHIP AGENCY",
          role: "special assistant",
          year: "2021",
          id: 1,
        },
        {
          company: "AFRICA’S YOUNG ENTREPRENEURS",
          role: "chief of staff",
          year: "2021",
          id: 2,
        },
        {
          company: "AFRICA BLOCKCHAIN INSTITUTE",
          role: "Executive Assistant",
          year: "2021",
          id: 3,
        },
        {
          company: "CYCLEBREEZE INNOVATIONS",
          role: "Business, Product and Growth Lead",
          year: "2018",
          id: 4,
        },
      ],
    };
  },
};
</script>

<style></style>
