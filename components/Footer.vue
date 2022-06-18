<template>
  <div class="">
    <div
      class="font-kugile col-end md:flex-row md:evenly px-6 md:px-[3.35vw] border-color border-t"
    >
      <div
        class="w-full h-full space-y-7 md:space-y-[3.35vw] pl-6 lg:pl-[3.35vw] pt-16 md:pt-[8.3vw] pb-14 md:pb-[8vw] border-l border-r-0 md:border-r border-color"
      >
        <h2 class="">SOCIALS</h2>
        <a
          v-for="social in socials"
          :key="social.name"
          href="/"
          class="max-w-fit start space-x-4 md:space-x-[1.675vw]"
          data-cursor="-sm"
          data-magnetic
        >
          <span class="first-letter:capitalize text-xl md:text-[2.13vw]"
            >{{ social.name }}</span
          >
          <span class="w-8 md:min-w-[3.6vw]">
            <img src="svg/arrow.svg" alt="">
          </span>
        </a>

      </div>

      <div
        class="block w-full h-full py-12 md:py-0 md:pt-[3vw] center border-l border-t md:border-0 border-color"
      >
        <p class="text-xl text-center md:text-[2.13vw] md:leading-[3.5vw]">
          Connect with me
          <br />
          via mail at <br />
          Faith.olaniyi@gmail.com
        </p>
      </div>
    </div>

    <div class="px-6 border-t start py-8 md:px-[3.35vw] md:pt-[3.8vw] md:pb-[3.2vw] border-color">
      <p class="font-sans text-[10px] lg:text-[0.93vw] md:leading-[1.6vw] uppercase">
        Designed AT CENTURY LEAP
      </p>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style></style>
