import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    mounted() {
        AOS.init({ anchorPlacement: 'center-bottom', mirror: false, })

        setInterval(() => {
            AOS.refresh()
        }, 5000);
    }
}