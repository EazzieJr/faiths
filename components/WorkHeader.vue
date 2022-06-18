<template>
    <div class=" overflow-x-hidden py-1 lg:py-[0.66vw]">
      <div
        class="marquee flex flex-nowrap justify-start items-center border-y border-color py-[1.65vw] overflow-x-hidden"
      >
        <div class=" space-x-[4.96vw]">
          <span
            v-for="(char, id) in heading"
            :key="id"
            class="uppercase text-xs lg:text-[1.06vw] font-light leading-5 whitespace-nowrap first:ml-[3.3vw]"
          >
            {{ char }}
          </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      heading: [
        "LEADERSHIP",
        "PROACTIVE",
        "Research & Resourcefulness",
        "Result oriented",
        "Organization & Detail-oriented",
        "Critical thinker",
        "High-performer",
        "LEADERSHIP",
        "PROACTIVE",
        "Research & Resourcefulness",
        "Result oriented",
        "Organization & Detail-oriented",
        "Critical thinker",
        "High-performer",
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.marquee div {
  animation: marquee 20s linear infinite;
  -webkit-animation: marquee 20s linear infinite;
}

.marquee:hover div {
  animation-play-state: paused;
  -webkit-animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translate(0%, 0);
    -webkit-transform: translate(0%, 0);
    -moz-transform: translate(0%, 0);
    -ms-transform: translate(0%, 0);
    -o-transform: translate(0%, 0);
  }
  100% {
    transform: translate(-50.4%, 0);
    -webkit-transform: translate(-50.4%, 0);
    -moz-transform: translate(-50.4%, 0);
    -ms-transform: translate(-50.4%, 0);
    -o-transform: translate(-50.4%, 0);
  }
}
</style>
