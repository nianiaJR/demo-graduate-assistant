<template lang="pug">
    #app
        navigator
        router-view
        footer-info
</template>

<script>
import Navigator from './components/Navigator'
import Footer from './components/Footer'
export default {
    name: 'app',
    components: {
        navigator: Navigator,
        'footer-info': Footer
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
html, body, #app {
    height: 100%;
}
ul {
    list-style: none;
}
</style>
