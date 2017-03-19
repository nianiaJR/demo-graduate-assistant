<template lang="pug">
    .nav
        .logo
        .search
            input
            icon(name="search")
        .pull-right(v-if="isLogined")
        .pull-right(v-else)
            .link-group
                a(href="") Home
                a(href="") About
            .link-group
                a(href="") 中
                a(href="") EN
            .link-group
                a(href="") Login
                a(href="") Sign Up
</template>

<script>
export default {
    data () {
        return {
            isLogined: false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.nav {
    display: flex;
    align-items: center;
    background-color: #deebf7;
    > .logo {
        margin: 0 20px 0 10px;
        width: 40px;
        height: 60px;
        background: url('../assets/logo.jpg') left no-repeat;
        background-size: 40px;
    }
    > .search {
        display: flex;
        border-radius: 5px;
        border: 1px solid #d1d1d1;
        box-shadow: 2px 2px 5px #a9a9a5;
        background-color: #fff;
        > input {
            display: inline-block;
            width: 250px;
            height: 26px;
            border: 0;
        }   
        > .fa-icon {
            padding: 2px 5px;
            height: 26px;
            border-left: 1px solid #a6a6a6;
        }
    }
    >.pull-right {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        > .link-group {
            > a{
                padding: 0 8px;
                color: #000;
                text-decoration: none;
                font-size: 14px;
                font-weight: bold;
            }
            > a + a {
                border-left: 1px solid #aaa;
            }
        }
        > .link-group + .link-group {
            margin-left: 30px;
        }
    }
}
</style>
