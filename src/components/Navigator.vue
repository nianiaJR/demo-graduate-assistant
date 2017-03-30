<template lang="pug">
.header
    .nav
        a.logo(:href="link")
        .search(v-if="isLogined", @click="goSearch")
            input(placeholder="Search within Canvas")
            icon(name="search")
        .pull-right(v-if="isLogined")
            .icon-group
                icon(name="commenting-o")
                icon(name="bell-o")
                icon(name="bars")
            .link-group.logined
                a(href="#/home") 中
                a(href="/home") EN
        .pull-right(v-else)
            .link-group
                a(href="#/home") Home
                a(href="/home") About
            .link-group
                a(href="#/home") 中
                a(href="/#home") EN
            .link-group
                a(href="#/sign") Login
                a(href="#/sign") Sign Up
    ul(v-if="isLogined")
        li
            a(href="#/home") Home
        li
            a(href="#/people") Profile
        li
            a(href="#/my-university") My Universities
</template>

<script>
import Bus from '../lib/bus.js'
export default {
    created () {
        Bus.$on('login', () => {
            this.isLogined = true
        })
    },
    data () {
        return {
            isLogined: false
        }
    },
    methods: {
        goSearch () {
            this.$router.push('Search')
        }
    },
    computed: {
        link () {
            if (this.isLogined) {
                return '#/home'
            } else {
                return '#/'
            }
        }
    },
    beforeDestroy () {
        Bus.$off('login')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.header {
    > .nav {
        display: flex;
        align-items: center;
        background-color: #deebf7;
        > .logo {
            display: block;
            margin: 0 20px 0 10px;
            width: 40px;
            height: 60px;
            background: url('../assets/logo.png') left no-repeat;
            background-size: 40px;
        }
        > .search {
            display: flex;
            border-radius: 5px;
            border: 1px solid #d1d1d1;
            box-shadow: 2px 2px 5px #a9a9a5;
            background-color: #fff;
            overflow: hidden;
            > input {
                display: inline-block;
                padding: 0 10px;
                width: 250px;
                height: 30px;
                border: 0;
                &:hover, &:focus {
                    outline: none;
                }
            }
            > .fa-icon {
                padding: 2px 5px;
                height: 28px;
                border-left: 1px solid #a6a6a6;
                cursor: pointer;
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
                    line-height: 30px;
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
            > .icon-group {
                margin-right: 50px;
                > .fa-icon {
                    margin: 0 20px;
                    width: 30px;
                    height: 30px;
                    color: #7a37aa;
                }
            }
            > .logined {
                margin-right: 30px;
            }
        }
    }
    > ul {
        display: flex;
        list-style: none;
        background: #9ec2e5;
        > li {
            padding: 10px 0px;
            font-size: 25px;
            > a {
                padding: 0px 10px;
                display: inline-block;
                color: #fff;
                text-decoration: none;
                border-left: 2px solid #9ec2e5;
            }
            &:hover {
                background: #0c6fbe;
                > a {
                    border-left: 2px solid #0c6fbe;
                }
            }
        }
        > li + li {
            > a {
                border-left: 2px solid #fff;
            }
        }
    }
}
</style>
