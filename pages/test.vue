<template>
  <div class="bg-blue-600">
    <div class="absolute clip w-full h-screen bg-black center">
      <div class="ball w-80 h-80 bg-transparent rounded-full transform scale-0"></div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap"
export default {
  mounted() {
    const tl = gsap.timeline();

    tl.to('.clip', {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        duration: 1.5,
        ease: "power2.out",
        delay: 1.5
    })

    .to('.ball', {
        duration: 1,
        scale: 1,
        ease: 'ease in'
    })
  },
};
</script>

<style>
.clip {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}
</style>
