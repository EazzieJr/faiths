<template>
  <div
    class="experience w-full between -ml-12 md:-ml-[6.7vw] mb-[70%] md:mb-0 last:mb-[25%] sm:last:mb-[12.5%] md:last:pb-[10vw]"
  >
    <div class="">
      <p
        class="text-xs lg:text-lg center w-6 md:w-[3.35vw] -rotate-90 font-light tracking-[0.23em]"
      >
        {{ id }}
      </p>
    </div>

    <div
      class="h-full w-full text-right sm:max-w-[37.53vw] lg:sm:max-w-[33.35vw] overflow-hidden"
    >
      <h3
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="bottom-center"
        class="font-kugile text-xl sm:text-2xl md:text-[2.65vw] leading-10 md:leading-normal"
      >
        {{ company }}
      </h3>

      <p
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-anchor-placement="bottom-center"
        class="explainer font-light"
      >
        {{ role }}
      </p>

      <p
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-anchor-placement="bottom-center"
        class="explainer font-light"
      >
        {{ year }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'company', 'role', 'year']
};
</script>

<style></style>
