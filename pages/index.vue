<template>
  <div>
    <div class="flex items-start justify-start border-[#333333] border-t">
        <div class="w-[86.78vw] border-color border-r">
          <!-- <Work /> -->

          <Showcase />
        </div>

        <WorkStickyBar class="w-[23.]" />
      </div>
    <Certifications />
    <Footer />
  </div>
</template>

<script>
import Certifications from "../components/Certifications.vue";
export default {
  name: "IndexPage",
  components: { Certifications },
};
</script>
