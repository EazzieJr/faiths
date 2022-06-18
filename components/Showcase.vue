<template>
  <div class="px-6 lg:px-[3.35vw]">
    <div class="pt-16 md:pt-[8.3vw]">
      <div class="pb-4 md:pb-[1.675vw]">
        <h2 class="">
          Product <br />
          showcase
        </h2>
      </div>

      <div
        class="col-between md:between gap-6 text-sm font-light mb-6 md:mb-[3.35vw]"
      >
        <div class="start space-x-6 sm:space-x-10">
          <span class="text-[10px] md:text-[0.95vw] font-light uppercase">
            here are some of the products i’ve lead, shipped and ideated
          </span>

          <span class="ml-10 w-6 md:w-[2.3vw] h-auto center">
            <img src="svg/arrow-icon.svg" alt="">
          </span>
        </div>

        <div
          class="end w-full md:w-auto md:between space-x-5 text-right md:space-x-[2.7vw] text-[10px] md:text-[0.95vw] font-light"
          data-cursor="-sm -opaque"
          data-cursor-stick="#asterisk"
        >
          <span class="inline-block">2016</span>

          <span
            class="inline-block w-[0.875rem] h-[0.875rem]"
            id="asterisk"
            data-magnetic
          >
            <img src="svg/asterisk.svg" class="w-3 md:w-[1.1vw]" />
          </span>

          <span class="inline-block">2022</span>
        </div>
      </div>

      <div
        class="col-between space-y-6 md:space-y-[1.675vw] mb-[7.8125rem] text-[#111111] dark:text-[#111111]"
      >
        <div
          class="container-decoy w-full h-[50vh] min-h-[20rem] md:h-[39vw] relative bg-[#CDFFCC]"
        >
          <div class="p-6 text-decoy md:p-[3.35vw]">
            <p class="first">MetroBox</p>

            <p
              class="text-xs lg:text-sm xl:text-[1.06vw] font-light leading-5 xl:leading-[1.8vw]"
            >
              Business Developer
            </p>

            <p
              class="text-[10px] lg:text-xs xl:text-[0.95vw] font-light leading-normal xl:leading-[1.7vw]"
            >
              2022
            </p>
          </div>
        </div>

        <div
          class="w-full col-between sm:between space-y-4 sm:space-y-0 sm:space-x-[1.675vw]"
        >
          <div
            class="container-decoy bg-[#CDFFCC] h-[40vh] min-h-[20rem] md:h-[34vw] w-full sm:w-[32.94%] duration-500 relative"
          >
            <div
              class="absolute text-decoy text-left bottom-4 left-4 md:bottom-[1.67vw] md:left-[1.67vw] z-10"
            >
              <p class="first">Spicy</p>

              <p
                class="text-xs lg:text-sm xl:text-[1.06vw] font-light leading-5 xl:leading-[1.8vw]"
              >
                Business Developer
              </p>

              <p
                class="text-[10px] lg:text-xs xl:text-[0.95vw] font-light leading-normal xl:leading-[1.7vw]"
              >
                2022
              </p>
            </div>
            <img
              src="images/spicy.jpg"
              alt="Spicy"
              class="h-full w-full object-cover object-left-top"
            />
          </div>

          <div
            class="container-decoy bg-[#CDFFCC] h-[40vh] min-h-[20rem] md:h-[34vw] w-full sm:w-[67.06%] relative"
          >
            <div
              class="absolute text-decoy text-left top-4 left-4 md:top-[1.67vw] md:left-[1.67vw] z-10"
            >
              <p class="first">AgriDrone Tech</p>

              <p
                class="text-xs lg:text-sm xl:text-[1.06vw] font-light leading-5 xl:leading-[1.8vw]"
              >
                Business, Product and Growth Lead
              </p>

              <p
                class="text-[10px] lg:text-xs xl:text-[0.95vw] font-light leading-normal xl:leading-[1.7vw]"
              >
                2018
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.text-decoy {
  .first {
    @apply font-kugile text-sm leading-normal lg:text-lg xl:text-[1.32vw] md:leading-6 lg:leading-8 xl:leading-[2.35vw] uppercase font-bold;
  }
}


.text-decoy, img {
  transition: 400ms;
  -webkit-transition: 400ms;
  -moz-transition: 400ms;
  -ms-transition: 400ms;
  -o-transition: 400ms;
}

.container-decoy {
  transition: 400ms;
  -webkit-transition: 400ms;
  -moz-transition: 400ms;
  -ms-transition: 400ms;
  -o-transition: 400ms;
}

.container-decoy:hover {
  @apply hover:scale-[0.96]
}

.container-decoy:hover .text-decoy {
  transform: scale(1.02);
  -webkit-transform: scale(1.02);
  -moz-transform: scale(1.02);
  -ms-transform: scale(1.02);
  -o-transform: scale(1.02);
  transition: 400ms;
  -webkit-transition: 400ms;
  -moz-transition: 400ms;
  -ms-transition: 400ms;
  -o-transition: 400ms;
}

.container-decoy:hover img {
  transform: scale(1.02);
  -webkit-transform: scale(1.02);
  -moz-transform: scale(1.02);
  -ms-transform: scale(1.02);
  -o-transform: scale(1.02);
  transition: 400ms;
  -webkit-transition: 400ms;
  -moz-transition: 400ms;
  -ms-transition: 400ms;
  -o-transition: 400ms;
}
</style>
