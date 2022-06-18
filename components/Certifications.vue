<template>
  <section class="certifications px-6 md:px-[3.35vw] border-color border-t relative ">
      <div class="certifications-container border-color border-l pl-6 md:pl-[3.35vw] pt-16 md:pt-[8.3vw] pb-[13.4vw]">
        <div class="top">
          <h2 class="relative">
            certifications
            <span class="inline-block absolute top-0 -translate-y-1/2 w-[2rem] lg:w-[4vw] ml-[1vw]">
              <Asterisk />
            </span>
          </h2>
        </div>

        <div class="bottom mt-10 md:mt-[2.2vw] start-start space-x-[7vw] lg:space-x-[10vw]">
          <div class="texts space-y-20 md:space-y-[9.92vw] md:mt-[8.92vw] md:max-w-[42vw]">
            {certificates.map((certificate, index) => {
              return (
                <div
                  key={certificate.id}
                  class="certificate start-start space-x-4 md:space-x-[1.675vw]"
                >
                  {darkMode === true ? (
                    <img
                      class="w-5 md:w-[1.6vw] filter invert"
                      src={Unfocused}
                      alt=""
                    />
                  ) : (
                    <img class="w-5 md:w-[1.6vw]" src={Unfocused} alt="" />
                  )}

                  <div class="texts">
                    <h4>{certificate.title}</h4>

                    <p class="post font-sans text-xs md:text-[1.06vw] md:leading-[1.8vw]">
                      {certificate.organisation}
                    </p>

                    <p class="year font-sans text-[10px] md:text-[0.93vw] md:leading-[1.6vw]">
                      {certificate.year}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div class="images hidden sm:block sticky top-[20vw]">
            <img class="w-[27vw]" src={StackedImages} alt="" />
          </div>
        </div>
      </div>

      <div class="absolute right-[10.81vw] top-[56.3vw] w-10 lg:w-[2.71vw] rotate-45">
        <StarIcon />
      </div>
    </section>
</template>

<script>
export default {
  
}
</script>

<style>

</style>