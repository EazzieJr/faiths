<template>
  <div class="certificate start-start space-x-4 md:space-x-[1.675vw]">
    <img
      class="w-5 md:w-[1.6vw]"
      :class="[darkMode ? 'filter invert' : '']"
      :src="`svg/${src}.svg`"
      alt=""
    />

    <div class="texts">
      <h4>{{ title }}</h4>

      <p class="post font-sans text-xs md:text-[1.06vw] md:leading-[1.8vw]">
        {{ organisation }}
      </p>

      <p class="year font-sans text-[10px] md:text-[0.93vw] md:leading-[1.6vw]">
        {{ year }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: ['src', 'title', 'organisation', 'year'],

  computed: {
    ...mapState(["darkMode"]),
  },
};
</script>

<style></style>
