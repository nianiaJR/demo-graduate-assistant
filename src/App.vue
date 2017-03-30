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

<style lang="less">
* {
    margin: 0;
    padding: 0;
}
html, body, #app {
    min-height: 100%;
    background-color: #112248;
}
ul {
    list-style: none;
}
a {
    text-decoration: none;
}

@font-face {
    font-family: 'Verdana';
    src: url('/assets/Verdana/Verdana/Verdana.Verdana.ttf');
}
@font-face {
    font-family: 'Arial';
    src: url('/assets/Arial/Arial.ttf');
}
* {
    font-family: 'Arial';
}
h1,h2,h3,h4,h5,h6 {
    font-family: 'Verdana';
}
#app {
    margin: auto;
    width: 1433px;
    min-height: 100%;
    background-color: #f2f2f2;
}
</style>
