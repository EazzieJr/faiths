<template>
    <div>
        <div refs="exit" class="exit absolute top-0 w-full h-screen bg-black flex justify-center items-center">
            <div class="ball w-80 h-80 bg-white rounded-full transform scale-0"></div>
        </div>
        <Navigation @feature="index = $event" />
        

        <div data-aos="fade-up" class="w-20 h-20 bg-black">
            
        </div>

        <p data-aos="fade-up" data-aos-duration="2000" class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus placeat facilis laboriosam labore minus, reprehenderit sed perspiciatis veritatis quaerat sapiente, illum porro nulla ex laborum corporis eos quis illo! Voluptatum.
        Incidunt molestiae debitis iste aliquid dolorem nihil eum. Error quibusdam consequatur corrupti repellendus provident molestiae inventore. Harum quis at soluta molestias, voluptate optio reiciendis sunt aliquam nam doloribus? Reiciendis, aliquid?
        Nesciunt culpa est harum aliquam voluptates ea dignissimos commodi, beatae natus doloribus doloremque sit, qui, cumque alias recusandae reiciendis quae? Maxime totam iure, sed possimus incidunt architecto iusto mollitia. Molestiae.
        Reiciendis, dolore eius maiores quasi voluptates totam perferendis perspiciatis rem rerum quaerat at laboriosam quos tempora minus delectus nostrum vel quod voluptatibus quis praesentium. Id quia possimus veniam ad asperiores?
        Natus sunt, laudantium modi hic, fugit repudiandae iure labore, vero rerum dolorum cum tempore dolorem corrupti ipsam recusandae ullam aliquid voluptatibus tempora accusantium iusto minus rem obcaecati similique? Qui, sit.
        Earum eos harum quam excepturi? Eos quaerat dolorum cum! Expedita saepe optio, possimus delectus nesciunt similique animi dicta quasi laboriosam dolore tempore magni odit beatae. Praesentium sapiente quis molestias laborum!
        Voluptatibus, voluptates numquam! Vitae, iure architecto dolorum nesciunt soluta quae exercitationem! Iusto laborum voluptates repudiandae labore asperiores! Voluptatibus iste laudantium excepturi accusantium fuga quae suscipit, voluptatem rerum explicabo inventore ratione.
        Eius optio rerum quia culpa, modi vero odit quas et obcaecati consectetur quam ut saepe, enim mollitia dicta. Deleniti placeat illo excepturi minus. Suscipit tenetur nesciunt fugit sunt molestiae maiores?
        Inventore officiis temporibus voluptas, quod ipsam praesentium ex consequuntur sed exercitationem omnis dolor optio esse beatae sapiente repellat quaerat error ad architecto! Ab sit quisquam numquam! Sapiente, aut? Libero, quo.
        In, dolore quod? Possimus dolorem praesentium, omnis, obcaecati repudiandae magnam rem eligendi aliquam vitae incidunt impedit ducimus! Fugiat earum at asperiores esse eaque fugit, porro aspernatur mollitia! Dignissimos, reiciendis est!
        Aliquam exercitationem ea beatae rem ipsum alias, aut, quisquam iure, sit nulla nemo. Aliquam enim reiciendis, ipsa asperiores accusantium similique illo blanditiis porro nemo temporibus fugiat. Quaerat natus non illo.
        Earum eveniet voluptas eaque, perspiciatis quis ut alias deserunt eius illum. Esse quam minima, exercitationem deserunt voluptatum, expedita dolore porro cumque tempora optio distinctio earum molestias ab impedit consequuntur! Voluptate.
        Quidem illo corrupti odio nemo. Saepe, modi ut dicta cum tenetur provident libero natus? Quod, quibusdam? Odit numquam tempore aut necessitatibus, iste eum maxime, aliquam sint cupiditate voluptates quos eligendi.
        Saepe corporis autem doloremque quod veniam, quia dolores iure? Quibusdam architecto ducimus impedit, ad, earum aliquam dolore esse dolorem blanditiis neque ipsa? Eveniet beatae cumque eligendi fuga dolorem at quaerat?
        Maiores sapiente, rem odit exercitationem sint debitis iusto perferendis doloremque eius omnis distinctio quisquam vero impedit. Minus, sunt praesentium placeat iure, aliquam in culpa incidunt accusamus nulla delectus fugit illo.
        Corporis deleniti quis fugit animi velit suscipit minima ab iure. Necessitatibus placeat, porro distinctio eligendi at a eveniet pariatur totam maiores modi quasi aperiam rerum et beatae voluptates ipsum cupiditate!
        Voluptas corporis officiis tempora quod ab eius perferendis blanditiis debitis eum dicta nulla dolore cum, provident necessitatibus deleniti, dolor aut, nobis voluptatum neque rem quaerat maxime at earum nostrum. Rem?
        Ad tempora nisi libero laborum deleniti sint nesciunt iste ut provident dignissimos mollitia neque voluptatibus facere, asperiores voluptatem ipsum facilis exercitationem dolorum at? At maiores assumenda voluptatem ullam qui pariatur.
        Exercitationem dignissimos numquam quia, explicabo, veritatis dolorem eum odit reiciendis tempora sequi id impedit quidem alias libero tempore repellendus accusamus sint atque obcaecati autem eos recusandae minima quae modi! Perferendis!
        Voluptates cumque dolor quidem, ducimus sint ratione nulla adipisci ut rerum veritatis recusandae blanditiis iure eum, nostrum quia error? Omnis non natus aliquam repudiandae ducimus minima adipisci sint sunt eius.
        </p>

        <p data-aos="fade-up" data-aos-duration="2000" class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus placeat facilis laboriosam labore minus, reprehenderit sed perspiciatis veritatis quaerat sapiente, illum porro nulla ex laborum corporis eos quis illo! Voluptatum.
        Incidunt molestiae debitis iste aliquid dolorem nihil eum. Error quibusdam consequatur corrupti repellendus provident molestiae inventore. Harum quis at soluta molestias, voluptate optio reiciendis sunt aliquam nam doloribus? Reiciendis, aliquid?
        Nesciunt culpa est harum aliquam voluptates ea dignissimos commodi, beatae natus doloribus doloremque sit, qui, cumque alias recusandae reiciendis quae? Maxime totam iure, sed possimus incidunt architecto iusto mollitia. Molestiae.
        Reiciendis, dolore eius maiores quasi voluptates totam perferendis perspiciatis rem rerum quaerat at laboriosam quos tempora minus delectus nostrum vel quod voluptatibus quis praesentium. Id quia possimus veniam ad asperiores?
        Natus sunt, laudantium modi hic, fugit repudiandae iure labore, vero rerum dolorum cum tempore dolorem corrupti ipsam recusandae ullam aliquid voluptatibus tempora accusantium iusto minus rem obcaecati similique? Qui, sit.
        Earum eos harum quam excepturi? Eos quaerat dolorum cum! Expedita saepe optio, possimus delectus nesciunt similique animi dicta quasi laboriosam dolore tempore magni odit beatae. Praesentium sapiente quis molestias laborum!
        Voluptatibus, voluptates numquam! Vitae, iure architecto dolorum nesciunt soluta quae exercitationem! Iusto laborum voluptates repudiandae labore asperiores! Voluptatibus iste laudantium excepturi accusantium fuga quae suscipit, voluptatem rerum explicabo inventore ratione.
        Eius optio rerum quia culpa, modi vero odit quas et obcaecati consectetur quam ut saepe, enim mollitia dicta. Deleniti placeat illo excepturi minus. Suscipit tenetur nesciunt fugit sunt molestiae maiores?
        Inventore officiis temporibus voluptas, quod ipsam praesentium ex consequuntur sed exercitationem omnis dolor optio esse beatae sapiente repellat quaerat error ad architecto! Ab sit quisquam numquam! Sapiente, aut? Libero, quo.
        In, dolore quod? Possimus dolorem praesentium, omnis, obcaecati repudiandae magnam rem eligendi aliquam vitae incidunt impedit ducimus! Fugiat earum at asperiores esse eaque fugit, porro aspernatur mollitia! Dignissimos, reiciendis est!
        Aliquam exercitationem ea beatae rem ipsum alias, aut, quisquam iure, sit nulla nemo. Aliquam enim reiciendis, ipsa asperiores accusantium similique illo blanditiis porro nemo temporibus fugiat. Quaerat natus non illo.
        Earum eveniet voluptas eaque, perspiciatis quis ut alias deserunt eius illum. Esse quam minima, exercitationem deserunt voluptatum, expedita dolore porro cumque tempora optio distinctio earum molestias ab impedit consequuntur! Voluptate.
        Quidem illo corrupti odio nemo. Saepe, modi ut dicta cum tenetur provident libero natus? Quod, quibusdam? Odit numquam tempore aut necessitatibus, iste eum maxime, aliquam sint cupiditate voluptates quos eligendi.
        Saepe corporis autem doloremque quod veniam, quia dolores iure? Quibusdam architecto ducimus impedit, ad, earum aliquam dolore esse dolorem blanditiis neque ipsa? Eveniet beatae cumque eligendi fuga dolorem at quaerat?
        Maiores sapiente, rem odit exercitationem sint debitis iusto perferendis doloremque eius omnis distinctio quisquam vero impedit. Minus, sunt praesentium placeat iure, aliquam in culpa incidunt accusamus nulla delectus fugit illo.
        Corporis deleniti quis fugit animi velit suscipit minima ab iure. Necessitatibus placeat, porro distinctio eligendi at a eveniet pariatur totam maiores modi quasi aperiam rerum et beatae voluptates ipsum cupiditate!
        Voluptas corporis officiis tempora quod ab eius perferendis blanditiis debitis eum dicta nulla dolore cum, provident necessitatibus deleniti, dolor aut, nobis voluptatum neque rem quaerat maxime at earum nostrum. Rem?
        Ad tempora nisi libero laborum deleniti sint nesciunt iste ut provident dignissimos mollitia neque voluptatibus facere, asperiores voluptatem ipsum facilis exercitationem dolorum at? At maiores assumenda voluptatem ullam qui pariatur.
        Exercitationem dignissimos numquam quia, explicabo, veritatis dolorem eum odit reiciendis tempora sequi id impedit quidem alias libero tempore repellendus accusamus sint atque obcaecati autem eos recusandae minima quae modi! Perferendis!
        Voluptates cumque dolor quidem, ducimus sint ratione nulla adipisci ut rerum veritatis recusandae blanditiis iure eum, nostrum quia error? Omnis non natus aliquam repudiandae ducimus minima adipisci sint sunt eius.
        </p>

        <p data-aos="fade-up" data-aos-duration="2000" class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus placeat facilis laboriosam labore minus, reprehenderit sed perspiciatis veritatis quaerat sapiente, illum porro nulla ex laborum corporis eos quis illo! Voluptatum.
        Incidunt molestiae debitis iste aliquid dolorem nihil eum. Error quibusdam consequatur corrupti repellendus provident molestiae inventore. Harum quis at soluta molestias, voluptate optio reiciendis sunt aliquam nam doloribus? Reiciendis, aliquid?
        Nesciunt culpa est harum aliquam voluptates ea dignissimos commodi, beatae natus doloribus doloremque sit, qui, cumque alias recusandae reiciendis quae? Maxime totam iure, sed possimus incidunt architecto iusto mollitia. Molestiae.
        Reiciendis, dolore eius maiores quasi voluptates totam perferendis perspiciatis rem rerum quaerat at laboriosam quos tempora minus delectus nostrum vel quod voluptatibus quis praesentium. Id quia possimus veniam ad asperiores?
        Natus sunt, laudantium modi hic, fugit repudiandae iure labore, vero rerum dolorum cum tempore dolorem corrupti ipsam recusandae ullam aliquid voluptatibus tempora accusantium iusto minus rem obcaecati similique? Qui, sit.
        Earum eos harum quam excepturi? Eos quaerat dolorum cum! Expedita saepe optio, possimus delectus nesciunt similique animi dicta quasi laboriosam dolore tempore magni odit beatae. Praesentium sapiente quis molestias laborum!
        Voluptatibus, voluptates numquam! Vitae, iure architecto dolorum nesciunt soluta quae exercitationem! Iusto laborum voluptates repudiandae labore asperiores! Voluptatibus iste laudantium excepturi accusantium fuga quae suscipit, voluptatem rerum explicabo inventore ratione.
        Eius optio rerum quia culpa, modi vero odit quas et obcaecati consectetur quam ut saepe, enim mollitia dicta. Deleniti placeat illo excepturi minus. Suscipit tenetur nesciunt fugit sunt molestiae maiores?
        Inventore officiis temporibus voluptas, quod ipsam praesentium ex consequuntur sed exercitationem omnis dolor optio esse beatae sapiente repellat quaerat error ad architecto! Ab sit quisquam numquam! Sapiente, aut? Libero, quo.
        In, dolore quod? Possimus dolorem praesentium, omnis, obcaecati repudiandae magnam rem eligendi aliquam vitae incidunt impedit ducimus! Fugiat earum at asperiores esse eaque fugit, porro aspernatur mollitia! Dignissimos, reiciendis est!
        Aliquam exercitationem ea beatae rem ipsum alias, aut, quisquam iure, sit nulla nemo. Aliquam enim reiciendis, ipsa asperiores accusantium similique illo blanditiis porro nemo temporibus fugiat. Quaerat natus non illo.
        Earum eveniet voluptas eaque, perspiciatis quis ut alias deserunt eius illum. Esse quam minima, exercitationem deserunt voluptatum, expedita dolore porro cumque tempora optio distinctio earum molestias ab impedit consequuntur! Voluptate.
        Quidem illo corrupti odio nemo. Saepe, modi ut dicta cum tenetur provident libero natus? Quod, quibusdam? Odit numquam tempore aut necessitatibus, iste eum maxime, aliquam sint cupiditate voluptates quos eligendi.
        Saepe corporis autem doloremque quod veniam, quia dolores iure? Quibusdam architecto ducimus impedit, ad, earum aliquam dolore esse dolorem blanditiis neque ipsa? Eveniet beatae cumque eligendi fuga dolorem at quaerat?
        Maiores sapiente, rem odit exercitationem sint debitis iusto perferendis doloremque eius omnis distinctio quisquam vero impedit. Minus, sunt praesentium placeat iure, aliquam in culpa incidunt accusamus nulla delectus fugit illo.
        Corporis deleniti quis fugit animi velit suscipit minima ab iure. Necessitatibus placeat, porro distinctio eligendi at a eveniet pariatur totam maiores modi quasi aperiam rerum et beatae voluptates ipsum cupiditate!
        Voluptas corporis officiis tempora quod ab eius perferendis blanditiis debitis eum dicta nulla dolore cum, provident necessitatibus deleniti, dolor aut, nobis voluptatum neque rem quaerat maxime at earum nostrum. Rem?
        Ad tempora nisi libero laborum deleniti sint nesciunt iste ut provident dignissimos mollitia neque voluptatibus facere, asperiores voluptatem ipsum facilis exercitationem dolorum at? At maiores assumenda voluptatem ullam qui pariatur.
        Exercitationem dignissimos numquam quia, explicabo, veritatis dolorem eum odit reiciendis tempora sequi id impedit quidem alias libero tempore repellendus accusamus sint atque obcaecati autem eos recusandae minima quae modi! Perferendis!
        Voluptates cumque dolor quidem, ducimus sint ratione nulla adipisci ut rerum veritatis recusandae blanditiis iure eum, nostrum quia error? Omnis non natus aliquam repudiandae ducimus minima adipisci sint sunt eius.
        </p>

        <p data-aos="fade-up" data-aos-duration="2000" class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus placeat facilis laboriosam labore minus, reprehenderit sed perspiciatis veritatis quaerat sapiente, illum porro nulla ex laborum corporis eos quis illo! Voluptatum.
        Incidunt molestiae debitis iste aliquid dolorem nihil eum. Error quibusdam consequatur corrupti repellendus provident molestiae inventore. Harum quis at soluta molestias, voluptate optio reiciendis sunt aliquam nam doloribus? Reiciendis, aliquid?
        Nesciunt culpa est harum aliquam voluptates ea dignissimos commodi, beatae natus doloribus doloremque sit, qui, cumque alias recusandae reiciendis quae? Maxime totam iure, sed possimus incidunt architecto iusto mollitia. Molestiae.
        Reiciendis, dolore eius maiores quasi voluptates totam perferendis perspiciatis rem rerum quaerat at laboriosam quos tempora minus delectus nostrum vel quod voluptatibus quis praesentium. Id quia possimus veniam ad asperiores?
        Natus sunt, laudantium modi hic, fugit repudiandae iure labore, vero rerum dolorum cum tempore dolorem corrupti ipsam recusandae ullam aliquid voluptatibus tempora accusantium iusto minus rem obcaecati similique? Qui, sit.
        Earum eos harum quam excepturi? Eos quaerat dolorum cum! Expedita saepe optio, possimus delectus nesciunt similique animi dicta quasi laboriosam dolore tempore magni odit beatae. Praesentium sapiente quis molestias laborum!
        Voluptatibus, voluptates numquam! Vitae, iure architecto dolorum nesciunt soluta quae exercitationem! Iusto laborum voluptates repudiandae labore asperiores! Voluptatibus iste laudantium excepturi accusantium fuga quae suscipit, voluptatem rerum explicabo inventore ratione.
        Eius optio rerum quia culpa, modi vero odit quas et obcaecati consectetur quam ut saepe, enim mollitia dicta. Deleniti placeat illo excepturi minus. Suscipit tenetur nesciunt fugit sunt molestiae maiores?
        Inventore officiis temporibus voluptas, quod ipsam praesentium ex consequuntur sed exercitationem omnis dolor optio esse beatae sapiente repellat quaerat error ad architecto! Ab sit quisquam numquam! Sapiente, aut? Libero, quo.
        In, dolore quod? Possimus dolorem praesentium, omnis, obcaecati repudiandae magnam rem eligendi aliquam vitae incidunt impedit ducimus! Fugiat earum at asperiores esse eaque fugit, porro aspernatur mollitia! Dignissimos, reiciendis est!
        Aliquam exercitationem ea beatae rem ipsum alias, aut, quisquam iure, sit nulla nemo. Aliquam enim reiciendis, ipsa asperiores accusantium similique illo blanditiis porro nemo temporibus fugiat. Quaerat natus non illo.
        Earum eveniet voluptas eaque, perspiciatis quis ut alias deserunt eius illum. Esse quam minima, exercitationem deserunt voluptatum, expedita dolore porro cumque tempora optio distinctio earum molestias ab impedit consequuntur! Voluptate.
        Quidem illo corrupti odio nemo. Saepe, modi ut dicta cum tenetur provident libero natus? Quod, quibusdam? Odit numquam tempore aut necessitatibus, iste eum maxime, aliquam sint cupiditate voluptates quos eligendi.
        Saepe corporis autem doloremque quod veniam, quia dolores iure? Quibusdam architecto ducimus impedit, ad, earum aliquam dolore esse dolorem blanditiis neque ipsa? Eveniet beatae cumque eligendi fuga dolorem at quaerat?
        Maiores sapiente, rem odit exercitationem sint debitis iusto perferendis doloremque eius omnis distinctio quisquam vero impedit. Minus, sunt praesentium placeat iure, aliquam in culpa incidunt accusamus nulla delectus fugit illo.
        Corporis deleniti quis fugit animi velit suscipit minima ab iure. Necessitatibus placeat, porro distinctio eligendi at a eveniet pariatur totam maiores modi quasi aperiam rerum et beatae voluptates ipsum cupiditate!
        Voluptas corporis officiis tempora quod ab eius perferendis blanditiis debitis eum dicta nulla dolore cum, provident necessitatibus deleniti, dolor aut, nobis voluptatum neque rem quaerat maxime at earum nostrum. Rem?
        Ad tempora nisi libero laborum deleniti sint nesciunt iste ut provident dignissimos mollitia neque voluptatibus facere, asperiores voluptatem ipsum facilis exercitationem dolorum at? At maiores assumenda voluptatem ullam qui pariatur.
        Exercitationem dignissimos numquam quia, explicabo, veritatis dolorem eum odit reiciendis tempora sequi id impedit quidem alias libero tempore repellendus accusamus sint atque obcaecati autem eos recusandae minima quae modi! Perferendis!
        Voluptates cumque dolor quidem, ducimus sint ratione nulla adipisci ut rerum veritatis recusandae blanditiis iure eum, nostrum quia error? Omnis non natus aliquam repudiandae ducimus minima adipisci sint sunt eius.
        </p>

        <div class="image-container transform w-full flex justify-center items-center">
            <img src="/tellerone-mobile.png" alt="">
        </div>

        <div class="image-container transform w-full flex justify-center items-center">
            <img src="/features/Group 638 (4).png" alt="">
        </div>

        <div class="w-full flex justify-center">
            <div class="w-full relative flex justify-center">
                <div class="card absolute w-60 h-[350px] bg-white border rounded-2xl"></div>
                <div class="test w-52 h-[400px] bg-black rounded-2xl"></div>
            </div>
        </div>
    </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin( ScrollTrigger )
const tl = gsap.timeline()

export default {
    mixins: [aosMixin],

    mounted() {

    tl.to('.exit', {
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

    // .to('.ball', {
    //     duration: 1,
    //     opacity: 0,
    //     ease: 'ease in',
    //     delay: 0.5
    // })

    // .to('.exit', {
    //     clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    //     duration: 1.5,
    //     ease: "power2.out"
    // })

    tl.to('.test', {
        scrollTrigger: {
            trigger: '.test',
            start: 'center 55%',
            pin: true,
            scrub: 1
        },

        duration: 2,
        scale: 1.7
    })

    tl.to('.card', {
        scrollTrigger: {
            trigger: '.card',
            start: 'center 55%',
            pin: true,
            scrub: 1,
            markers: false
        },

        duration: 1,
        scale: 1.1,
        delay: 2,
        y: -10,
        x: -150,
        rotate: '-35deg'
    })
}
};
</script>

<style>
.exit {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}    
</style>