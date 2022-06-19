<template>
  <footer>
    <div class="footer-container">
      <div class="top-left">
        <h2 data-cursor="-opaque">SOCIALS</h2>

        <a
          v-for="(social) in socials"
          :key="social.index"
          href="/"
          class="max-w-fit start space-x-4 md:space-x-[1.675vw]"
          data-cursor="-sm -exclusion"
          data-magnetic
        >
          <span class="social-name">{{ social.name }}</span>

          <span class="w-8 md:min-w-[3.6vw]">
            <img class="dark:invert" src="svg/arrow.svg" alt="" />
          </span>
        </a>
      </div>

      <div class="connect">
        <p data-cursor="-exclusion">
          Connect with me
          <br />
          via mail at <br />
          <a data-cursor="-sm" href="mailto: faith.olaniyi@gmail.com">Faith.olaniyi@gmail.com</a>
        </p>
      </div>
    </div>

    <div class="copyright">
      <a href="https://centuryleap.com" data-cursor="-sm -opaque">Designed AT CENTURY LEAP</a>
    </div>
  </footer>
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

<style lang="postcss" scoped>
footer {
  > .footer-container {
    @apply font-kugile col-end md:flex-row md:evenly px-6 md:px-[3.35vw] border-color border-t;

    > .top-left {
      @apply w-full h-full space-y-7 md:space-y-[3.35vw] pl-6 lg:pl-[3.35vw] pt-16 md:pt-[8.3vw] pb-14 md:pb-[15vw] border-l border-r-0 md:border-r border-color;
    }
  }
}
.social-name {
  @apply first-letter:capitalize text-xl md:text-[2.13vw] md:leading-[3.4vw];
  
}

.connect {
  @apply block w-full h-full py-12 md:py-0 md:pt-[3vw] center border-l border-t md:border-0 border-color;

  p {
    @apply text-xl text-center md:text-[2.13vw] md:leading-[3.5vw];
  }
}

.copyright {
  @apply px-6 border-t start py-8 md:px-[3.35vw] md:pt-[3.8vw] md:pb-[3.2vw] border-color;

  p {
    @apply font-sans text-[10px] lg:text-[0.93vw] md:leading-[1.6vw] uppercase;
  }
}
</style>
