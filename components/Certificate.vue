<template>
  <div data-aos="fade-up" data-aos-duration="1000" class="certificate start-start space-x-4 md:space-x-[1.675vw]">
    <img
      class="w-5 md:w-[1.6vw]"
      :class="[darkMode ? 'invert-clone' : '']"
      :src="`svg/${src}.svg`"
      alt=""
    />

    <div class="texts overflow-hidden">
      <h4>{{ title }}</h4>

      <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" class="post font-sans text-xs md:text-[1.06vw] md:leading-[1.8vw]">
        {{ organisation }}
      </p>

      <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" class="year font-sans text-[10px] md:text-[0.93vw] md:leading-[1.6vw]">
        {{ year }}
      </p>
    </div>
  </div>
</template>

<script>
import aosMixin from "~/mixins/aos";
import { mapState } from 'vuex';
export default {
  props: ['src', 'title', 'organisation', 'year'],
  mixins: [aosMixin],

  computed: {
    ...mapState(["darkMode"]),
  },
};
</script>

<style></style>
