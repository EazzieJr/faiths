<template>
  <div>
    <div class="flex border-color border-b">
      <Hero class="md:min-w-[96.65vw]" />

      <ScrollDown />
    </div>

    <WorkHeader />

    <div class="flex items-start justify-start border-[#333333] border-t">
      <div class="w-[86.78vw] border-color border-r">
        <Work />

        <Showcase />
      </div>

      <WorkStickyBar />
    </div>
    <Certifications />
    <Footer />
  </div>
</template>

<script>
import $ from 'jquery';
import Cursor from "~/js/cursor.js";
import Magnetic from "~/js/magnetic.js";
import aosMixin from "~/mixins/aos";
import Certifications from "../components/Certifications.vue";
export default {
  name: "IndexPage",
  mixins: [aosMixin],
  components: { Certifications },

  mounted() {
    new Cursor();
    new Magnetic();
    $("[data-magnetic]").each(function () {
      new Magnetic(this);
    });
  },
};
</script>

<style lang="postcss" scoped>

</style>