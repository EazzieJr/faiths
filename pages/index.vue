<template>
  <div>
    <transition name="page" mode="out-in">
      <Loader v-if="loading" />
    </transition>

    <transition name="page" mode="out-in">
      <div v-if="!loading">
        <div class="flex border-color border-b">
          <LazyHero class="md:min-w-[96.65vw]" />

          <ScrollDown />
        </div>

        <WorkHeader />

        <div class="flex items-start justify-start border-[#333333] border-t">
          <div class="w-[86.78vw] border-color border-r">
            <LazyWork />

            <LazyShowcase />
          </div>

          <WorkStickyBar />
        </div>
        <LazyCertifications />
        <LazyFooter />
      </div>
    </transition>
  </div>
</template>

<script>
import $ from "jquery";
import Cursor from "~/js/cursor.js";
import Magnetic from "~/js/magnetic.js";
import aosMixin from "~/mixins/aos";
import Certifications from "../components/Certifications.vue";
import Loader from "../components/Loader.vue";
import { mapState, mapMutations } from "vuex";
import AOS from 'aos'

export default {
  name: "IndexPage",
  mixins: [aosMixin],
  components: { Certifications, Loader },

  computed: {
    ...mapState(["loading"]),
  },

  mounted() {
    new Cursor();
    console.log(Cursor);
    new Magnetic();
    $("[data-magnetic]").each(function () {
      new Magnetic(this);
    });

    // document.querySelectorAll('img').forEach(img => {
    //   img.addEventListener('load', () => {
    //     AOS.refresh();
    //   });
    // });
  },
};
</script>

<style lang="postcss">
.page-enter-from, .page-leave-to {
  opacity: 0;
}
/* 
.page-enter-to, .page-leave-from {
  opacity: 1;
} */

.page-enter-active, .page-leave-active {
  transition: all 1s ease;
}
</style>
