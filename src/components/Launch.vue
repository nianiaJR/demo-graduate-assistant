<template lang="pug">
    .launch
        rd-swipe(:swipe="swipe")
            .rd-swipe-item(:style="{'background-image': `url(${img.url})`}" v-for="(img, index) in imgs")
</template>

<script>
import rdSwipe from 'vue-slide'
export default {
    components: {
        'rd-swipe': rdSwipe
    },
    data () {
        return {
            swipe: {
                activeIndex: 0
            },
            imgs: [
                {
                    desc: 'Explore your photos',
                    url: require('../assets/road.jpeg')
                },
                {
                    desc: 'Tell your story',
                    url: require('../assets/road.jpeg')
                },
                {
                    desc: 'Engage with your school',
                    url: require('../assets/road.jpeg')
                }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
